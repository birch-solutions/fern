# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
from .submission_id import SubmissionId
import pydantic
from .running_submission_state import RunningSubmissionState


class RunningResponse(UniversalBaseModel):
    submission_id: SubmissionId = pydantic.Field(alias="submissionId")
    state: RunningSubmissionState

    class Config:
        extra = pydantic.Extra.forbid
