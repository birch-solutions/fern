# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from ........core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from .......commons.types.variable_type import VariableType
from .parameter import Parameter


class VoidFunctionSignatureThatTakesActualResult(UniversalBaseModel):
    parameters: typing.List[Parameter]
    actual_result_type: VariableType = pydantic.Field(alias="actualResultType")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="forbid")  # type: ignore # Pydantic v2
    else:

        class Config:
            allow_population_by_field_name = True
            extra = pydantic.Extra.forbid
