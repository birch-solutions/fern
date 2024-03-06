# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing

from .core.datetime_utils import serialize_datetime
from .docs import Docs


class ExampleType(Docs):
    """
    from seed.extends import ExampleType

    ExampleType(
        docs="This is an example type.",
        name="Example",
    )
    """

    name: str

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True
        json_encoders = {dt.datetime: serialize_datetime}
