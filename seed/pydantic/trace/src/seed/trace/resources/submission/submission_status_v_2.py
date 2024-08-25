# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
import typing
from .test_submission_update import TestSubmissionUpdate
from ..commons.problem_id import ProblemId
import pydantic
from ..v_2.resources.problem.problem_info_v_2 import ProblemInfoV2
from ...core.pydantic_utilities import IS_PYDANTIC_V2
from .workspace_submission_update import WorkspaceSubmissionUpdate


class SubmissionStatusV2_Test(UniversalBaseModel):
    type: typing.Literal["test"] = "test"
    updates: typing.List[TestSubmissionUpdate]
    problem_id: ProblemId = pydantic.Field(alias="problemId")
    problem_version: int = pydantic.Field(alias="problemVersion")
    problem_info: ProblemInfoV2 = pydantic.Field(alias="problemInfo")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


class SubmissionStatusV2_Workspace(UniversalBaseModel):
    type: typing.Literal["workspace"] = "workspace"
    updates: typing.List[WorkspaceSubmissionUpdate]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


SubmissionStatusV2 = typing.Union[SubmissionStatusV2_Test, SubmissionStatusV2_Workspace]
