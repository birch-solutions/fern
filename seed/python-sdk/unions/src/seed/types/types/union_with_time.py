# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

from ...core.pydantic_utilities import pydantic_v1


class UnionWithTime_Value(pydantic_v1.BaseModel):
    value: int
    type: typing.Literal["value"] = "value"

    class Config:
        frozen = True
        smart_union = True


class UnionWithTime_Date(pydantic_v1.BaseModel):
    value: dt.date
    type: typing.Literal["date"] = "date"

    class Config:
        frozen = True
        smart_union = True


class UnionWithTime_Datetime(pydantic_v1.BaseModel):
    value: dt.datetime
    type: typing.Literal["datetime"] = "datetime"

    class Config:
        frozen = True
        smart_union = True


UnionWithTime = typing.Union[UnionWithTime_Value, UnionWithTime_Date, UnionWithTime_Datetime]
