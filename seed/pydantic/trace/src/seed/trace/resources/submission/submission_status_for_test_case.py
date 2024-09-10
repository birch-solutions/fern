# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
import typing
from .test_case_result import TestCaseResult
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from .test_case_grade import TestCaseGrade
from .test_case_result_with_stdout import TestCaseResultWithStdout
from ...core.pydantic_utilities import update_forward_refs
from ..commons.key_value_pair import KeyValuePair
from ..commons.map_value import MapValue


class SubmissionStatusForTestCase_Graded(UniversalBaseModel):
    type: typing.Literal["graded"] = "graded"
    result: TestCaseResult
    stdout: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


class SubmissionStatusForTestCase_GradedV2(UniversalBaseModel):
    value: TestCaseGrade
    type: typing.Literal["gradedV2"] = "gradedV2"


class SubmissionStatusForTestCase_Traced(UniversalBaseModel):
    type: typing.Literal["traced"] = "traced"
    result: TestCaseResultWithStdout
    trace_responses_size: int = pydantic.Field(alias="traceResponsesSize")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


SubmissionStatusForTestCase = typing.Union[
    SubmissionStatusForTestCase_Graded, SubmissionStatusForTestCase_GradedV2, SubmissionStatusForTestCase_Traced
]
update_forward_refs(KeyValuePair)
update_forward_refs(MapValue)
update_forward_refs(KeyValuePair)
update_forward_refs(MapValue)
