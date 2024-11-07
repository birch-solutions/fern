# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ......core.pydantic_utilities import UniversalBaseModel
import typing
import typing_extensions
import pydantic
from ......core.pydantic_utilities import universal_field_validator


class ObjectWithRequiredField(UniversalBaseModel):
    string: str

    class Partial(typing.TypedDict):
        string: typing_extensions.NotRequired[str]

    class Validators:
        """
        Use this class to add validators to the Pydantic model.

            @ObjectWithRequiredField.Validators.root()
            def validate(values: ObjectWithRequiredField.Partial) -> ObjectWithRequiredField.Partial:
                ...

            @ObjectWithRequiredField.Validators.field("string")
            def validate_string(string: str, values: ObjectWithRequiredField.Partial) -> str:
                ...
        """

        _pre_validators: typing.ClassVar[
            typing.List[ObjectWithRequiredField.Validators._PreRootValidator]
        ] = []
        _post_validators: typing.ClassVar[
            typing.List[ObjectWithRequiredField.Validators._RootValidator]
        ] = []
        _string_pre_validators: typing.ClassVar[
            typing.List[ObjectWithRequiredField.Validators.PreStringValidator]
        ] = []
        _string_post_validators: typing.ClassVar[
            typing.List[ObjectWithRequiredField.Validators.StringValidator]
        ] = []

        @typing.overload
        @classmethod
        def root(
            cls, *, pre: typing.Literal[False] = False
        ) -> typing.Callable[
            [ObjectWithRequiredField.Validators._RootValidator],
            ObjectWithRequiredField.Validators._RootValidator,
        ]: ...
        @typing.overload
        @classmethod
        def root(
            cls, *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [ObjectWithRequiredField.Validators._PreRootValidator],
            ObjectWithRequiredField.Validators._PreRootValidator,
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
            [ObjectWithRequiredField.Validators.PreStringValidator],
            ObjectWithRequiredField.Validators.PreStringValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["string"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [ObjectWithRequiredField.Validators.StringValidator],
            ObjectWithRequiredField.Validators.StringValidator,
        ]: ...
        @classmethod
        def field(cls, field_name: str, *, pre: bool = False) -> typing.Any:
            def decorator(validator: typing.Any) -> typing.Any:
                if field_name == "string":
                    if pre:
                        cls._string_pre_validators.append(validator)
                    else:
                        cls._string_post_validators.append(validator)
                return validator

            return decorator

        class PreStringValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: ObjectWithRequiredField.Partial
            ) -> typing.Any: ...

        class StringValidator(typing.Protocol):
            def __call__(
                self, __v: str, __values: ObjectWithRequiredField.Partial
            ) -> str: ...

        class _PreRootValidator(typing.Protocol):
            def __call__(self, __values: typing.Any) -> typing.Any: ...

        class _RootValidator(typing.Protocol):
            def __call__(
                self, __values: ObjectWithRequiredField.Partial
            ) -> ObjectWithRequiredField.Partial: ...

    @pydantic.model_validator(mode="before")
    def _pre_validate_types_object_with_required_field(
        cls, model: ObjectWithRequiredField
    ) -> ObjectWithRequiredField:
        for validator in ObjectWithRequiredField.Validators._pre_validators:
            values = validator(values)
        return model

    @pydantic.model_validator(mode="after")
    def _post_validate_types_object_with_required_field(
        cls, model: ObjectWithRequiredField
    ) -> ObjectWithRequiredField:
        for validator in ObjectWithRequiredField.Validators._post_validators:
            values = validator(values)
        return model

    @universal_field_validator("string", pre=True)
    def _pre_validate_string(
        cls, v: str, values: ObjectWithRequiredField.Partial
    ) -> str:
        for validator in ObjectWithRequiredField.Validators._string_pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("string", pre=False)
    def _post_validate_string(
        cls, v: str, values: ObjectWithRequiredField.Partial
    ) -> str:
        for validator in ObjectWithRequiredField.Validators._string_post_validators:
            v = validator(v, values)
        return v

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
        extra="forbid", frozen=True
    )  # type: ignore # Pydantic v2
