# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel
from .inline_enum import InlineEnum
import pydantic
from ..core.pydantic_utilities import IS_PYDANTIC_V2
import typing


class NestedInlineType1(UniversalBaseModel):
    foo: str
    bar: str
    my_enum: InlineEnum = pydantic.Field(alias="myEnum")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
