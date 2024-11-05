# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ....core.pydantic_utilities import UniversalBaseModel
import typing
import typing_extensions
from ....core.serialization import FieldMetadata
import pydantic


class Animal_Dog(UniversalBaseModel):
    animal: typing.Literal["dog"] = "dog"
    name: str
    likes_to_woof: typing_extensions.Annotated[bool, FieldMetadata(alias="likesToWoof")]

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2


class Animal_Cat(UniversalBaseModel):
    animal: typing.Literal["cat"] = "cat"
    name: str
    likes_to_meow: typing_extensions.Annotated[bool, FieldMetadata(alias="likesToMeow")]

    model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2


Animal = typing.Union[Animal_Dog, Animal_Cat]
