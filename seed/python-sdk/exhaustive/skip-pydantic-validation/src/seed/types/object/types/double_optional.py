# This file was auto-generated by Fern from our API Definition.

from ....core.unchecked_base_model import UncheckedBaseModel
import typing_extensions
import typing
from .optional_alias import OptionalAlias
from ....core.serialization import FieldMetadata
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class DoubleOptional(UncheckedBaseModel):
    optional_alias: typing_extensions.Annotated[
        typing.Optional[OptionalAlias], FieldMetadata(alias="optionalAlias")
    ] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
