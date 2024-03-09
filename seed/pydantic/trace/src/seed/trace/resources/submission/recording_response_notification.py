# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing

from ...core.datetime_utils import serialize_datetime
from .lightweight_stackframe_information import LightweightStackframeInformation
from .submission_id import SubmissionId
from .traced_file import TracedFile

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


class RecordingResponseNotification(pydantic.BaseModel):
    submission_id: SubmissionId = pydantic.Field(alias="submissionId")
    test_case_id: typing.Optional[str] = pydantic.Field(alias="testCaseId")
    line_number: int = pydantic.Field(alias="lineNumber")
    lightweight_stack_info: LightweightStackframeInformation = pydantic.Field(alias="lightweightStackInfo")
    traced_file: typing.Optional[TracedFile] = pydantic.Field(alias="tracedFile")

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
