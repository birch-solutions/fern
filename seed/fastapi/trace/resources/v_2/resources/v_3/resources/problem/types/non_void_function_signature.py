# This file was auto-generated by Fern from our API Definition.

from ........core.pydantic_utilities import UniversalBaseModel
import typing
from .parameter import Parameter
from .......commons.types.variable_type import VariableType
import pydantic
from ........core.pydantic_utilities import IS_PYDANTIC_V2


class NonVoidFunctionSignature(UniversalBaseModel):
    parameters: typing.List[Parameter]
    return_type: VariableType = pydantic.Field(alias="returnType")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
