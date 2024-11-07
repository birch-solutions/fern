# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ......core.pydantic_utilities import UniversalBaseModel
import typing
import pydantic
import typing_extensions
from ......core.pydantic_utilities import universal_field_validator


class ObjectWithMapOfMap(UniversalBaseModel):
    map_: typing.Dict[str, typing.Dict[str, str]] = pydantic.Field(alias="map")

    class Partial(typing.TypedDict):
        map_: typing_extensions.NotRequired[typing.Dict[str, typing.Dict[str, str]]]

    class Validators:
        """
        Use this class to add validators to the Pydantic model.

            @ObjectWithMapOfMap.Validators.root()
            def validate(values: ObjectWithMapOfMap.Partial) -> ObjectWithMapOfMap.Partial:
                ...

            @ObjectWithMapOfMap.Validators.field("map_")
            def validate_map_(map_: typing.Dict[str, typing.Dict[str, str]], values: ObjectWithMapOfMap.Partial) -> typing.Dict[str, typing.Dict[str, str]]:
                ...
        """

        _pre_validators: typing.ClassVar[
            typing.List[ObjectWithMapOfMap.Validators._PreRootValidator]
        ] = []
        _post_validators: typing.ClassVar[
            typing.List[ObjectWithMapOfMap.Validators._RootValidator]
        ] = []
        _map__pre_validators: typing.ClassVar[
            typing.List[ObjectWithMapOfMap.Validators.PreMapValidator]
        ] = []
        _map__post_validators: typing.ClassVar[
            typing.List[ObjectWithMapOfMap.Validators.MapValidator]
        ] = []

        @typing.overload
        @classmethod
        def root(
            cls, *, pre: typing.Literal[False] = False
        ) -> typing.Callable[
            [ObjectWithMapOfMap.Validators._RootValidator],
            ObjectWithMapOfMap.Validators._RootValidator,
        ]: ...
        @typing.overload
        @classmethod
        def root(
            cls, *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [ObjectWithMapOfMap.Validators._PreRootValidator],
            ObjectWithMapOfMap.Validators._PreRootValidator,
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
            cls, field_name: typing.Literal["map_"], *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [ObjectWithMapOfMap.Validators.PreMapValidator],
            ObjectWithMapOfMap.Validators.PreMapValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["map_"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [ObjectWithMapOfMap.Validators.MapValidator],
            ObjectWithMapOfMap.Validators.MapValidator,
        ]: ...
        @classmethod
        def field(cls, field_name: str, *, pre: bool = False) -> typing.Any:
            def decorator(validator: typing.Any) -> typing.Any:
                if field_name == "map_":
                    if pre:
                        cls._map__pre_validators.append(validator)
                    else:
                        cls._map__post_validators.append(validator)
                return validator

            return decorator

        class PreMapValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: ObjectWithMapOfMap.Partial
            ) -> typing.Any: ...

        class MapValidator(typing.Protocol):
            def __call__(
                self,
                __v: typing.Dict[str, typing.Dict[str, str]],
                __values: ObjectWithMapOfMap.Partial,
            ) -> typing.Dict[str, typing.Dict[str, str]]: ...

        class _PreRootValidator(typing.Protocol):
            def __call__(self, __values: typing.Any) -> typing.Any: ...

        class _RootValidator(typing.Protocol):
            def __call__(
                self, __values: ObjectWithMapOfMap.Partial
            ) -> ObjectWithMapOfMap.Partial: ...

    @pydantic.model_validator(mode="before")
    def _pre_validate_types_object_with_map_of_map(
        cls, model: ObjectWithMapOfMap
    ) -> ObjectWithMapOfMap:
        for validator in ObjectWithMapOfMap.Validators._pre_validators:
            values = validator(values)
        return model

    @pydantic.model_validator(mode="after")
    def _post_validate_types_object_with_map_of_map(
        cls, model: ObjectWithMapOfMap
    ) -> ObjectWithMapOfMap:
        for validator in ObjectWithMapOfMap.Validators._post_validators:
            values = validator(values)
        return model

    @universal_field_validator("map_", pre=True)
    def _pre_validate_map_(
        cls,
        v: typing.Dict[str, typing.Dict[str, str]],
        values: ObjectWithMapOfMap.Partial,
    ) -> typing.Dict[str, typing.Dict[str, str]]:
        for validator in ObjectWithMapOfMap.Validators._map__pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("map_", pre=False)
    def _post_validate_map_(
        cls,
        v: typing.Dict[str, typing.Dict[str, str]],
        values: ObjectWithMapOfMap.Partial,
    ) -> typing.Dict[str, typing.Dict[str, str]]:
        for validator in ObjectWithMapOfMap.Validators._map__post_validators:
            v = validator(v, values)
        return v

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
        extra="forbid", frozen=True
    )  # type: ignore # Pydantic v2
