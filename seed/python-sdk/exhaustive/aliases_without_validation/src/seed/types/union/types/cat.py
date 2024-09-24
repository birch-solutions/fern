# This file was auto-generated by Fern from our API Definition.

from ....core.unchecked_base_model import UncheckedBaseModel
import pydantic
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import typing


class Cat(UncheckedBaseModel):
    name: str
    likes_to_meow: bool = pydantic.Field(alias="likesToMeow")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
