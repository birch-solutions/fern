# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel
import typing
from .node import Node


class Tree(UniversalBaseModel):
    """
    Examples
    --------
    from seed.objects_with_imports import Node, Tree
    from seed.objects_with_imports.resources.commons.resources.metadata import (
        Metadata,
    )

    Tree(
        nodes=[
            Node(
                id="node-8dvgfja2",
                label="left",
                metadata=Metadata(
                    id="metadata-kjasf923",
                    data={"foo": "bar", "baz": "qux"},
                ),
            ),
            Node(
                id="node-cwda9fi2x",
                label="right",
                metadata=Metadata(
                    id="metadata-lkasdfv9j",
                    data={"one": "two", "three": "four"},
                ),
            ),
        ],
    )
    """

    nodes: typing.Optional[typing.List[Node]] = None
