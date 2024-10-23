# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ......core.pydantic_utilities import UniversalBaseModel
import pydantic
import typing
from ......core.pydantic_utilities import universal_root_validator
from ......core.pydantic_utilities import universal_field_validator
from ......core.pydantic_utilities import IS_PYDANTIC_V2


class Cat(UniversalBaseModel):
    name: str
    likes_to_meow: bool = pydantic.Field(alias="likesToMeow")

    class Validators:
        """
        Use this class to add validators to the Pydantic model.

            @Cat.Validators.root()
            def validate(values: Cat.Partial) -> Cat.Partial:
                ...

            @Cat.Validators.field("name")
            def validate_name(name: str, values: Cat.Partial) -> str:
                ...

            @Cat.Validators.field("likes_to_meow")
            def validate_likes_to_meow(likes_to_meow: bool, values: Cat.Partial) -> bool:
                ...
        """

        _pre_validators: typing.ClassVar[
            typing.List[Cat.Validators._PreRootValidator]
        ] = []
        _post_validators: typing.ClassVar[
            typing.List[Cat.Validators._RootValidator]
        ] = []
        _name_pre_validators: typing.ClassVar[
            typing.List[Cat.Validators.PreNameValidator]
        ] = []
        _name_post_validators: typing.ClassVar[
            typing.List[Cat.Validators.NameValidator]
        ] = []
        _likes_to_meow_pre_validators: typing.ClassVar[
            typing.List[Cat.Validators.PreLikesToMeowValidator]
        ] = []
        _likes_to_meow_post_validators: typing.ClassVar[
            typing.List[Cat.Validators.LikesToMeowValidator]
        ] = []

        @typing.overload
        @classmethod
        def root(
            cls, *, pre: typing.Literal[False] = False
        ) -> typing.Callable[
            [Cat.Validators._RootValidator], Cat.Validators._RootValidator
        ]: ...
        @typing.overload
        @classmethod
        def root(
            cls, *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [Cat.Validators._PreRootValidator], Cat.Validators._PreRootValidator
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
            cls, field_name: typing.Literal["name"], *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [Cat.Validators.PreNameValidator], Cat.Validators.PreNameValidator
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["name"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [Cat.Validators.NameValidator], Cat.Validators.NameValidator
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["likes_to_meow"],
            *,
            pre: typing.Literal[True],
        ) -> typing.Callable[
            [Cat.Validators.PreLikesToMeowValidator],
            Cat.Validators.PreLikesToMeowValidator,
        ]: ...
        @typing.overload
        @classmethod
        def field(
            cls,
            field_name: typing.Literal["likes_to_meow"],
            *,
            pre: typing.Literal[False] = False,
        ) -> typing.Callable[
            [Cat.Validators.LikesToMeowValidator], Cat.Validators.LikesToMeowValidator
        ]: ...
        @classmethod
        def field(cls, field_name: str, *, pre: bool = False) -> typing.Any:
            def decorator(validator: typing.Any) -> typing.Any:
                if field_name == "name":
                    if pre:
                        cls._name_pre_validators.append(validator)
                    else:
                        cls._name_post_validators.append(validator)
                if field_name == "likes_to_meow":
                    if pre:
                        cls._likes_to_meow_pre_validators.append(validator)
                    else:
                        cls._likes_to_meow_post_validators.append(validator)
                return validator

            return decorator

        class PreNameValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: Cat.Partial
            ) -> typing.Any: ...

        class NameValidator(typing.Protocol):
            def __call__(self, __v: str, __values: Cat.Partial) -> str: ...

        class PreLikesToMeowValidator(typing.Protocol):
            def __call__(
                self, __v: typing.Any, __values: Cat.Partial
            ) -> typing.Any: ...

        class LikesToMeowValidator(typing.Protocol):
            def __call__(self, __v: bool, __values: Cat.Partial) -> bool: ...

        class _PreRootValidator(typing.Protocol):
            def __call__(self, __values: typing.Any) -> typing.Any: ...

        class _RootValidator(typing.Protocol):
            def __call__(self, __values: Cat.Partial) -> Cat.Partial: ...

    @universal_root_validator(pre=True)
    def _pre_validate_types_cat(cls, values: Cat.Partial) -> Cat.Partial:
        for validator in Cat.Validators._pre_validators:
            values = validator(values)
        return values

    @universal_root_validator(pre=False)
    def _post_validate_types_cat(cls, values: Cat.Partial) -> Cat.Partial:
        for validator in Cat.Validators._post_validators:
            values = validator(values)
        return values

    @universal_field_validator("name", pre=True)
    def _pre_validate_name(cls, v: str, values: Cat.Partial) -> str:
        for validator in Cat.Validators._name_pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("name", pre=False)
    def _post_validate_name(cls, v: str, values: Cat.Partial) -> str:
        for validator in Cat.Validators._name_post_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("likes_to_meow", pre=True)
    def _pre_validate_likes_to_meow(cls, v: bool, values: Cat.Partial) -> bool:
        for validator in Cat.Validators._likes_to_meow_pre_validators:
            v = validator(v, values)
        return v

    @universal_field_validator("likes_to_meow", pre=False)
    def _post_validate_likes_to_meow(cls, v: bool, values: Cat.Partial) -> bool:
        for validator in Cat.Validators._likes_to_meow_post_validators:
            v = validator(v, values)
        return v

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
