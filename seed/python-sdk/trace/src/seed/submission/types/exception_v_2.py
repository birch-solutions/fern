# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from ...core.pydantic_utilities import pydantic_v1


class ExceptionV2_Generic(pydantic_v1.BaseModel):
    type: typing.Literal["generic"] = "generic"
    exception_type: str = pydantic_v1.Field(alias="exceptionType")
    exception_message: str = pydantic_v1.Field(alias="exceptionMessage")
    exception_stacktrace: str = pydantic_v1.Field(alias="exceptionStacktrace")

    class Config:
        frozen = True
        smart_union = True
        allow_population_by_field_name = True
        populate_by_name = True


class ExceptionV2_Timeout(pydantic_v1.BaseModel):
    type: typing.Literal["timeout"] = "timeout"

    class Config:
        frozen = True
        smart_union = True


ExceptionV2 = typing.Union[ExceptionV2_Generic, ExceptionV2_Timeout]
