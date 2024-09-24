# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from .submission_id import SubmissionId
from ...core.serialization import FieldMetadata
import typing
from .test_case_result_with_stdout import TestCaseResultWithStdout
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class GradedResponse(UniversalBaseModel):
    submission_id: typing_extensions.Annotated[SubmissionId, FieldMetadata(alias="submissionId")]
    test_cases: typing_extensions.Annotated[
        typing.Dict[str, TestCaseResultWithStdout], FieldMetadata(alias="testCases")
    ]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
