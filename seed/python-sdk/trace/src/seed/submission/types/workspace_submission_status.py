# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
import typing
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from .error_info import ErrorInfo
from .running_submission_state import RunningSubmissionState
import typing_extensions
from .exception_v_2 import ExceptionV2
from ...core.serialization import FieldMetadata
from .exception_info import ExceptionInfo


class WorkspaceSubmissionStatus_Stopped(UniversalBaseModel):
    type: typing.Literal["stopped"] = "stopped"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class WorkspaceSubmissionStatus_Errored(UniversalBaseModel):
    value: ErrorInfo
    type: typing.Literal["errored"] = "errored"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class WorkspaceSubmissionStatus_Running(UniversalBaseModel):
    value: RunningSubmissionState
    type: typing.Literal["running"] = "running"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class WorkspaceSubmissionStatus_Ran(UniversalBaseModel):
    type: typing.Literal["ran"] = "ran"
    exception_v_2: typing_extensions.Annotated[typing.Optional[ExceptionV2], FieldMetadata(alias="exceptionV2")] = None
    exception: typing.Optional[ExceptionInfo] = None
    stdout: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class WorkspaceSubmissionStatus_Traced(UniversalBaseModel):
    type: typing.Literal["traced"] = "traced"
    exception_v_2: typing_extensions.Annotated[typing.Optional[ExceptionV2], FieldMetadata(alias="exceptionV2")] = None
    exception: typing.Optional[ExceptionInfo] = None
    stdout: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


WorkspaceSubmissionStatus = typing.Union[
    WorkspaceSubmissionStatus_Stopped,
    WorkspaceSubmissionStatus_Errored,
    WorkspaceSubmissionStatus_Running,
    WorkspaceSubmissionStatus_Ran,
    WorkspaceSubmissionStatus_Traced,
]
