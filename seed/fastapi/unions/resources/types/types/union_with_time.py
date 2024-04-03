# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

import typing_extensions

from ....core.datetime_utils import serialize_datetime
from ....core.pydantic_utilities import pydantic_v1

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def value(self, value: int) -> UnionWithTime:
        return UnionWithTime(__root__=_UnionWithTime.Value(type="value", value=value))

    def date(self, value: dt.date) -> UnionWithTime:
        return UnionWithTime(__root__=_UnionWithTime.Date(type="date", value=value))

    def datetime(self, value: dt.datetime) -> UnionWithTime:
        return UnionWithTime(__root__=_UnionWithTime.Datetime(type="datetime", value=value))


class UnionWithTime(pydantic_v1.BaseModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    def get_as_union(self) -> typing.Union[_UnionWithTime.Value, _UnionWithTime.Date, _UnionWithTime.Datetime]:
        return self.__root__

    def visit(
        self,
        value: typing.Callable[[int], T_Result],
        date: typing.Callable[[dt.date], T_Result],
        datetime: typing.Callable[[dt.datetime], T_Result],
    ) -> T_Result:
        if self.__root__.type == "value":
            return value(self.__root__.value)
        if self.__root__.type == "date":
            return date(self.__root__.value)
        if self.__root__.type == "datetime":
            return datetime(self.__root__.value)

    __root__: typing_extensions.Annotated[
        typing.Union[_UnionWithTime.Value, _UnionWithTime.Date, _UnionWithTime.Datetime],
        pydantic_v1.Field(discriminator="type"),
    ]

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        extra = pydantic_v1.Extra.forbid
        json_encoders = {dt.datetime: serialize_datetime}


class _UnionWithTime:
    class Value(pydantic_v1.BaseModel):
        type: typing.Literal["value"] = "value"
        value: int

    class Date(pydantic_v1.BaseModel):
        type: typing.Literal["date"] = "date"
        value: dt.date

    class Datetime(pydantic_v1.BaseModel):
        type: typing.Literal["datetime"] = "datetime"
        value: dt.datetime


UnionWithTime.update_forward_refs()
