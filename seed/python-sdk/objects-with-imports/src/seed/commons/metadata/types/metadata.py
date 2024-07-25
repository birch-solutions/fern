# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from ....core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel


class Metadata(UniversalBaseModel):
    """
    Examples
    --------
    from seed.commons.metadata.types import Metadata

    Metadata(
        id="metadata-js8dg24b",
        data={"foo": "bar", "baz": "qux"},
    )
    """

    id: str
    data: typing.Optional[typing.Dict[str, str]] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
