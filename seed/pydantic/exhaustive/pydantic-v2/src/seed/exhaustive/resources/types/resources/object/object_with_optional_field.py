# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing
import uuid

import pydantic.v1 as pydantic

from .....core.datetime_utils import serialize_datetime


class ObjectWithOptionalField(pydantic.BaseModel):
    string: typing.Optional[str]
    integer: typing.Optional[int]
    long_: typing.Optional[int] = pydantic.Field(alias="long")
    double: typing.Optional[float]
    bool_: typing.Optional[bool] = pydantic.Field(alias="bool")
    datetime: typing.Optional[dt.datetime]
    date: typing.Optional[dt.date]
    uuid_: typing.Optional[uuid.UUID] = pydantic.Field(alias="uuid")
    base_64: typing.Optional[str] = pydantic.Field(alias="base64")
    list_: typing.Optional[typing.List[str]] = pydantic.Field(alias="list")
    set_: typing.Optional[typing.Set[str]] = pydantic.Field(alias="set")
    map_: typing.Optional[typing.Dict[int, str]] = pydantic.Field(alias="map")

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        allow_population_by_field_name = True
        extra = pydantic.Extra.allow
        json_encoders = {dt.datetime: serialize_datetime}
