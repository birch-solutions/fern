# This file was auto-generated by Fern from our API Definition.

from ......core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from .object_with_optional_field import ObjectWithOptionalField
from ......core.serialization import FieldMetadata
from ......core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic


class NestedObjectWithRequiredField(UniversalBaseModel):
    string: str
    nested_object: typing_extensions.Annotated[
        ObjectWithOptionalField, FieldMetadata(alias="NestedObject")
    ]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
