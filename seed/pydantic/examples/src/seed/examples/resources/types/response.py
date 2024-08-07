# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import typing
from ...identifier import Identifier
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class Response(UniversalBaseModel):
    """
    Examples
    --------
    from seed.examples import Identifier
    from seed.examples.resources import Response

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

    response: typing.Optional[typing.Any] = None
    identifiers: typing.List[Identifier]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="allow"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
