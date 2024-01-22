# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import typing_extensions

from .initialize_problem_request import InitializeProblemRequest
from .stop_request import StopRequest
from .submit_request_v_2 import SubmitRequestV2
from .workspace_submit_request import WorkspaceSubmitRequest

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


class SubmissionRequest_InitializeProblemRequest(InitializeProblemRequest):
    type: typing_extensions.Literal["initializeProblemRequest"]

    class Config:
        frozen = True
        smart_union = True
        allow_population_by_field_name = True


class SubmissionRequest_InitializeWorkspaceRequest(pydantic.BaseModel):
    type: typing_extensions.Literal["initializeWorkspaceRequest"]

    class Config:
        frozen = True
        smart_union = True


class SubmissionRequest_SubmitV2(SubmitRequestV2):
    type: typing_extensions.Literal["submitV2"]

    class Config:
        frozen = True
        smart_union = True
        allow_population_by_field_name = True


class SubmissionRequest_WorkspaceSubmit(WorkspaceSubmitRequest):
    type: typing_extensions.Literal["workspaceSubmit"]

    class Config:
        frozen = True
        smart_union = True
        allow_population_by_field_name = True


class SubmissionRequest_Stop(StopRequest):
    type: typing_extensions.Literal["stop"]

    class Config:
        frozen = True
        smart_union = True
        allow_population_by_field_name = True


SubmissionRequest = typing.Union[
    SubmissionRequest_InitializeProblemRequest,
    SubmissionRequest_InitializeWorkspaceRequest,
    SubmissionRequest_SubmitV2,
    SubmissionRequest_WorkspaceSubmit,
    SubmissionRequest_Stop,
]
