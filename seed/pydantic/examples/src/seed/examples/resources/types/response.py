# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from ...identifier import Identifier


class Response(UniversalBaseModel):
    """
    Examples
    --------
    from seed.examples import Identifier, Response

    Response(
        response="Initializing...",
        identifiers=[
            Identifier(
                type="primitive",
                value="example",
                label="Primitive",
            ),
            Identifier(
                type="unknown",
                value="{}",
                label="Unknown",
            ),
        ],
    )
    """

    response: typing.Any
    identifiers: typing.List[Identifier]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
