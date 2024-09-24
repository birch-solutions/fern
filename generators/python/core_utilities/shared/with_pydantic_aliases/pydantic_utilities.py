# nopycln: file
import datetime as dt
import typing
from collections import defaultdict

import typing_extensions

import pydantic

from .datetime_utils import serialize_datetime

IS_PYDANTIC_V2 = pydantic.VERSION.startswith("2.")

if IS_PYDANTIC_V2:
    # isort will try to reformat the comments on these imports, which breaks mypy
    # isort: off
    from pydantic.v1.datetime_parse import (  # type: ignore # pyright: ignore[reportMissingImports] # Pydantic v2
        parse_date as parse_date,
    )
    from pydantic.v1.datetime_parse import (  # pyright: ignore[reportMissingImports] # Pydantic v2
        parse_datetime as parse_datetime,
    )
    from pydantic.v1.json import (  # type: ignore # pyright: ignore[reportMissingImports] # Pydantic v2
        ENCODERS_BY_TYPE as encoders_by_type,
    )
    from pydantic.v1.typing import (  # type: ignore # pyright: ignore[reportMissingImports] # Pydantic v2
        get_args as get_args,
    )
    from pydantic.v1.typing import (  # pyright: ignore[reportMissingImports] # Pydantic v2
        get_origin as get_origin,
    )
    from pydantic.v1.typing import (  # pyright: ignore[reportMissingImports] # Pydantic v2
        is_literal_type as is_literal_type,
    )
    from pydantic.v1.typing import (  # pyright: ignore[reportMissingImports] # Pydantic v2
        is_union as is_union,
    )
    from pydantic.v1.fields import ModelField as ModelField  # type: ignore # pyright: ignore[reportMissingImports] # Pydantic v2
else:
    from pydantic.datetime_parse import parse_date as parse_date  # type: ignore # Pydantic v1
    from pydantic.datetime_parse import parse_datetime as parse_datetime  # type: ignore # Pydantic v1
    from pydantic.fields import ModelField as ModelField  # type: ignore # Pydantic v1
    from pydantic.json import ENCODERS_BY_TYPE as encoders_by_type  # type: ignore # Pydantic v1
    from pydantic.typing import get_args as get_args  # type: ignore # Pydantic v1
    from pydantic.typing import get_origin as get_origin  # type: ignore # Pydantic v1
    from pydantic.typing import is_literal_type as is_literal_type  # type: ignore # Pydantic v1
    from pydantic.typing import is_union as is_union  # type: ignore # Pydantic v1

    # isort: on


T = typing.TypeVar("T")
Model = typing.TypeVar("Model", bound=pydantic.BaseModel)


def parse_obj_as(type_: typing.Type[T], object_: typing.Any) -> T:
    if IS_PYDANTIC_V2:
        adapter = pydantic.TypeAdapter(type_)  # type: ignore # Pydantic v2
        return adapter.validate_python(object_)
    else:
        return pydantic.parse_obj_as(type_, object_)


def to_jsonable_with_fallback(
    obj: typing.Any, fallback_serializer: typing.Callable[[typing.Any], typing.Any]
) -> typing.Any:
    if IS_PYDANTIC_V2:
        from pydantic_core import to_jsonable_python

        return to_jsonable_python(obj, fallback=fallback_serializer)
    else:
        return fallback_serializer(obj)


class UniversalBaseModel(pydantic.BaseModel):
    class Config:
        populate_by_name = True
        smart_union = True
        allow_population_by_field_name = True
        json_encoders = {dt.datetime: serialize_datetime}
        # Allow fields begining with `model_` to be used in the model
        protected_namespaces = ()

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {
            "by_alias": True,
            "exclude_unset": True,
            **kwargs,
        }
        if IS_PYDANTIC_V2:
            return super().model_dump_json(**kwargs_with_defaults)  # type: ignore # Pydantic v2
        else:
            return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        """
        Override the default dict method to `exclude_unset` by default. This function patches
        `exclude_unset` to work include fields within non-None default values.
        """
        # Note: the logic here is multi-plexed given the levers exposed in Pydantic V1 vs V2
        # Pydantic V1's .dict can be extremely slow, so we do not want to call it twice.
        #
        # We'd ideally do the same for Pydantic V2, but it shells out to a library to serialize models
        # that we have less control over, and this is less intrusive than custom serializers for now.
        if IS_PYDANTIC_V2:
            kwargs_with_defaults_exclude_unset: typing.Any = {
                **kwargs,
                "by_alias": True,
                "exclude_unset": True,
                "exclude_none": False,
            }
            kwargs_with_defaults_exclude_none: typing.Any = {
                **kwargs,
                "by_alias": True,
                "exclude_none": True,
                "exclude_unset": False,
            }
            return deep_union_pydantic_dicts(
                super().model_dump(**kwargs_with_defaults_exclude_unset),  # type: ignore # Pydantic v2
                super().model_dump(**kwargs_with_defaults_exclude_none),  # type: ignore # Pydantic v2
            )

        else:
            _fields_set = self.__fields_set__.copy()

            fields = _get_model_fields(self.__class__)
            for name, field in fields.items():
                if name not in _fields_set:
                    default = _get_field_default(field)

                    # If the default values are non-null act like they've been set
                    # This effectively allows exclude_unset to work like exclude_none where
                    # the latter passes through intentionally set none values.
                    if default != None or ("exclude_unset" in kwargs and not kwargs["exclude_unset"]):
                        _fields_set.add(name)

            kwargs_with_defaults_exclude_unset_include_fields: typing.Any = {
                "by_alias": True,
                "exclude_unset": True,
                "include": _fields_set,
                **kwargs,
            }

            return super().dict(**kwargs_with_defaults_exclude_unset_include_fields)


