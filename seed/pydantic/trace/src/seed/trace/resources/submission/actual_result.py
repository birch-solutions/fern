# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
from ..commons.variable_value import VariableValue
import typing
import pydantic
from ...core.pydantic_utilities import IS_PYDANTIC_V2
from .exception_v_2 import ExceptionV2


class ActualResult_Value(UniversalBaseModel):
    value: VariableValue
    type: typing.Literal["value"] = "value"


class ActualResult_Exception(UniversalBaseModel):
    type: typing.Literal["exception"] = "exception"
    exception_type: str = pydantic.Field(alias="exceptionType")
    exception_message: str = pydantic.Field(alias="exceptionMessage")
    exception_stacktrace: str = pydantic.Field(alias="exceptionStacktrace")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


class ActualResult_ExceptionV2(UniversalBaseModel):
    value: ExceptionV2
    type: typing.Literal["exceptionV2"] = "exceptionV2"


ActualResult = typing.Union[ActualResult_Value, ActualResult_Exception, ActualResult_ExceptionV2]
