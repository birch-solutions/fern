# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel
from .shape import Shape
from ..core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic


class Type(UniversalBaseModel):
    """
    Defines properties with default values and validation rules.

    Examples
    --------
    from seed import Type

    Type(
        decimal=1.1,
        even=2,
        name="rules",
        shape="SQUARE",
    )
    """

    decimal: float = 1.1
    even: int = 42
    name: str = "fern"
    shape: Shape

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
