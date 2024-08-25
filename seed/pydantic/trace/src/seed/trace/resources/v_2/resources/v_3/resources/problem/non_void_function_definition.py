# This file was auto-generated by Fern from our API Definition.

from .......core.pydantic_utilities import UniversalBaseModel
from .non_void_function_signature import NonVoidFunctionSignature
from .function_implementation_for_multiple_languages import FunctionImplementationForMultipleLanguages
from .......core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic


class NonVoidFunctionDefinition(UniversalBaseModel):
    signature: NonVoidFunctionSignature
    code: FunctionImplementationForMultipleLanguages

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
