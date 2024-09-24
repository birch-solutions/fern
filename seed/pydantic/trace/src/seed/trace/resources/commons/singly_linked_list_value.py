# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import typing
from .node_id import NodeId
from .singly_linked_list_node_value import SinglyLinkedListNodeValue
import pydantic


class SinglyLinkedListValue(UniversalBaseModel):
    head: typing.Optional[NodeId] = None
    nodes: typing.Dict[NodeId, SinglyLinkedListNodeValue]

    class Config:
        extra = pydantic.Extra.allow
