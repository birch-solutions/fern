# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing

from ......core.datetime_utils import serialize_datetime

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


class Metadata(pydantic.BaseModel):
    """
    from seed.resources.commons import Metadata

    Metadata(
        id="metadata-js8dg24b",
        data={"foo": "bar", "baz": "qux"},
        json_string='{"foo": "bar", "baz": "qux"}',
    )
    """

    id: str
    data: typing.Optional[typing.Dict[str, str]] = None
    json_string: typing.Optional[str] = pydantic.Field(alias="jsonString", default=None)

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
        populate_by_name = True
        json_encoders = {dt.datetime: serialize_datetime}
