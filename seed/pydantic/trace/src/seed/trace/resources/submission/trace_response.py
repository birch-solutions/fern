# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
from ..commons.debug_key_value_pairs import DebugKeyValuePairs
from ..commons.debug_map_value import DebugMapValue
from .submission_id import SubmissionId
import pydantic
import typing
from ..commons.debug_variable_value import DebugVariableValue
from .expression_location import ExpressionLocation
from .stack_information import StackInformation
from ...core.pydantic_utilities import IS_PYDANTIC_V2
from ...core.pydantic_utilities import update_forward_refs


class TraceResponse(UniversalBaseModel):
    submission_id: SubmissionId = pydantic.Field(alias="submissionId")
    line_number: int = pydantic.Field(alias="lineNumber")
    return_value: typing.Optional[DebugVariableValue] = pydantic.Field(alias="returnValue", default=None)
    expression_location: typing.Optional[ExpressionLocation] = pydantic.Field(alias="expressionLocation", default=None)
    stack: StackInformation
    stdout: typing.Optional[str] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


update_forward_refs(DebugKeyValuePairs)
update_forward_refs(DebugMapValue)
