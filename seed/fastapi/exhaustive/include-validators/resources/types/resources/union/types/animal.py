# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .dog import Dog as resources_types_resources_union_types_dog_Dog
from ......core.pydantic_utilities import IS_PYDANTIC_V2
from .cat import Cat as resources_types_resources_union_types_cat_Cat
from ......core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ......core.pydantic_utilities import universal_root_validator
from ......core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def dog(self, value: resources_types_resources_union_types_dog_Dog) -> Animal:
        if IS_PYDANTIC_V2:
            return Animal(
                root=_Animal.Dog(**value.dict(exclude_unset=True), animal="dog")
            )
        else:
            return Animal(
                __root__=_Animal.Dog(**value.dict(exclude_unset=True), animal="dog")
            )

    def cat(self, value: resources_types_resources_union_types_cat_Cat) -> Animal:
        if IS_PYDANTIC_V2:
            return Animal(
                root=_Animal.Cat(**value.dict(exclude_unset=True), animal="cat")
            )
        else:
            return Animal(
                __root__=_Animal.Cat(**value.dict(exclude_unset=True), animal="cat")
            )


class Animal(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[_Animal.Dog, _Animal.Cat],
            pydantic.Field(discriminator="animal"),
        ]

        def get_as_union(self) -> typing.Union[_Animal.Dog, _Animal.Cat]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[_Animal.Dog, _Animal.Cat],
            pydantic.Field(discriminator="animal"),
        ]

        def get_as_union(self) -> typing.Union[_Animal.Dog, _Animal.Cat]:
            return self.__root__

    def visit(
        self,
        dog: typing.Callable[[resources_types_resources_union_types_dog_Dog], T_Result],
        cat: typing.Callable[[resources_types_resources_union_types_cat_Cat], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.animal == "dog":
            return dog(
                resources_types_resources_union_types_dog_Dog(
                    **unioned_value.dict(exclude_unset=True, exclude={"animal"})
                )
            )
        if unioned_value.animal == "cat":
            return cat(
                resources_types_resources_union_types_cat_Cat(
                    **unioned_value.dict(exclude_unset=True, exclude={"animal"})
                )
            )

    class Partial(typing.TypedDict):
        pass

    class Validators:
        """
        Use this class to add validators to the Pydantic model.

            @Animal.Validators.root()
            def validate(values: Animal.Partial) -> Animal.Partial:
                ...
        """

        _pre_validators: typing.ClassVar[
            typing.List[Animal.Validators._PreRootValidator]
        ] = []
        _post_validators: typing.ClassVar[
            typing.List[Animal.Validators._RootValidator]
        ] = []

        @typing.overload
        @classmethod
        def root(
            cls, *, pre: typing.Literal[False] = False
        ) -> typing.Callable[
            [Animal.Validators._RootValidator], Animal.Validators._RootValidator
        ]: ...
        @typing.overload
        @classmethod
        def root(
            cls, *, pre: typing.Literal[True]
        ) -> typing.Callable[
            [Animal.Validators._PreRootValidator], Animal.Validators._PreRootValidator
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

        class _PreRootValidator(typing.Protocol):
            def __call__(self, __values: typing.Any) -> typing.Any: ...

        class _RootValidator(typing.Protocol):
            def __call__(self, __values: Animal.Partial) -> Animal.Partial: ...

    @universal_root_validator(pre=True)
    def _pre_validate_types_animal(cls, values: Animal.Partial) -> Animal.Partial:
        for validator in Animal.Validators._pre_validators:
            values = validator(values)
        return values

    @universal_root_validator(pre=False)
    def _post_validate_types_animal(cls, values: Animal.Partial) -> Animal.Partial:
        for validator in Animal.Validators._post_validators:
            values = validator(values)
        return values


class _Animal:
    class Dog(resources_types_resources_union_types_dog_Dog):
        animal: typing.Literal["dog"] = "dog"

    class Cat(resources_types_resources_union_types_cat_Cat):
        animal: typing.Literal["cat"] = "cat"


update_forward_refs(Animal)
