# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel
import pydantic
from .reference_type import ReferenceType
from ..core.pydantic_utilities import IS_PYDANTIC_V2
import typing


class RootType1FooMapValue(UniversalBaseModel):
    """
    lorem ipsum
    """

    foo: str = pydantic.Field()
    """
    lorem ipsum
    """

    ref: ReferenceType = pydantic.Field()
    """
    lorem ipsum
    """

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
