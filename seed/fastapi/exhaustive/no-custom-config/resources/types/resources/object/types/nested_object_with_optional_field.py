# This file was auto-generated by Fern from our API Definition.

from ......core.pydantic_utilities import UniversalBaseModel
import typing
from .object_with_optional_field import ObjectWithOptionalField
import pydantic
from ......core.pydantic_utilities import IS_PYDANTIC_V2


class NestedObjectWithOptionalField(UniversalBaseModel):
    string: typing.Optional[str] = None
    nested_object: typing.Optional[ObjectWithOptionalField] = pydantic.Field(
        alias="NestedObject", default=None
    )

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
