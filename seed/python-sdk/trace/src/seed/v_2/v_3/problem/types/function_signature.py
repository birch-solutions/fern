# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .....core.pydantic_utilities import UniversalBaseModel
from .....commons.types.list_type import ListType
from .....commons.types.map_type import MapType
from .....commons.types.variable_type import VariableType
import typing
from .parameter import Parameter
from .....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
import typing_extensions
from .....core.serialization import FieldMetadata


class FunctionSignature_Void(UniversalBaseModel):
    type: typing.Literal["void"] = "void"
    parameters: typing.List[Parameter]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class FunctionSignature_NonVoid(UniversalBaseModel):
    type: typing.Literal["nonVoid"] = "nonVoid"
    parameters: typing.List[Parameter]
    return_type: typing_extensions.Annotated[VariableType, FieldMetadata(alias="returnType")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class FunctionSignature_VoidThatTakesActualResult(UniversalBaseModel):
    type: typing.Literal["voidThatTakesActualResult"] = "voidThatTakesActualResult"
    parameters: typing.List[Parameter]
    actual_result_type: typing_extensions.Annotated[VariableType, FieldMetadata(alias="actualResultType")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


FunctionSignature = typing.Union[
    FunctionSignature_Void, FunctionSignature_NonVoid, FunctionSignature_VoidThatTakesActualResult
]
