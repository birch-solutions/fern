# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
from .submission_id import SubmissionId
import pydantic
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import typing


class FinishedResponse(UniversalBaseModel):
    submission_id: SubmissionId = pydantic.Field(alias="submissionId")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
