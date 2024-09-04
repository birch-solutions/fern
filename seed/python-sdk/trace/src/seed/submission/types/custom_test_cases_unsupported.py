# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from ...commons.types.problem_id import ProblemId
from ...core.serialization import FieldMetadata
from .submission_id import SubmissionId
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic


class CustomTestCasesUnsupported(UniversalBaseModel):
    problem_id: typing_extensions.Annotated[ProblemId, FieldMetadata(alias="problemId")]
    submission_id: typing_extensions.Annotated[SubmissionId, FieldMetadata(alias="submissionId")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
