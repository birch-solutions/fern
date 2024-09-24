# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
from .submission_id import SubmissionId
import pydantic
from .traced_file import TracedFile
import typing
from ...commons.types.debug_variable_value import DebugVariableValue
from .expression_location import ExpressionLocation
from .stack_information import StackInformation


class TraceResponseV2(UniversalBaseModel):
    submission_id: SubmissionId = pydantic.Field(alias="submissionId")
    line_number: int = pydantic.Field(alias="lineNumber")
    file: TracedFile
    return_value: typing.Optional[DebugVariableValue] = pydantic.Field(
        alias="returnValue", default=None
    )
    expression_location: typing.Optional[ExpressionLocation] = pydantic.Field(
        alias="expressionLocation", default=None
    )
    stack: StackInformation
    stdout: typing.Optional[str] = None

    class Config:
        extra = pydantic.Extra.forbid
