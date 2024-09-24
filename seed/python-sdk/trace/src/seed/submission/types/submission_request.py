# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
import typing
import typing_extensions
from ...commons.types.problem_id import ProblemId
from ...core.serialization import FieldMetadata
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from .submission_id import SubmissionId
from ...commons.types.language import Language
from .submission_file_info import SubmissionFileInfo


class SubmissionRequest_InitializeProblemRequest(UniversalBaseModel):
    type: typing.Literal["initializeProblemRequest"] = "initializeProblemRequest"
    problem_id: typing_extensions.Annotated[ProblemId, FieldMetadata(alias="problemId")]
    problem_version: typing_extensions.Annotated[typing.Optional[int], FieldMetadata(alias="problemVersion")] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class SubmissionRequest_InitializeWorkspaceRequest(UniversalBaseModel):
    type: typing.Literal["initializeWorkspaceRequest"] = "initializeWorkspaceRequest"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class SubmissionRequest_SubmitV2(UniversalBaseModel):
    type: typing.Literal["submitV2"] = "submitV2"
    submission_id: typing_extensions.Annotated[SubmissionId, FieldMetadata(alias="submissionId")]
    language: Language
    submission_files: typing_extensions.Annotated[
        typing.List[SubmissionFileInfo], FieldMetadata(alias="submissionFiles")
    ]
    problem_id: typing_extensions.Annotated[ProblemId, FieldMetadata(alias="problemId")]
    problem_version: typing_extensions.Annotated[typing.Optional[int], FieldMetadata(alias="problemVersion")] = None
    user_id: typing_extensions.Annotated[typing.Optional[str], FieldMetadata(alias="userId")] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class SubmissionRequest_WorkspaceSubmit(UniversalBaseModel):
    type: typing.Literal["workspaceSubmit"] = "workspaceSubmit"
    submission_id: typing_extensions.Annotated[SubmissionId, FieldMetadata(alias="submissionId")]
    language: Language
    submission_files: typing_extensions.Annotated[
        typing.List[SubmissionFileInfo], FieldMetadata(alias="submissionFiles")
    ]
    user_id: typing_extensions.Annotated[typing.Optional[str], FieldMetadata(alias="userId")] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


class SubmissionRequest_Stop(UniversalBaseModel):
    type: typing.Literal["stop"] = "stop"
    submission_id: typing_extensions.Annotated[SubmissionId, FieldMetadata(alias="submissionId")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True


SubmissionRequest = typing.Union[
    SubmissionRequest_InitializeProblemRequest,
    SubmissionRequest_InitializeWorkspaceRequest,
    SubmissionRequest_SubmitV2,
    SubmissionRequest_WorkspaceSubmit,
    SubmissionRequest_Stop,
]
