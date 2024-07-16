# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from ....core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from .error_info import ErrorInfo
from .submission_id import SubmissionId


class ErroredResponse(UniversalBaseModel):
    submission_id: SubmissionId = pydantic.Field(alias="submissionId")
    error_info: ErrorInfo = pydantic.Field(alias="errorInfo")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="forbid")  # type: ignore # Pydantic v2
    else:

        class Config:
            allow_population_by_field_name = True
            extra = pydantic.Extra.forbid
