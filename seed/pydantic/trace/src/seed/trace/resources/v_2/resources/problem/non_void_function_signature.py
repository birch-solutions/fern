# This file was auto-generated by Fern from our API Definition.

from .....core.pydantic_utilities import UniversalBaseModel
import typing
from .parameter import Parameter
import typing_extensions
from ....commons.variable_type import VariableType
from .....core.serialization import FieldMetadata
from .....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class NonVoidFunctionSignature(UniversalBaseModel):
    parameters: typing.List[Parameter]
    return_type: typing_extensions.Annotated[VariableType, FieldMetadata(alias="returnType")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
