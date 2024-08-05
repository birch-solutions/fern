# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
from ...types.resources.object.types.object_with_optional_field import ObjectWithOptionalField
import pydantic
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import typing
class PostWithObjectBody(UniversalBaseModel):
    string: str
    integer: int
    nested_object: ObjectWithOptionalField = pydantic.Field(alias="NestedObject")
    
    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="forbid")  # type: ignore # Pydantic v2
    else:
        class Config:
            extra = pydantic.Extra.forbid
