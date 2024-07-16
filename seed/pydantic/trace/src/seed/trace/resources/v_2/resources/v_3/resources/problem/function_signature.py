# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic

from .......core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from ......commons.variable_type import VariableType
from .parameter import Parameter


class FunctionSignature_Void(UniversalBaseModel):
    parameters: typing.List[Parameter]
    type: typing.Literal["void"] = "void"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


class FunctionSignature_NonVoid(UniversalBaseModel):
    parameters: typing.List[Parameter]
    return_type: VariableType = pydantic.Field(alias="returnType")
    type: typing.Literal["nonVoid"] = "nonVoid"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            allow_population_by_field_name = True
            extra = pydantic.Extra.allow


class FunctionSignature_VoidThatTakesActualResult(UniversalBaseModel):
    parameters: typing.List[Parameter]
    actual_result_type: VariableType = pydantic.Field(alias="actualResultType")
    type: typing.Literal["voidThatTakesActualResult"] = "voidThatTakesActualResult"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            allow_population_by_field_name = True
            extra = pydantic.Extra.allow


FunctionSignature = typing.Union[
    FunctionSignature_Void, FunctionSignature_NonVoid, FunctionSignature_VoidThatTakesActualResult
]
