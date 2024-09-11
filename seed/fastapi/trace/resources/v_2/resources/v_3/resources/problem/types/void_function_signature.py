# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ........core.pydantic_utilities import UniversalBaseModel
from .......commons.types.list_type import ListType
from .......commons.types.map_type import MapType
import typing
from .parameter import Parameter
from ........core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from ........core.pydantic_utilities import update_forward_refs


class VoidFunctionSignature(UniversalBaseModel):
    parameters: typing.List[Parameter]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid


update_forward_refs(ListType, VoidFunctionSignature=VoidFunctionSignature)
update_forward_refs(MapType, VoidFunctionSignature=VoidFunctionSignature)
