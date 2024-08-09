# This file was auto-generated by Fern from our API Definition.

from .core.pydantic_utilities import UniversalBaseModel
from .core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic


class Name(UniversalBaseModel):
    """
    Examples
    --------
    from seed.object import Name

    Name(
        id="name-sdfg8ajk",
        value="name",
    )
    """

    id: str
    value: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
