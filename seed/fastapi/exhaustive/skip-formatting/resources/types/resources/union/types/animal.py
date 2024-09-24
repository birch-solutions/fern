# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .dog import Dog as resources_types_resources_union_types_dog_Dog
from ......core.pydantic_utilities import IS_PYDANTIC_V2
from .cat import Cat as resources_types_resources_union_types_cat_Cat
from ......core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ......core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def dog(self, value: resources_types_resources_union_types_dog_Dog) -> Animal:
        if IS_PYDANTIC_V2:
            return Animal(
                root=_Animal.Dog(**value.dict(exclude_unset=True), animal="dog")
            )  # type: ignore
        else:
            return Animal(
                __root__=_Animal.Dog(**value.dict(exclude_unset=True), animal="dog")
            )  # type: ignore

    def cat(self, value: resources_types_resources_union_types_cat_Cat) -> Animal:
        if IS_PYDANTIC_V2:
            return Animal(
                root=_Animal.Cat(**value.dict(exclude_unset=True), animal="cat")
            )  # type: ignore
        else:
            return Animal(
                __root__=_Animal.Cat(**value.dict(exclude_unset=True), animal="cat")
            )  # type: ignore


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

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        if IS_PYDANTIC_V2:
            return self.root.dict(**kwargs)
        else:
            return self.__root__.dict(**kwargs)

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

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid


class _Animal:
    class Dog(resources_types_resources_union_types_dog_Dog):
        animal: typing.Literal["dog"] = "dog"

    class Cat(resources_types_resources_union_types_cat_Cat):
        animal: typing.Literal["cat"] = "cat"


update_forward_refs(Animal)
