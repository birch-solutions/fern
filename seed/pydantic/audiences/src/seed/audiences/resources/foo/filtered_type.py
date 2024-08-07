# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import typing
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class FilteredType(UniversalBaseModel):
    public_property: typing.Optional[str] = None
    private_property: int

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="allow"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
