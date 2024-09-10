# This file was auto-generated by Fern from our API Definition.

from .......core.pydantic_utilities import UniversalBaseModel
from ......commons.map_type import MapType
from ......commons.list_type import ListType
from .function_signature import FunctionSignature
import pydantic
from .......core.pydantic_utilities import IS_PYDANTIC_V2
import typing
from .......core.pydantic_utilities import update_forward_refs


class GetFunctionSignatureRequest(UniversalBaseModel):
    function_signature: FunctionSignature = pydantic.Field(alias="functionSignature")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


update_forward_refs(MapType)
update_forward_refs(ListType)
