# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from .parameter_id import ParameterId
from ....core.serialization import FieldMetadata
from ....commons.types.variable_type import VariableType
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic
from ....core.pydantic_utilities import update_forward_refs
from ....commons.types.list_type import ListType
from ....commons.types.map_type import MapType


class Parameter(UniversalBaseModel):
    parameter_id: typing_extensions.Annotated[ParameterId, FieldMetadata(alias="parameterId")]
    name: str
    variable_type: typing_extensions.Annotated[VariableType, FieldMetadata(alias="variableType")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


update_forward_refs(ListType)
update_forward_refs(MapType)
