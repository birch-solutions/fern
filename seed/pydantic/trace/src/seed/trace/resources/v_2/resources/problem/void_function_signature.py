# This file was auto-generated by Fern from our API Definition.

from .....core.pydantic_utilities import UniversalBaseModel
from ....commons.list_type import ListType
from ....commons.map_type import MapType
import typing
from .parameter import Parameter
from .....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from .....core.pydantic_utilities import update_forward_refs


class VoidFunctionSignature(UniversalBaseModel):
    parameters: typing.List[Parameter]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


update_forward_refs(ListType)
update_forward_refs(MapType)
