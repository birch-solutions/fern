# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from ...core.pydantic_utilities import pydantic_v1
from .object_value import ObjectValue
from .primitive_value import PrimitiveValue


class ContainerValue_List(pydantic_v1.BaseModel):
    type: typing.Literal["list"] = "list"
    value: typing.List[FieldValue]


class ContainerValue_Optional(pydantic_v1.BaseModel):
    type: typing.Literal["optional"] = "optional"
    value: typing.Optional[FieldValue]


ContainerValue = typing.Union[ContainerValue_List, ContainerValue_Optional]
from .field_value import FieldValue  # noqa: E402

ContainerValue_List.update_forward_refs(FieldValue=FieldValue)
ContainerValue_Optional.update_forward_refs(FieldValue=FieldValue)
