# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from .core.pydantic_utilities import IS_PYDANTIC_V2
from .docs import Docs


class ExampleType(Docs):
    """
    Examples
    --------
    from seed.extends import ExampleType

    ExampleType(
        docs="This is an example type.",
        name="Example",
    )
    """

    name: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
