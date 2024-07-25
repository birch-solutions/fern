# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from ..core.pydantic_utilities import IS_PYDANTIC_V2
from .json import Json


class NestedType(Json):
    """
    Examples
    --------
    from seed.types import NestedType

    NestedType(
        docs="This is an example nested type.",
        name="NestedExample",
        raw='{"nested": "example"}',
    )
    """

    name: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
