# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic

from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel


class CreateProblemError_Generic(UniversalBaseModel):
    message: str
    type: str
    stacktrace: str
    error_type: typing.Literal["generic"] = pydantic.Field(alias="_type", default="generic")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


CreateProblemError = CreateProblemError_Generic
