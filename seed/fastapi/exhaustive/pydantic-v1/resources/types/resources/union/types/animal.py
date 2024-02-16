# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

import pydantic

from ......core.datetime_utils import serialize_datetime
from .cat import Cat as resources_types_resources_union_types_cat_Cat
from .dog import Dog as resources_types_resources_union_types_dog_Dog

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def dog(self, value: resources_types_resources_union_types_dog_Dog) -> Animal:
        return Animal(__root__=_Animal.Dog(**value.dict(exclude_unset=True), animal="dog"))

    def cat(self, value: resources_types_resources_union_types_cat_Cat) -> Animal:
        return Animal(__root__=_Animal.Cat(**value.dict(exclude_unset=True), animal="cat"))


class Animal(pydantic.BaseModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    def get_as_union(self) -> typing.Union[_Animal.Dog, _Animal.Cat]:
        return self.__root__

    def visit(
        self,
        dog: typing.Callable[[resources_types_resources_union_types_dog_Dog], T_Result],
        cat: typing.Callable[[resources_types_resources_union_types_cat_Cat], T_Result],
    ) -> T_Result:
        if self.__root__.animal == "dog":
            return dog(
                resources_types_resources_union_types_dog_Dog(
                    **self.__root__.dict(exclude_unset=True, exclude={"animal"})
                )
            )
        if self.__root__.animal == "cat":
            return cat(
                resources_types_resources_union_types_cat_Cat(
                    **self.__root__.dict(exclude_unset=True, exclude={"animal"})
                )
            )

    __root__: typing.Annotated[typing.Union[_Animal.Dog, _Animal.Cat], pydantic.Field(discriminator="animal")]

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        extra = pydantic.Extra.forbid
        json_encoders = {dt.datetime: serialize_datetime}


class _Animal:
    class Dog(resources_types_resources_union_types_dog_Dog):
        animal: typing.Literal["dog"]

        class Config:
            allow_population_by_field_name = True

    class Cat(resources_types_resources_union_types_cat_Cat):
        animal: typing.Literal["cat"]

        class Config:
            allow_population_by_field_name = True


Animal.update_forward_refs()
