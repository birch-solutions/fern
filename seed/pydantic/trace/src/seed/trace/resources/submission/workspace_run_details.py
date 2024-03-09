# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing

from ...core.datetime_utils import serialize_datetime
from .exception_info import ExceptionInfo
from .exception_v_2 import ExceptionV2

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


class WorkspaceRunDetails(pydantic.BaseModel):
    exception_v_2: typing.Optional[ExceptionV2] = pydantic.Field(alias="exceptionV2")
    exception: typing.Optional[ExceptionInfo]
    stdout: str

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        allow_population_by_field_name = True
<<<<<<< HEAD
        populate_by_name = True
=======
        extra = pydantic.Extra.allow
>>>>>>> main
        json_encoders = {dt.datetime: serialize_datetime}
