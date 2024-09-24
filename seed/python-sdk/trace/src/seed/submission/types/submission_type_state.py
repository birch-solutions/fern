# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
from ...commons.types.key_value_pair import KeyValuePair
from ...commons.types.map_value import MapValue
import typing
import typing_extensions
from ...commons.types.problem_id import ProblemId
from ...core.serialization import FieldMetadata
from ...commons.types.test_case import TestCase
from .test_submission_status import TestSubmissionStatus
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from .workspace_submission_status import WorkspaceSubmissionStatus
from ...core.pydantic_utilities import update_forward_refs


class SubmissionTypeState_Test(UniversalBaseModel):
    type: typing.Literal["test"] = "test"
    problem_id: typing_extensions.Annotated[ProblemId, FieldMetadata(alias="problemId")]
    default_test_cases: typing_extensions.Annotated[typing.List[TestCase], FieldMetadata(alias="defaultTestCases")]
    custom_test_cases: typing_extensions.Annotated[typing.List[TestCase], FieldMetadata(alias="customTestCases")]
    status: TestSubmissionStatus

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class SubmissionTypeState_Workspace(UniversalBaseModel):
    type: typing.Literal["workspace"] = "workspace"
    status: WorkspaceSubmissionStatus

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


SubmissionTypeState = typing.Union[SubmissionTypeState_Test, SubmissionTypeState_Workspace]
update_forward_refs(KeyValuePair, SubmissionTypeState_Test=SubmissionTypeState_Test)
update_forward_refs(MapValue, SubmissionTypeState_Test=SubmissionTypeState_Test)
