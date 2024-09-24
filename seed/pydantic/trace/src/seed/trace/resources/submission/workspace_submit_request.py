# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
from .submission_id import SubmissionId
import pydantic
from ..commons.language import Language
import typing
from .submission_file_info import SubmissionFileInfo


class WorkspaceSubmitRequest(UniversalBaseModel):
    submission_id: SubmissionId = pydantic.Field(alias="submissionId")
    language: Language
    submission_files: typing.List[SubmissionFileInfo] = pydantic.Field(alias="submissionFiles")
    user_id: typing.Optional[str] = pydantic.Field(alias="userId", default=None)

    class Config:
        extra = pydantic.Extra.allow
