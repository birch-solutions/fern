# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

from ...core.datetime_utils import serialize_datetime
from ...core.pydantic_utilities import pydantic_v1


class Base(pydantic_v1.BaseModel):
    base: typing.Literal["base"]

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        extra = pydantic_v1.Extra.allow
        json_encoders = {dt.datetime: serialize_datetime}


class UnionWithLiteral_Fern(Base):
    type: typing.Literal["fern"] = "fern"
    value: typing.Literal["fern"]

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True


UnionWithLiteral = typing.Union[UnionWithLiteral_Fern]
