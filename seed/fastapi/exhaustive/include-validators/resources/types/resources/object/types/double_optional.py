# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ......core.pydantic_utilities import UniversalBaseModel
import typing
from .optional_alias import OptionalAlias
import pydantic
from ......core.pydantic_utilities import universal_root_validator
from ......core.pydantic_utilities import universal_field_validator


class DoubleOptional(UniversalBaseModel):
    optional_alias: typing.Optional[OptionalAlias] = pydantic.Field(
        alias="optionalAlias", default=None
    )

    class Validators:
        """
        Use this class to add validators to the Pydantic model.

            @DoubleOptional.Validators.root()
            def validate(values: DoubleOptional.Partial) -> DoubleOptional.Partial:
                ...

            @DoubleOptional.Validators.field("optional_alias")
            def validate_optional_alias(optional_alias: typing.Optional[OptionalAlias], values: DoubleOptional.Partial) -> typing.Optional[OptionalAlias]:
                ...
        """

        _pre_validators: typing.ClassVar[
            typing.List[DoubleOptional.Validators._PreRootValidator]
        ] = []
        _post_validators: typing.ClassVar[
            typing.List[DoubleOptional.Validators._RootValidator]
        ] = []
        _optional_alias_pre_validators: typing.ClassVar[
            typing.List[DoubleOptional.Validators.PreOptionalAliasValidator]
        ] = []
        _optional_alias_post_validators: typing.ClassVar[
            typing.List[DoubleOptional.Validators.OptionalAliasValidator]
        ] = []

        @typing.overload
        @classmethod
        def root(
            cls, *, pre: typing.Literal[False] = False
        ) -> typing.Callable[
            [DoubleOptional.Validators._RootValidator],
            DoubleOptional.Validators._RootValidator,
        ]: ...
        @typing.overload
        @classmethod
        def root(
            cls, *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [DoubleOptional.Validators._PreRootValidator],
            DoubleOptional.Validators._PreRootValidator,
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
            cls,
            field_name: typing.Literal["optional_alias"],
            *,
            pre: typing.Literal[True],
        ) -> typing.Callable[
            [DoubleOptional.Validators.PreOptionalAliasValidator],
            DoubleOptional.Validators.PreOptionalAliasValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["optional_alias"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [DoubleOptional.Validators.OptionalAliasValidator],
            DoubleOptional.Validators.OptionalAliasValidator,
        ]: ...
        @classmethod
        def field(cls, field_name: str, *, pre: bool = False) -> typing.Any:
            def decorator(validator: typing.Any) -> typing.Any:
                if field_name == "optional_alias":
                    if pre:
                        cls._optional_alias_pre_validators.append(validator)
                    else:
                        cls._optional_alias_post_validators.append(validator)
                return validator

            return decorator

        class PreOptionalAliasValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: DoubleOptional.Partial
            ) -> typing.Any: ...

        class OptionalAliasValidator(typing.Protocol):
            def __call__(
                self,
                __v: typing.Optional[OptionalAlias],
                __values: DoubleOptional.Partial,
            ) -> typing.Optional[OptionalAlias]: ...

        class _PreRootValidator(typing.Protocol):
            def __call__(self, __values: typing.Any) -> typing.Any: ...

        class _RootValidator(typing.Protocol):
            def __call__(
                self, __values: DoubleOptional.Partial
            ) -> DoubleOptional.Partial: ...

    @universal_root_validator(pre=True)
    def _pre_validate_types_double_optional(
        cls, values: DoubleOptional.Partial
    ) -> DoubleOptional.Partial:
        for validator in DoubleOptional.Validators._pre_validators:
            values = validator(values)
        return values

    @universal_root_validator(pre=False)
    def _post_validate_types_double_optional(
        cls, values: DoubleOptional.Partial
    ) -> DoubleOptional.Partial:
        for validator in DoubleOptional.Validators._post_validators:
            values = validator(values)
        return values

    @universal_field_validator("optional_alias", pre=True)
    def _pre_validate_optional_alias(
        cls, v: typing.Optional[OptionalAlias], values: DoubleOptional.Partial
    ) -> typing.Optional[OptionalAlias]:
        for validator in DoubleOptional.Validators._optional_alias_pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("optional_alias", pre=False)
    def _post_validate_optional_alias(
        cls, v: typing.Optional[OptionalAlias], values: DoubleOptional.Partial
    ) -> typing.Optional[OptionalAlias]:
        for validator in DoubleOptional.Validators._optional_alias_post_validators:
            v = validator(v, values)
        return v

    class Config:
        extra = pydantic.Extra.forbid
