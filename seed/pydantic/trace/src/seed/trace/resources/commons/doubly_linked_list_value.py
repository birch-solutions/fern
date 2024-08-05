# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from .doubly_linked_list_node_value import DoublyLinkedListNodeValue
from .node_id import NodeId


class DoublyLinkedListValue(UniversalBaseModel):
    head: typing.Optional[NodeId] = None
    nodes: typing.Dict[NodeId, DoublyLinkedListNodeValue]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
