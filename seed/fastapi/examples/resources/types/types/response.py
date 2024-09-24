# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing
from ....types.identifier import Identifier
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class Response(UniversalBaseModel):
    """
    Examples
    --------
    from seed.examples import BasicType, ComplexType, Identifier
    from seed.examples.resources.types import Response

    Response(
        response="Initializing...",
        identifiers=[
            Identifier(
                type=BasicType.PRIMITIVE,
                value="example",
                label="Primitive",
            ),
            Identifier(
                type=ComplexType.UNKNOWN,
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
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
