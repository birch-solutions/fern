# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
import typing
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from ...core.pydantic_utilities import update_forward_refs


class Tree(UniversalBaseModel):
    """
    Examples
    --------
    from seed.types import Node, Tree

    Tree(
        nodes=[
            Node(
                name="left",
            ),
            Node(
                name="right",
            ),
        ],
    )
    """

    nodes: typing.Optional[typing.List[Node]] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


from .node import Node  # noqa: E402

update_forward_refs(Tree)
