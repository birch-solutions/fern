# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
from ...commons.types.debug_key_value_pairs import DebugKeyValuePairs
from ...commons.types.debug_variable_value import DebugVariableValue
from ...commons.types.debug_map_value import DebugMapValue
import typing_extensions
from ...core.serialization import FieldMetadata
import typing
from .scope import Scope
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class StackFrame(UniversalBaseModel):
    method_name: typing_extensions.Annotated[str, FieldMetadata(alias="methodName")]
    line_number: typing_extensions.Annotated[int, FieldMetadata(alias="lineNumber")]
    scopes: typing.List[Scope]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
