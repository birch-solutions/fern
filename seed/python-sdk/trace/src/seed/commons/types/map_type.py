# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
import pydantic
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import typing
from ...core.pydantic_utilities import update_forward_refs


class MapType(UniversalBaseModel):
    key_type: "VariableType" = pydantic.Field(alias="keyType")
    value_type: "VariableType" = pydantic.Field(alias="valueType")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


from .variable_type import VariableType  # noqa: E402

update_forward_refs(MapType)
