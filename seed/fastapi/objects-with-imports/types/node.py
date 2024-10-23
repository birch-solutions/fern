# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel
import typing
from ..resources.commons.resources.metadata.types.metadata import Metadata
from ..core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class Node(UniversalBaseModel):
    """
    Examples
    --------
    from seed.objects_with_imports import Node
    from seed.objects_with_imports.resources.commons.resources.metadata import (
        Metadata,
    )

    Node(
        id="node-8dvgfja2",
        label="left",
        metadata=Metadata(
            id="metadata-kjasf923",
            data={"foo": "bar", "baz": "qux"},
        ),
    )
    """

    id: str
    label: typing.Optional[str] = None
    metadata: typing.Optional[Metadata] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
