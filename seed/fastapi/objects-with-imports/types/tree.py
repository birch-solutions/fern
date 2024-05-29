# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing

from ..core.datetime_utils import serialize_datetime
from ..core.pydantic_utilities import deep_union_pydantic_dicts, pydantic_v1
from .node import Node


class Tree(pydantic_v1.BaseModel):
    """
    Examples
    --------
    from seed.objects_with_imports import Node, Tree
    from seed.objects_with_imports.resources.commons import Metadata

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

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults_exclude_unset: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        kwargs_with_defaults_exclude_none: typing.Any = {"by_alias": True, "exclude_none": True, **kwargs}

        return deep_union_pydantic_dicts(
            super().dict(**kwargs_with_defaults_exclude_unset), super().dict(**kwargs_with_defaults_exclude_none)
        )

    class Config:
        extra = pydantic_v1.Extra.forbid
        json_encoders = {dt.datetime: serialize_datetime}
