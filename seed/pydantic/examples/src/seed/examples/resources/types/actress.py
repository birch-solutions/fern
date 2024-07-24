# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel


class Actress(UniversalBaseModel):
    """
    Examples
    --------
    from seed.examples import Actress

    Actress(
        name="Jennifer Lawrence",
        id="actor_456",
    )
    """

    name: str
    id: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
