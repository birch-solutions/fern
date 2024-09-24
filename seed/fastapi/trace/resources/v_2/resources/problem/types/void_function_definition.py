# This file was auto-generated by Fern from our API Definition.

from ......core.pydantic_utilities import UniversalBaseModel
import typing
from .parameter import Parameter
from .function_implementation_for_multiple_languages import (
    FunctionImplementationForMultipleLanguages,
)
import pydantic


class VoidFunctionDefinition(UniversalBaseModel):
    parameters: typing.List[Parameter]
    code: FunctionImplementationForMultipleLanguages

    class Config:
        extra = pydantic.Extra.forbid
