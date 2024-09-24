# This file was auto-generated by Fern from our API Definition.

from ......core.pydantic_utilities import UniversalBaseModel
import typing
from .optional_alias import OptionalAlias
import pydantic
from ......core.pydantic_utilities import IS_PYDANTIC_V2


class DoubleOptional(UniversalBaseModel):
    optional_alias: typing.Optional[OptionalAlias] = pydantic.Field(
        alias="optionalAlias", default=None
    )

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            frozen=True
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            extra = pydantic.Extra.forbid
