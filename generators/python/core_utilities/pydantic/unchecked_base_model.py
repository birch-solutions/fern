import datetime as dt
import inspect
import typing
import uuid

import typing_extensions

from .datetime_utils import serialize_datetime
from .pydantic_utilities import pydantic_v1


class UnionMetadata:
    discriminant: str

    def __init__(self, *, discriminant: str) -> None:
        self.discriminant = discriminant


Model = typing.TypeVar("Model", bound=pydantic_v1.BaseModel)


class UncheckedBaseModel(pydantic_v1.BaseModel):
    # Allow extra fields
    class Config:
        extra = pydantic_v1.Extra.allow
        smart_union = True
        allow_population_by_field_name = True
        populate_by_name = True
        extra = pydantic_v1.Extra.allow
        json_encoders = {dt.datetime: serialize_datetime}

    # Allow construct to not validate model
    # Implementation taken from: https://github.com/pydantic/pydantic/issues/1168#issuecomment-817742836
    @classmethod
    def construct(
        cls: typing.Type["Model"], _fields_set: typing.Optional[typing.Set[str]] = None, **values: typing.Any
    ) -> "Model":
        m = cls.__new__(cls)  # type: ignore
        fields_values = {}

        config = cls.__config__

        if _fields_set is None:
            _fields_set = set(values.keys())

        for name, field in cls.__fields__.items():
            key = field.alias
            if (
                key not in values and config.allow_population_by_field_name
            ):  # Added this to allow population by field name
                key = name

            if key in values:
                if (
                    values[key] is None and not field.required
                ):  # Moved this check since None value can be passed for Optional nested field
                    fields_values[name] = field.get_default()
                else:
                    type_ = typing.cast(typing.Type, field.outer_type_)  # type: ignore
                    fields_values[name] = construct_type(object_=values[key], type_=type_)
            elif not field.required:
                default = field.get_default()
                fields_values[name] = default

                # If the default values are non-null act like they've been set
                # This effectively allows exclude_unset to work like exclude_none where
                # the latter passes through intentionally set none values.
                if default != None:
                    _fields_set.add(key)

        # Add extras back in
        for key, value in values.items():
            if key not in cls.__fields__:
                _fields_set.add(key)
                fields_values[key] = value

        object.__setattr__(m, "__dict__", fields_values)
        object.__setattr__(m, "__fields_set__", _fields_set)
        m._init_private_attributes()
        return m


def _convert_undiscriminated_union_type(union_type: typing.Type[typing.Any], object_: typing.Any) -> typing.Any:
    inner_types = pydantic_v1.typing.get_args(union_type)
    if typing.Any in inner_types:
        return object_

    for inner_type in inner_types:
        try:
            if inspect.isclass(inner_type) and issubclass(inner_type, pydantic_v1.BaseModel):
                # Attempt a validated parse until one works
                return pydantic_v1.parse_obj_as(inner_type, object_)
        except Exception:
            continue

    # If none of the types work, just return the first successful cast
    for inner_type in inner_types:
        try:
            return construct_type(object_=object_, type_=inner_type)
        except Exception:
            continue


def _convert_union_type(type_: typing.Type[typing.Any], object_: typing.Any) -> typing.Any:
    base_type = pydantic_v1.typing.get_origin(type_) or type_
    union_type = type_
    if base_type == typing_extensions.Annotated:
        union_type = pydantic_v1.typing.get_args(type_)[0]
        annotated_metadata = pydantic_v1.typing.get_args(type_)[1:]
        for metadata in annotated_metadata:
            if isinstance(metadata, UnionMetadata):
                try:
                    # Cast to the correct type, based on the discriminant
                    for inner_type in pydantic_v1.typing.get_args(union_type):
                        if inner_type.__fields__[metadata.discriminant].default == getattr(
                            object_, metadata.discriminant
                        ):
                            return construct_type(object_=object_, type_=inner_type)
                except Exception:
                    # Allow to fall through to our regular union handling
                    pass
    return _convert_undiscriminated_union_type(union_type, object_)


def construct_type(*, type_: typing.Type[typing.Any], object_: typing.Any) -> typing.Any:
    """
    Here we are essentially creating the same `construct` method in spirit as the above, but for all types, not just
    Pydantic models.
    The idea is to essentially attempt to coerce object_ to type_ (recursively)
    """
    base_type = pydantic_v1.typing.get_origin(type_) or type_
    is_annotated = base_type == typing_extensions.Annotated
    maybe_annotation_members = pydantic_v1.typing.get_args(type_)
    is_annotated_union = is_annotated and pydantic_v1.typing.is_union(
        pydantic_v1.typing.get_origin(maybe_annotation_members[0])
    )

    if base_type == typing.Any:
        return object_

    if base_type == dict:
        if not isinstance(object_, typing.Mapping):
            return object_

        _, items_type = pydantic_v1.typing.get_args(type_)
        return {key: construct_type(object_=item, type_=items_type) for key, item in object_.items()}

    if base_type == list:
        if not isinstance(object_, list):
            return object_

        inner_type = pydantic_v1.typing.get_args(type_)[0]
        return [construct_type(object_=entry, type_=inner_type) for entry in object_]

    if base_type == set:
        if not isinstance(object_, set) and not isinstance(object_, list):
            return object_

        inner_type = pydantic_v1.typing.get_args(type_)[0]
        return {construct_type(object_=entry, type_=inner_type) for entry in object_}

    if pydantic_v1.typing.is_union(base_type) or is_annotated_union:
        return _convert_union_type(type_, object_)

    # Cannot do an `issubclass` with a literal type, let's also just confirm we have a class before this call
    if not pydantic_v1.typing.is_literal_type(type_) and (
        inspect.isclass(base_type) and issubclass(base_type, pydantic_v1.BaseModel)
    ):
        return type_.construct(**object_)

    if base_type == dt.datetime:
        try:
            return pydantic_v1.datetime_parse.parse_datetime(object_)
        except Exception:
            return object_

    if base_type == dt.date:
        try:
            return pydantic_v1.datetime_parse.parse_date(object_)
        except Exception:
            return object_

    if base_type == uuid.UUID:
        try:
            return uuid.UUID(object_)
        except Exception:
            return object_

    return object_
