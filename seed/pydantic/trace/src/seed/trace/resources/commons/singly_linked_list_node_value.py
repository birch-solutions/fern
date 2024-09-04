# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from .node_id import NodeId
from ...core.serialization import FieldMetadata
import typing
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class SinglyLinkedListNodeValue(UniversalBaseModel):
    node_id: typing_extensions.Annotated[NodeId, FieldMetadata(alias="nodeId")]
    val: float
    next: typing.Optional[NodeId] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
