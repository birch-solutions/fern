# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from .node_id import NodeId
from ...core.serialization import FieldMetadata
from .binary_tree_value import BinaryTreeValue
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic


class BinaryTreeNodeAndTreeValue(UniversalBaseModel):
    node_id: typing_extensions.Annotated[NodeId, FieldMetadata(alias="nodeId")]
    full_tree: typing_extensions.Annotated[BinaryTreeValue, FieldMetadata(alias="fullTree")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
