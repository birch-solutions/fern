# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ......core.pydantic_utilities import UniversalBaseModel
import typing
import pydantic
import datetime as dt
import uuid
from ......core.pydantic_utilities import universal_root_validator
from ......core.pydantic_utilities import universal_field_validator


class ObjectWithOptionalField(UniversalBaseModel):
    string: typing.Optional[str] = pydantic.Field(default=None)
    """
    This is a rather long descriptor of this single field in a more complex type. If you ask me I think this is a pretty good description for this field all things considered.
    """

    integer: typing.Optional[int] = None
    long_: typing.Optional[int] = pydantic.Field(alias="long", default=None)
    double: typing.Optional[float] = None
    bool_: typing.Optional[bool] = pydantic.Field(alias="bool", default=None)
    datetime: typing.Optional[dt.datetime] = None
    date: typing.Optional[dt.date] = None
    uuid_: typing.Optional[uuid.UUID] = pydantic.Field(alias="uuid", default=None)
    base_64: typing.Optional[str] = pydantic.Field(alias="base64", default=None)
    list_: typing.Optional[typing.List[str]] = pydantic.Field(
        alias="list", default=None
    )
    set_: typing.Optional[typing.Set[str]] = pydantic.Field(alias="set", default=None)
    map_: typing.Optional[typing.Dict[int, str]] = pydantic.Field(
        alias="map", default=None
    )
    bigint: typing.Optional[str] = None

    class Validators:
        """
        Use this class to add validators to the Pydantic model.

            @ObjectWithOptionalField.Validators.root()
            def validate(values: ObjectWithOptionalField.Partial) -> ObjectWithOptionalField.Partial:
                ...

            @ObjectWithOptionalField.Validators.field("string")
            def validate_string(string: typing.Optional[str], values: ObjectWithOptionalField.Partial) -> typing.Optional[str]:
                ...

            @ObjectWithOptionalField.Validators.field("integer")
            def validate_integer(integer: typing.Optional[int], values: ObjectWithOptionalField.Partial) -> typing.Optional[int]:
                ...

            @ObjectWithOptionalField.Validators.field("long_")
            def validate_long_(long_: typing.Optional[int], values: ObjectWithOptionalField.Partial) -> typing.Optional[int]:
                ...

            @ObjectWithOptionalField.Validators.field("double")
            def validate_double(double: typing.Optional[float], values: ObjectWithOptionalField.Partial) -> typing.Optional[float]:
                ...

            @ObjectWithOptionalField.Validators.field("bool_")
            def validate_bool_(bool_: typing.Optional[bool], values: ObjectWithOptionalField.Partial) -> typing.Optional[bool]:
                ...

            @ObjectWithOptionalField.Validators.field("datetime")
            def validate_datetime(datetime: typing.Optional[dt.datetime], values: ObjectWithOptionalField.Partial) -> typing.Optional[dt.datetime]:
                ...

            @ObjectWithOptionalField.Validators.field("date")
            def validate_date(date: typing.Optional[dt.date], values: ObjectWithOptionalField.Partial) -> typing.Optional[dt.date]:
                ...

            @ObjectWithOptionalField.Validators.field("uuid_")
            def validate_uuid_(uuid_: typing.Optional[uuid.UUID], values: ObjectWithOptionalField.Partial) -> typing.Optional[uuid.UUID]:
                ...

            @ObjectWithOptionalField.Validators.field("base_64")
            def validate_base_64(base_64: typing.Optional[str], values: ObjectWithOptionalField.Partial) -> typing.Optional[str]:
                ...

            @ObjectWithOptionalField.Validators.field("list_")
            def validate_list_(list_: typing.Optional[typing.List[str]], values: ObjectWithOptionalField.Partial) -> typing.Optional[typing.List[str]]:
                ...

            @ObjectWithOptionalField.Validators.field("set_")
            def validate_set_(set_: typing.Optional[typing.Set[str]], values: ObjectWithOptionalField.Partial) -> typing.Optional[typing.Set[str]]:
                ...

            @ObjectWithOptionalField.Validators.field("map_")
            def validate_map_(map_: typing.Optional[typing.Dict[int, str]], values: ObjectWithOptionalField.Partial) -> typing.Optional[typing.Dict[int, str]]:
                ...

            @ObjectWithOptionalField.Validators.field("bigint")
            def validate_bigint(bigint: typing.Optional[str], values: ObjectWithOptionalField.Partial) -> typing.Optional[str]:
                ...
        """

        _pre_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators._PreRootValidator]
        ] = []
        _post_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators._RootValidator]
        ] = []
        _string_pre_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.PreStringValidator]
        ] = []
        _string_post_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.StringValidator]
        ] = []
        _integer_pre_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.PreIntegerValidator]
        ] = []
        _integer_post_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.IntegerValidator]
        ] = []
        _long__pre_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.PreLongValidator]
        ] = []
        _long__post_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.LongValidator]
        ] = []
        _double_pre_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.PreDoubleValidator]
        ] = []
        _double_post_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.DoubleValidator]
        ] = []
        _bool__pre_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.PreBoolValidator]
        ] = []
        _bool__post_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.BoolValidator]
        ] = []
        _datetime_pre_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.PreDatetimeValidator]
        ] = []
        _datetime_post_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.DatetimeValidator]
        ] = []
        _date_pre_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.PreDateValidator]
        ] = []
        _date_post_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.DateValidator]
        ] = []
        _uuid__pre_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.PreUuidValidator]
        ] = []
        _uuid__post_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.UuidValidator]
        ] = []
        _base_64_pre_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.PreBase64Validator]
        ] = []
        _base_64_post_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.Base64Validator]
        ] = []
        _list__pre_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.PreListValidator]
        ] = []
        _list__post_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.ListValidator]
        ] = []
        _set__pre_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.PreSetValidator]
        ] = []
        _set__post_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.SetValidator]
        ] = []
        _map__pre_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.PreMapValidator]
        ] = []
        _map__post_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.MapValidator]
        ] = []
        _bigint_pre_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.PreBigintValidator]
        ] = []
        _bigint_post_validators: typing.ClassVar[
            typing.List[ObjectWithOptionalField.Validators.BigintValidator]
        ] = []

        @typing.overload
        @classmethod
        def root(
            cls, *, pre: typing.Literal[False] = False
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators._RootValidator],
            ObjectWithOptionalField.Validators._RootValidator,
        ]: ...
        @typing.overload
        @classmethod
        def root(
            cls, *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators._PreRootValidator],
            ObjectWithOptionalField.Validators._PreRootValidator,
        ]: ...
        @classmethod
        def root(cls, *, pre: bool = False) -> typing.Any:
            def decorator(validator: typing.Any) -> typing.Any:
                if pre:
                    cls._pre_validators.append(validator)
                else:
                    cls._post_validators.append(validator)
                return validator

            return decorator

        @typing.overload
        @classmethod
        def field(
            cls, field_name: typing.Literal["string"], *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.PreStringValidator],
            ObjectWithOptionalField.Validators.PreStringValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["string"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.StringValidator],
            ObjectWithOptionalField.Validators.StringValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls, field_name: typing.Literal["integer"], *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.PreIntegerValidator],
            ObjectWithOptionalField.Validators.PreIntegerValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["integer"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.IntegerValidator],
            ObjectWithOptionalField.Validators.IntegerValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls, field_name: typing.Literal["long_"], *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.PreLongValidator],
            ObjectWithOptionalField.Validators.PreLongValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["long_"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.LongValidator],
            ObjectWithOptionalField.Validators.LongValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls, field_name: typing.Literal["double"], *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.PreDoubleValidator],
            ObjectWithOptionalField.Validators.PreDoubleValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["double"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.DoubleValidator],
            ObjectWithOptionalField.Validators.DoubleValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls, field_name: typing.Literal["bool_"], *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.PreBoolValidator],
            ObjectWithOptionalField.Validators.PreBoolValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["bool_"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.BoolValidator],
            ObjectWithOptionalField.Validators.BoolValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls, field_name: typing.Literal["datetime"], *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.PreDatetimeValidator],
            ObjectWithOptionalField.Validators.PreDatetimeValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["datetime"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.DatetimeValidator],
            ObjectWithOptionalField.Validators.DatetimeValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls, field_name: typing.Literal["date"], *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.PreDateValidator],
            ObjectWithOptionalField.Validators.PreDateValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["date"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.DateValidator],
            ObjectWithOptionalField.Validators.DateValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls, field_name: typing.Literal["uuid_"], *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.PreUuidValidator],
            ObjectWithOptionalField.Validators.PreUuidValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["uuid_"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.UuidValidator],
            ObjectWithOptionalField.Validators.UuidValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls, field_name: typing.Literal["base_64"], *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.PreBase64Validator],
            ObjectWithOptionalField.Validators.PreBase64Validator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["base_64"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.Base64Validator],
            ObjectWithOptionalField.Validators.Base64Validator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls, field_name: typing.Literal["list_"], *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.PreListValidator],
            ObjectWithOptionalField.Validators.PreListValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["list_"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.ListValidator],
            ObjectWithOptionalField.Validators.ListValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls, field_name: typing.Literal["set_"], *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.PreSetValidator],
            ObjectWithOptionalField.Validators.PreSetValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["set_"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.SetValidator],
            ObjectWithOptionalField.Validators.SetValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls, field_name: typing.Literal["map_"], *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.PreMapValidator],
            ObjectWithOptionalField.Validators.PreMapValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["map_"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.MapValidator],
            ObjectWithOptionalField.Validators.MapValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls, field_name: typing.Literal["bigint"], *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.PreBigintValidator],
            ObjectWithOptionalField.Validators.PreBigintValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["bigint"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [ObjectWithOptionalField.Validators.BigintValidator],
            ObjectWithOptionalField.Validators.BigintValidator,
        ]: ...
        @classmethod
        def field(cls, field_name: str, *, pre: bool = False) -> typing.Any:
            def decorator(validator: typing.Any) -> typing.Any:
                if field_name == "string":
                    if pre:
                        cls._string_pre_validators.append(validator)
                    else:
                        cls._string_post_validators.append(validator)
                if field_name == "integer":
                    if pre:
                        cls._integer_pre_validators.append(validator)
                    else:
                        cls._integer_post_validators.append(validator)
                if field_name == "long_":
                    if pre:
                        cls._long__pre_validators.append(validator)
                    else:
                        cls._long__post_validators.append(validator)
                if field_name == "double":
                    if pre:
                        cls._double_pre_validators.append(validator)
                    else:
                        cls._double_post_validators.append(validator)
                if field_name == "bool_":
                    if pre:
                        cls._bool__pre_validators.append(validator)
                    else:
                        cls._bool__post_validators.append(validator)
                if field_name == "datetime":
                    if pre:
                        cls._datetime_pre_validators.append(validator)
                    else:
                        cls._datetime_post_validators.append(validator)
                if field_name == "date":
                    if pre:
                        cls._date_pre_validators.append(validator)
                    else:
                        cls._date_post_validators.append(validator)
                if field_name == "uuid_":
                    if pre:
                        cls._uuid__pre_validators.append(validator)
                    else:
                        cls._uuid__post_validators.append(validator)
                if field_name == "base_64":
                    if pre:
                        cls._base_64_pre_validators.append(validator)
                    else:
                        cls._base_64_post_validators.append(validator)
                if field_name == "list_":
                    if pre:
                        cls._list__pre_validators.append(validator)
                    else:
                        cls._list__post_validators.append(validator)
                if field_name == "set_":
                    if pre:
                        cls._set__pre_validators.append(validator)
                    else:
                        cls._set__post_validators.append(validator)
                if field_name == "map_":
                    if pre:
                        cls._map__pre_validators.append(validator)
                    else:
                        cls._map__post_validators.append(validator)
                if field_name == "bigint":
                    if pre:
                        cls._bigint_pre_validators.append(validator)
                    else:
                        cls._bigint_post_validators.append(validator)
                return validator

            return decorator

        class PreStringValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: ObjectWithOptionalField.Partial
            ) -> typing.Any: ...

        class StringValidator(typing.Protocol):
            def __call__(
                self,
                __v: typing.Optional[str],
                __values: ObjectWithOptionalField.Partial,
            ) -> typing.Optional[str]: ...

        class PreIntegerValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: ObjectWithOptionalField.Partial
            ) -> typing.Any: ...

        class IntegerValidator(typing.Protocol):
            def __call__(
                self,
                __v: typing.Optional[int],
                __values: ObjectWithOptionalField.Partial,
            ) -> typing.Optional[int]: ...

        class PreLongValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: ObjectWithOptionalField.Partial
            ) -> typing.Any: ...

        class LongValidator(typing.Protocol):
            def __call__(
                self,
                __v: typing.Optional[int],
                __values: ObjectWithOptionalField.Partial,
            ) -> typing.Optional[int]: ...

        class PreDoubleValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: ObjectWithOptionalField.Partial
            ) -> typing.Any: ...

        class DoubleValidator(typing.Protocol):
            def __call__(
                self,
                __v: typing.Optional[float],
                __values: ObjectWithOptionalField.Partial,
            ) -> typing.Optional[float]: ...

        class PreBoolValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: ObjectWithOptionalField.Partial
            ) -> typing.Any: ...

        class BoolValidator(typing.Protocol):
            def __call__(
                self,
                __v: typing.Optional[bool],
                __values: ObjectWithOptionalField.Partial,
            ) -> typing.Optional[bool]: ...

        class PreDatetimeValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: ObjectWithOptionalField.Partial
            ) -> typing.Any: ...

        class DatetimeValidator(typing.Protocol):
            def __call__(
                self,
                __v: typing.Optional[dt.datetime],
                __values: ObjectWithOptionalField.Partial,
            ) -> typing.Optional[dt.datetime]: ...

        class PreDateValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: ObjectWithOptionalField.Partial
            ) -> typing.Any: ...

        class DateValidator(typing.Protocol):
            def __call__(
                self,
                __v: typing.Optional[dt.date],
                __values: ObjectWithOptionalField.Partial,
            ) -> typing.Optional[dt.date]: ...

        class PreUuidValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: ObjectWithOptionalField.Partial
            ) -> typing.Any: ...

        class UuidValidator(typing.Protocol):
            def __call__(
                self,
                __v: typing.Optional[uuid.UUID],
                __values: ObjectWithOptionalField.Partial,
            ) -> typing.Optional[uuid.UUID]: ...

        class PreBase64Validator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: ObjectWithOptionalField.Partial
            ) -> typing.Any: ...

        class Base64Validator(typing.Protocol):
            def __call__(
                self,
                __v: typing.Optional[str],
                __values: ObjectWithOptionalField.Partial,
            ) -> typing.Optional[str]: ...

        class PreListValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: ObjectWithOptionalField.Partial
            ) -> typing.Any: ...

        class ListValidator(typing.Protocol):
            def __call__(
                self,
                __v: typing.Optional[typing.List[str]],
                __values: ObjectWithOptionalField.Partial,
            ) -> typing.Optional[typing.List[str]]: ...

        class PreSetValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: ObjectWithOptionalField.Partial
            ) -> typing.Any: ...

        class SetValidator(typing.Protocol):
            def __call__(
                self,
                __v: typing.Optional[typing.Set[str]],
                __values: ObjectWithOptionalField.Partial,
            ) -> typing.Optional[typing.Set[str]]: ...

        class PreMapValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: ObjectWithOptionalField.Partial
            ) -> typing.Any: ...

        class MapValidator(typing.Protocol):
            def __call__(
                self,
                __v: typing.Optional[typing.Dict[int, str]],
                __values: ObjectWithOptionalField.Partial,
            ) -> typing.Optional[typing.Dict[int, str]]: ...

        class PreBigintValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: ObjectWithOptionalField.Partial
            ) -> typing.Any: ...

        class BigintValidator(typing.Protocol):
            def __call__(
                self,
                __v: typing.Optional[str],
                __values: ObjectWithOptionalField.Partial,
            ) -> typing.Optional[str]: ...

        class _PreRootValidator(typing.Protocol):
            def __call__(self, __values: typing.Any) -> typing.Any: ...

        class _RootValidator(typing.Protocol):
            def __call__(
                self, __values: ObjectWithOptionalField.Partial
            ) -> ObjectWithOptionalField.Partial: ...

    @universal_root_validator(pre=True)
    def _pre_validate_types_object_with_optional_field(
        cls, values: ObjectWithOptionalField.Partial
    ) -> ObjectWithOptionalField.Partial:
        for validator in ObjectWithOptionalField.Validators._pre_validators:
            values = validator(values)
        return values

    @universal_root_validator(pre=False)
    def _post_validate_types_object_with_optional_field(
        cls, values: ObjectWithOptionalField.Partial
    ) -> ObjectWithOptionalField.Partial:
        for validator in ObjectWithOptionalField.Validators._post_validators:
            values = validator(values)
        return values

    @universal_field_validator("string", pre=True)
    def _pre_validate_string(
        cls, v: typing.Optional[str], values: ObjectWithOptionalField.Partial
    ) -> typing.Optional[str]:
        for validator in ObjectWithOptionalField.Validators._string_pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("string", pre=False)
    def _post_validate_string(
        cls, v: typing.Optional[str], values: ObjectWithOptionalField.Partial
    ) -> typing.Optional[str]:
        for validator in ObjectWithOptionalField.Validators._string_post_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("integer", pre=True)
    def _pre_validate_integer(
        cls, v: typing.Optional[int], values: ObjectWithOptionalField.Partial
    ) -> typing.Optional[int]:
        for validator in ObjectWithOptionalField.Validators._integer_pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("integer", pre=False)
    def _post_validate_integer(
        cls, v: typing.Optional[int], values: ObjectWithOptionalField.Partial
    ) -> typing.Optional[int]:
        for validator in ObjectWithOptionalField.Validators._integer_post_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("long_", pre=True)
    def _pre_validate_long_(
        cls, v: typing.Optional[int], values: ObjectWithOptionalField.Partial
    ) -> typing.Optional[int]:
        for validator in ObjectWithOptionalField.Validators._long__pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("long_", pre=False)
    def _post_validate_long_(
        cls, v: typing.Optional[int], values: ObjectWithOptionalField.Partial
    ) -> typing.Optional[int]:
        for validator in ObjectWithOptionalField.Validators._long__post_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("double", pre=True)
    def _pre_validate_double(
        cls, v: typing.Optional[float], values: ObjectWithOptionalField.Partial
    ) -> typing.Optional[float]:
        for validator in ObjectWithOptionalField.Validators._double_pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("double", pre=False)
    def _post_validate_double(
        cls, v: typing.Optional[float], values: ObjectWithOptionalField.Partial
    ) -> typing.Optional[float]:
        for validator in ObjectWithOptionalField.Validators._double_post_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("bool_", pre=True)
    def _pre_validate_bool_(
        cls, v: typing.Optional[bool], values: ObjectWithOptionalField.Partial
    ) -> typing.Optional[bool]:
        for validator in ObjectWithOptionalField.Validators._bool__pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("bool_", pre=False)
    def _post_validate_bool_(
        cls, v: typing.Optional[bool], values: ObjectWithOptionalField.Partial
    ) -> typing.Optional[bool]:
        for validator in ObjectWithOptionalField.Validators._bool__post_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("datetime", pre=True)
    def _pre_validate_datetime(
        cls, v: typing.Optional[dt.datetime], values: ObjectWithOptionalField.Partial
    ) -> typing.Optional[dt.datetime]:
        for validator in ObjectWithOptionalField.Validators._datetime_pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("datetime", pre=False)
    def _post_validate_datetime(
        cls, v: typing.Optional[dt.datetime], values: ObjectWithOptionalField.Partial
    ) -> typing.Optional[dt.datetime]:
        for validator in ObjectWithOptionalField.Validators._datetime_post_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("date", pre=True)
    def _pre_validate_date(
        cls, v: typing.Optional[dt.date], values: ObjectWithOptionalField.Partial
    ) -> typing.Optional[dt.date]:
        for validator in ObjectWithOptionalField.Validators._date_pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("date", pre=False)
    def _post_validate_date(
        cls, v: typing.Optional[dt.date], values: ObjectWithOptionalField.Partial
    ) -> typing.Optional[dt.date]:
        for validator in ObjectWithOptionalField.Validators._date_post_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("uuid_", pre=True)
    def _pre_validate_uuid_(
        cls, v: typing.Optional[uuid.UUID], values: ObjectWithOptionalField.Partial
    ) -> typing.Optional[uuid.UUID]:
        for validator in ObjectWithOptionalField.Validators._uuid__pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("uuid_", pre=False)
    def _post_validate_uuid_(
        cls, v: typing.Optional[uuid.UUID], values: ObjectWithOptionalField.Partial
    ) -> typing.Optional[uuid.UUID]:
        for validator in ObjectWithOptionalField.Validators._uuid__post_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("base_64", pre=True)
    def _pre_validate_base_64(
        cls, v: typing.Optional[str], values: ObjectWithOptionalField.Partial
    ) -> typing.Optional[str]:
        for validator in ObjectWithOptionalField.Validators._base_64_pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("base_64", pre=False)
    def _post_validate_base_64(
        cls, v: typing.Optional[str], values: ObjectWithOptionalField.Partial
    ) -> typing.Optional[str]:
        for validator in ObjectWithOptionalField.Validators._base_64_post_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("list_", pre=True)
    def _pre_validate_list_(
        cls,
        v: typing.Optional[typing.List[str]],
        values: ObjectWithOptionalField.Partial,
    ) -> typing.Optional[typing.List[str]]:
        for validator in ObjectWithOptionalField.Validators._list__pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("list_", pre=False)
    def _post_validate_list_(
        cls,
        v: typing.Optional[typing.List[str]],
        values: ObjectWithOptionalField.Partial,
    ) -> typing.Optional[typing.List[str]]:
        for validator in ObjectWithOptionalField.Validators._list__post_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("set_", pre=True)
    def _pre_validate_set_(
        cls,
        v: typing.Optional[typing.Set[str]],
        values: ObjectWithOptionalField.Partial,
    ) -> typing.Optional[typing.Set[str]]:
        for validator in ObjectWithOptionalField.Validators._set__pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("set_", pre=False)
    def _post_validate_set_(
        cls,
        v: typing.Optional[typing.Set[str]],
        values: ObjectWithOptionalField.Partial,
    ) -> typing.Optional[typing.Set[str]]:
        for validator in ObjectWithOptionalField.Validators._set__post_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("map_", pre=True)
    def _pre_validate_map_(
        cls,
        v: typing.Optional[typing.Dict[int, str]],
        values: ObjectWithOptionalField.Partial,
    ) -> typing.Optional[typing.Dict[int, str]]:
        for validator in ObjectWithOptionalField.Validators._map__pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("map_", pre=False)
    def _post_validate_map_(
        cls,
        v: typing.Optional[typing.Dict[int, str]],
        values: ObjectWithOptionalField.Partial,
    ) -> typing.Optional[typing.Dict[int, str]]:
        for validator in ObjectWithOptionalField.Validators._map__post_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("bigint", pre=True)
    def _pre_validate_bigint(
        cls, v: typing.Optional[str], values: ObjectWithOptionalField.Partial
    ) -> typing.Optional[str]:
        for validator in ObjectWithOptionalField.Validators._bigint_pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("bigint", pre=False)
    def _post_validate_bigint(
        cls, v: typing.Optional[str], values: ObjectWithOptionalField.Partial
    ) -> typing.Optional[str]:
        for validator in ObjectWithOptionalField.Validators._bigint_post_validators:
            v = validator(v, values)
        return v

    class Config:
        extra = pydantic.Extra.forbid
