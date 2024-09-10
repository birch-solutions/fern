# This file was auto-generated by Fern from our API Definition.

from ......core.pydantic_utilities import UniversalBaseModel
import typing
from .parameter import Parameter
from .....commons.types.variable_type import VariableType
import pydantic
from ......core.pydantic_utilities import IS_PYDANTIC_V2
from ......core.pydantic_utilities import update_forward_refs
from .....commons.types.map_type import MapType
from .....commons.types.list_type import ListType


class VoidFunctionSignatureThatTakesActualResult(UniversalBaseModel):
    parameters: typing.List[Parameter]
    actual_result_type: VariableType = pydantic.Field(alias="actualResultType")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid


update_forward_refs(MapType)
update_forward_refs(ListType)
update_forward_refs(MapType)
update_forward_refs(ListType)
