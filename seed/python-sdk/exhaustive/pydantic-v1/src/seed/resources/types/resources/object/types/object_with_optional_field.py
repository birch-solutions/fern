# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing
import uuid

import pydantic

from ......core.datetime_utils import serialize_datetime


class ObjectWithOptionalField(pydantic.BaseModel):
    string: typing.Optional[str] = None
    integer: typing.Optional[int] = None
    long_: typing.Optional[int] = pydantic.Field(alias="long", default=None)
    double: typing.Optional[float] = None
    bool_: typing.Optional[bool] = pydantic.Field(alias="bool", default=None)
    datetime: typing.Optional[dt.datetime] = None
    date: typing.Optional[dt.date] = None
    uuid_: typing.Optional[uuid.UUID] = pydantic.Field(alias="uuid", default=None)
    base_64: typing.Optional[str] = pydantic.Field(alias="base64", default=None)
    list_: typing.Optional[typing.List[str]] = pydantic.Field(alias="list", default=None)
    set_: typing.Optional[typing.Set[str]] = pydantic.Field(alias="set", default=None)
    map_: typing.Optional[typing.Dict[int, str]] = pydantic.Field(alias="map", default=None)

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        frozen = True
        smart_union = True
        allow_population_by_field_name = True
        json_encoders = {dt.datetime: serialize_datetime}
