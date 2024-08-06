# This file was auto-generated by Fern from our API Definition.

from ....core.unchecked_base_model import UncheckedBaseModel
import pydantic
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import typing


class Dog(UncheckedBaseModel):
    name: str
    likes_to_woof: bool = pydantic.Field(alias="likesToWoof")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="allow", frozen=True
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
