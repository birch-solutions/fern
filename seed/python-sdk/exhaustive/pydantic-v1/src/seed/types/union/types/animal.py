# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic


class Animal_Dog(pydantic.BaseModel):
    animal: typing.Literal["dog"] = "dog"
    name: str
    likes_to_woof: bool = pydantic.Field(alias="likesToWoof")

    class Config:
        frozen = True
        smart_union = True
        allow_population_by_field_name = True
        populate_by_name = True


class Animal_Cat(pydantic.BaseModel):
    animal: typing.Literal["cat"] = "cat"
    name: str
    likes_to_meow: bool = pydantic.Field(alias="likesToMeow")

    class Config:
        frozen = True
        smart_union = True
        allow_population_by_field_name = True
        populate_by_name = True


Animal = typing.Union[Animal_Dog, Animal_Cat]