def deep_union_pydantic_dicts(
    source: typing.Dict[str, typing.Any], destination: typing.Dict[str, typing.Any]
) -> typing.Dict[str, typing.Any]:
    for key, value in source.items():
        if isinstance(value, dict):
            node = destination.setdefault(key, {})
            deep_union_pydantic_dicts(value, node)
        else:
            destination[key] = value

    return destination


if IS_PYDANTIC_V2:

    class V2RootModel(UniversalBaseModel, pydantic.RootModel):  # type: ignore # Pydantic v2
        pass

    UniversalRootModel: typing_extensions.TypeAlias = V2RootModel  # type: ignore
else:
    UniversalRootModel: typing_extensions.TypeAlias = UniversalBaseModel  # type: ignore


def encode_by_type(o: typing.Any) -> typing.Any:
    encoders_by_class_tuples: typing.Dict[
        typing.Callable[[typing.Any], typing.Any], typing.Tuple[typing.Any, ...]
    ] = defaultdict(tuple)
    for type_, encoder in encoders_by_type.items():
        encoders_by_class_tuples[encoder] += (type_,)

    if type(o) in encoders_by_type:
        return encoders_by_type[type(o)](o)
    for encoder, classes_tuple in encoders_by_class_tuples.items():
        if isinstance(o, classes_tuple):
            return encoder(o)


def update_forward_refs(model: typing.Type["Model"], **localns: typing.Any) -> None:
    if IS_PYDANTIC_V2:
        model.model_rebuild(raise_errors=False)  # type: ignore # Pydantic v2
    else:
        model.update_forward_refs(**localns)


# Mirrors Pydantic's internal typing
AnyCallable = typing.Callable[..., typing.Any]


def universal_root_validator(
    pre: bool = False,
) -> typing.Callable[[AnyCallable], AnyCallable]:
    def decorator(func: AnyCallable) -> AnyCallable:
        if IS_PYDANTIC_V2:
            return pydantic.model_validator(mode="before" if pre else "after")(func)  # type: ignore # Pydantic v2
        else:
            return pydantic.root_validator(pre=pre)(func)  # type: ignore # Pydantic v1

    return decorator


def universal_field_validator(field_name: str, pre: bool = False) -> typing.Callable[[AnyCallable], AnyCallable]:
    def decorator(func: AnyCallable) -> AnyCallable:
        if IS_PYDANTIC_V2:
            return pydantic.field_validator(field_name, mode="before" if pre else "after")(
                func
            )  # type: ignore # Pydantic v2
        else:
            return pydantic.validator(field_name, pre=pre)(func)  # type: ignore # Pydantic v1

    return decorator


PydanticField = typing.Union[ModelField, pydantic.fields.FieldInfo]


def _get_model_fields(
    model: typing.Type["Model"],
) -> typing.Mapping[str, PydanticField]:
    if IS_PYDANTIC_V2:
        return model.model_fields  # type: ignore # Pydantic v2
    else:
        return model.__fields__  # type: ignore # Pydantic v1


def _get_field_default(field: PydanticField) -> typing.Any:
    try:
        value = field.get_default()  # type: ignore # Pydantic < v1.10.15
    except:
        value = field.default
    if IS_PYDANTIC_V2:
        from pydantic_core import PydanticUndefined

        if value == PydanticUndefined:
            return None
        return value
    return value
