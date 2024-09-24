# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
from .submission_id import SubmissionId
import pydantic
from .workspace_run_details import WorkspaceRunDetails


class WorkspaceRanResponse(UniversalBaseModel):
    submission_id: SubmissionId = pydantic.Field(alias="submissionId")
    run_details: WorkspaceRunDetails = pydantic.Field(alias="runDetails")

    class Config:
        extra = pydantic.Extra.forbid
