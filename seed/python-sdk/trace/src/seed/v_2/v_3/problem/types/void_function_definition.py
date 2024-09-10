# This file was auto-generated by Fern from our API Definition.

from .....core.pydantic_utilities import UniversalBaseModel
import typing
from .parameter import Parameter
from .function_implementation_for_multiple_languages import FunctionImplementationForMultipleLanguages
from .....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from .....core.pydantic_utilities import update_forward_refs
from .....commons.types.list_type import ListType
from .....commons.types.map_type import MapType


class VoidFunctionDefinition(UniversalBaseModel):
    parameters: typing.List[Parameter]
    code: FunctionImplementationForMultipleLanguages

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


update_forward_refs(ListType)
update_forward_refs(MapType)
