# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
from .submission_id import SubmissionId
import pydantic
import typing
from ...core.pydantic_utilities import IS_PYDANTIC_V2


class RecordedResponseNotification(UniversalBaseModel):
    submission_id: SubmissionId = pydantic.Field(alias="submissionId")
    trace_responses_size: int = pydantic.Field(alias="traceResponsesSize")
    test_case_id: typing.Optional[str] = pydantic.Field(alias="testCaseId", default=None)

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
