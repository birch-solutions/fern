# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic

from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from ..commons.language import Language
from ..commons.problem_id import ProblemId
from .submission_id import SubmissionId


class InvalidRequestCause_SubmissionIdNotFound(UniversalBaseModel):
    missing_submission_id: SubmissionId = pydantic.Field(alias="missingSubmissionId")
    type: typing.Literal["submissionIdNotFound"] = "submissionIdNotFound"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            allow_population_by_field_name = True
            extra = pydantic.Extra.allow


class InvalidRequestCause_CustomTestCasesUnsupported(UniversalBaseModel):
    problem_id: ProblemId = pydantic.Field(alias="problemId")
    submission_id: SubmissionId = pydantic.Field(alias="submissionId")
    type: typing.Literal["customTestCasesUnsupported"] = "customTestCasesUnsupported"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            allow_population_by_field_name = True
            extra = pydantic.Extra.allow


class InvalidRequestCause_UnexpectedLanguage(UniversalBaseModel):
    expected_language: Language = pydantic.Field(alias="expectedLanguage")
    actual_language: Language = pydantic.Field(alias="actualLanguage")
    type: typing.Literal["unexpectedLanguage"] = "unexpectedLanguage"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            allow_population_by_field_name = True
            extra = pydantic.Extra.allow


InvalidRequestCause = typing.Union[
    InvalidRequestCause_SubmissionIdNotFound,
    InvalidRequestCause_CustomTestCasesUnsupported,
    InvalidRequestCause_UnexpectedLanguage,
]
