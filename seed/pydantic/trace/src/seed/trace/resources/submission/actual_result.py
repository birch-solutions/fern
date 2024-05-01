# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

from ...core.datetime_utils import serialize_datetime
from ...core.pydantic_utilities import pydantic_v1
from .exception_v_2 import ExceptionV2


class ActualResult_Value(pydantic_v1.BaseModel):
    value: VariableValue
    type: typing.Literal["value"] = "value"


class ActualResult_Exception(pydantic_v1.BaseModel):
    exception_type: str = pydantic_v1.Field(alias="exceptionType")
    exception_message: str = pydantic_v1.Field(alias="exceptionMessage")
    exception_stacktrace: str = pydantic_v1.Field(alias="exceptionStacktrace")
    type: typing.Literal["exception"] = "exception"

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True
        extra = pydantic_v1.Extra.allow
        json_encoders = {dt.datetime: serialize_datetime}


class ActualResult_ExceptionV2(pydantic_v1.BaseModel):
    value: ExceptionV2
    type: typing.Literal["exceptionV2"] = "exceptionV2"


ActualResult = typing.Union[ActualResult_Value, ActualResult_Exception, ActualResult_ExceptionV2]
from ..commons.variable_value import VariableValue  # noqa: E402
