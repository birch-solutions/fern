# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
import typing
import pydantic
from ..commons.problem_id import ProblemId
from .code_execution_update import CodeExecutionUpdate


class SubmissionResponse_ServerInitialized(UniversalBaseModel):
    type: typing.Literal["serverInitialized"] = "serverInitialized"

    class Config:
        extra = pydantic.Extra.allow


class SubmissionResponse_ProblemInitialized(UniversalBaseModel):
    value: ProblemId
    type: typing.Literal["problemInitialized"] = "problemInitialized"


class SubmissionResponse_WorkspaceInitialized(UniversalBaseModel):
    type: typing.Literal["workspaceInitialized"] = "workspaceInitialized"

    class Config:
        extra = pydantic.Extra.allow


class SubmissionResponse_ServerErrored(UniversalBaseModel):
    type: typing.Literal["serverErrored"] = "serverErrored"
    exception_type: str = pydantic.Field(alias="exceptionType")
    exception_message: str = pydantic.Field(alias="exceptionMessage")
    exception_stacktrace: str = pydantic.Field(alias="exceptionStacktrace")

    class Config:
        extra = pydantic.Extra.allow


class SubmissionResponse_CodeExecutionUpdate(UniversalBaseModel):
    value: CodeExecutionUpdate
    type: typing.Literal["codeExecutionUpdate"] = "codeExecutionUpdate"


class SubmissionResponse_Terminated(UniversalBaseModel):
    type: typing.Literal["terminated"] = "terminated"

    class Config:
        extra = pydantic.Extra.allow


SubmissionResponse = typing.Union[
    SubmissionResponse_ServerInitialized,
    SubmissionResponse_ProblemInitialized,
    SubmissionResponse_WorkspaceInitialized,
    SubmissionResponse_ServerErrored,
    SubmissionResponse_CodeExecutionUpdate,
    SubmissionResponse_Terminated,
]
