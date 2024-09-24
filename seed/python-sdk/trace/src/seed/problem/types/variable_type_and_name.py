# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
from ...commons.types.list_type import ListType
from ...commons.types.map_type import MapType
import typing_extensions
from ...commons.types.variable_type import VariableType
from ...core.serialization import FieldMetadata
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic
from ...core.pydantic_utilities import update_forward_refs


class VariableTypeAndName(UniversalBaseModel):
    variable_type: typing_extensions.Annotated[VariableType, FieldMetadata(alias="variableType")]
    name: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


update_forward_refs(ListType, VariableTypeAndName=VariableTypeAndName)
update_forward_refs(MapType, VariableTypeAndName=VariableTypeAndName)
