# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ....core.pydantic_utilities import UniversalBaseModel
import typing
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class Data_String(UniversalBaseModel):
    value: str
    type: typing.Literal["string"] = "string"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            frozen=True
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class Data_Base64(UniversalBaseModel):
    value: str
    type: typing.Literal["base64"] = "base64"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            frozen=True
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


"""
from seed.commons.types import Data_String

Data_String(value="data")
"""
Data = typing.Union[Data_String, Data_Base64]
