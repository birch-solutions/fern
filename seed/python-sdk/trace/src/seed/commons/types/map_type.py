# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from ...core.serialization import FieldMetadata
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic
from ...core.pydantic_utilities import update_forward_refs


class MapType(UniversalBaseModel):
    key_type: typing_extensions.Annotated["VariableType", FieldMetadata(alias="keyType")]
    value_type: typing_extensions.Annotated["VariableType", FieldMetadata(alias="valueType")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


from .list_type import ListType  # noqa: E402
from .variable_type import VariableType  # noqa: E402

update_forward_refs(ListType, MapType=MapType)
update_forward_refs(MapType)
