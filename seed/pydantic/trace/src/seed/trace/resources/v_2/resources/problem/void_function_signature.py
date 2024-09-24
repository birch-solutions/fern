# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .....core.pydantic_utilities import UniversalBaseModel
from ....commons.list_type import ListType
from ....commons.map_type import MapType
import typing
from .parameter import Parameter
import pydantic
from .....core.pydantic_utilities import update_forward_refs


class VoidFunctionSignature(UniversalBaseModel):
    parameters: typing.List[Parameter]

    class Config:
        extra = pydantic.Extra.allow


update_forward_refs(ListType, VoidFunctionSignature=VoidFunctionSignature)
update_forward_refs(MapType, VoidFunctionSignature=VoidFunctionSignature)
