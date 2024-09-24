# This file was auto-generated by Fern from our API Definition.

from ....core.unchecked_base_model import UncheckedBaseModel
import typing
import typing_extensions
from .object_with_optional_field import ObjectWithOptionalField
from ....core.serialization import FieldMetadata
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class NestedObjectWithOptionalField(UncheckedBaseModel):
    string: typing.Optional[str] = None
    nested_object: typing_extensions.Annotated[
        typing.Optional[ObjectWithOptionalField], FieldMetadata(alias="NestedObject")
    ] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
