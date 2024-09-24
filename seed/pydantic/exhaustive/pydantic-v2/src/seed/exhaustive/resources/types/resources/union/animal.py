# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .....core.pydantic_utilities import UniversalBaseModel
import typing
import pydantic


class Animal_Dog(UniversalBaseModel):
    animal: typing.Literal["dog"] = "dog"
    name: str
    likes_to_woof: bool = pydantic.Field(alias="likesToWoof")

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2


class Animal_Cat(UniversalBaseModel):
    animal: typing.Literal["cat"] = "cat"
    name: str
    likes_to_meow: bool = pydantic.Field(alias="likesToMeow")

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2


Animal = typing.Union[Animal_Dog, Animal_Cat]
