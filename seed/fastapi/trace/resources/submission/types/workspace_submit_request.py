# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing

from ....core.datetime_utils import serialize_datetime
from ...commons.types.language import Language
from .submission_file_info import SubmissionFileInfo
from .submission_id import SubmissionId

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


class WorkspaceSubmitRequest(pydantic.BaseModel):
    submission_id: SubmissionId = pydantic.Field(alias="submissionId")
    language: Language
    submission_files: typing.List[SubmissionFileInfo] = pydantic.Field(alias="submissionFiles")
    user_id: typing.Optional[str] = pydantic.Field(alias="userId")

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        allow_population_by_field_name = True
        extra = pydantic.Extra.forbid
        json_encoders = {dt.datetime: serialize_datetime}
