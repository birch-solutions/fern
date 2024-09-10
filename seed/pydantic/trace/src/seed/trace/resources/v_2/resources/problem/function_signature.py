# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .....core.pydantic_utilities import UniversalBaseModel
import typing
from .parameter import Parameter
from .....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from ....commons.variable_type import VariableType
from .....core.pydantic_utilities import update_forward_refs
from ....commons.list_type import ListType
from ....commons.map_type import MapType


class FunctionSignature_Void(UniversalBaseModel):
    type: typing.Literal["void"] = "void"
    parameters: typing.List[Parameter]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


class FunctionSignature_NonVoid(UniversalBaseModel):
    type: typing.Literal["nonVoid"] = "nonVoid"
    parameters: typing.List[Parameter]
    return_type: VariableType = pydantic.Field(alias="returnType")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


class FunctionSignature_VoidThatTakesActualResult(UniversalBaseModel):
    type: typing.Literal["voidThatTakesActualResult"] = "voidThatTakesActualResult"
    parameters: typing.List[Parameter]
    actual_result_type: VariableType = pydantic.Field(alias="actualResultType")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


FunctionSignature = typing.Union[
    FunctionSignature_Void, FunctionSignature_NonVoid, FunctionSignature_VoidThatTakesActualResult
]
update_forward_refs(ListType)
update_forward_refs(MapType)
update_forward_refs(ListType)
update_forward_refs(MapType)
update_forward_refs(ListType)
update_forward_refs(MapType)
update_forward_refs(ListType)
update_forward_refs(MapType)
update_forward_refs(ListType)
update_forward_refs(MapType)
