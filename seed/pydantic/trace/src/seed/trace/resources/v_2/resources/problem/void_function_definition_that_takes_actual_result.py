# This file was auto-generated by Fern from our API Definition.

from .....core.pydantic_utilities import UniversalBaseModel
import typing
from .parameter import Parameter
import pydantic
from .function_implementation_for_multiple_languages import FunctionImplementationForMultipleLanguages
from .....core.pydantic_utilities import IS_PYDANTIC_V2


class VoidFunctionDefinitionThatTakesActualResult(UniversalBaseModel):
    """
    The generated signature will include an additional param, actualResult
    """

    additional_parameters: typing.List[Parameter] = pydantic.Field(alias="additionalParameters")
    code: FunctionImplementationForMultipleLanguages

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
