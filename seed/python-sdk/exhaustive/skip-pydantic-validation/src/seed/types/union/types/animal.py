# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic
import typing_extensions

from ....core.pydantic_utilities import IS_PYDANTIC_V2
from ....core.unchecked_base_model import UncheckedBaseModel, UnionMetadata


class Animal_Dog(UncheckedBaseModel):
    name: str
    likes_to_woof: bool = pydantic.Field(alias="likesToWoof")
    animal: typing.Literal["dog"] = "dog"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            allow_population_by_field_name = True
            extra = pydantic.Extra.allow


class Animal_Cat(UncheckedBaseModel):
    name: str
    likes_to_meow: bool = pydantic.Field(alias="likesToMeow")
    animal: typing.Literal["cat"] = "cat"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            allow_population_by_field_name = True
            extra = pydantic.Extra.allow


Animal = typing_extensions.Annotated[typing.Union[Animal_Dog, Animal_Cat], UnionMetadata(discriminant="animal")]
