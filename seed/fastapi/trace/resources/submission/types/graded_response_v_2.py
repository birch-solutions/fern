# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from .submission_id import SubmissionId
from ....core.serialization import FieldMetadata
import typing
from ...v_2.resources.problem.types.test_case_id import TestCaseId
from .test_case_grade import TestCaseGrade
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class GradedResponseV2(UniversalBaseModel):
    submission_id: typing_extensions.Annotated[
        SubmissionId, FieldMetadata(alias="submissionId")
    ]
    test_cases: typing_extensions.Annotated[
        typing.Dict[TestCaseId, TestCaseGrade], FieldMetadata(alias="testCases")
    ]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
