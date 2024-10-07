# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .dog import Dog as types_union_types_dog_Dog
from .cat import Cat as types_union_types_cat_Cat
import pydantic
import typing
import typing_extensions
from ....core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def dog(self, value: types_union_types_dog_Dog) -> Animal:
        return Animal(__root__=_Animal.Dog(**value.dict(exclude_unset=True), animal="dog"))  # type: ignore

    def cat(self, value: types_union_types_cat_Cat) -> Animal:
        return Animal(__root__=_Animal.Cat(**value.dict(exclude_unset=True), animal="cat"))  # type: ignore


class Animal(pydantic.RootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    __root__: typing_extensions.Annotated[
        typing.Union[_Animal.Dog, _Animal.Cat], pydantic.Field(discriminator="animal")
    ]

    def get_as_union(self) -> typing.Union[_Animal.Dog, _Animal.Cat]:
        return self.__root__

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        return self.__root__.dict(**kwargs)

    def visit(
        self,
        dog: typing.Callable[[types_union_types_dog_Dog], T_Result],
        cat: typing.Callable[[types_union_types_cat_Cat], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.animal == "dog":
            return dog(types_union_types_dog_Dog(**unioned_value.dict(exclude_unset=True, exclude={"animal"})))
        if unioned_value.animal == "cat":
            return cat(types_union_types_cat_Cat(**unioned_value.dict(exclude_unset=True, exclude={"animal"})))

    __root__: typing_extensions.Annotated[
        typing.Union[_Animal.Dog, _Animal.Cat], pydantic.Field(discriminator="animal")
    ]

    class Config:
        frozen = True
        smart_union = True


class _Animal:
    class Dog(types_union_types_dog_Dog):
        animal: typing.Literal["dog"] = "dog"

        class Config:
            frozen = True
            smart_union = True

    class Cat(types_union_types_cat_Cat):
        animal: typing.Literal["cat"] = "cat"

        class Config:
            frozen = True
            smart_union = True


update_forward_refs(Animal)
