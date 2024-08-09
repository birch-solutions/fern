# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
from .submission_id import SubmissionId
import pydantic
import typing
from .test_case_result_with_stdout import TestCaseResultWithStdout
from ...core.pydantic_utilities import IS_PYDANTIC_V2


class GradedResponse(UniversalBaseModel):
    submission_id: SubmissionId = pydantic.Field(alias="submissionId")
    test_cases: typing.Dict[str, TestCaseResultWithStdout] = pydantic.Field(alias="testCases")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
