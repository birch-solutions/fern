# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from ....core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from .node_id import NodeId
from .singly_linked_list_value import SinglyLinkedListValue


class SinglyLinkedListNodeAndListValue(UniversalBaseModel):
    node_id: NodeId = pydantic.Field(alias="nodeId")
    full_list: SinglyLinkedListValue = pydantic.Field(alias="fullList")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="forbid")  # type: ignore # Pydantic v2
    else:

        class Config:
            allow_population_by_field_name = True
            extra = pydantic.Extra.forbid
