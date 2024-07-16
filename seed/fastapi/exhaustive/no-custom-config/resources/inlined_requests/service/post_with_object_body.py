# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from ....core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from ...types.resources.object.types.object_with_optional_field import ObjectWithOptionalField


class PostWithObjectBody(UniversalBaseModel):
    string: str
    integer: int
    nested_object: ObjectWithOptionalField = pydantic.Field(alias="NestedObject")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="forbid")  # type: ignore # Pydantic v2
    else:

        class Config:
            allow_population_by_field_name = True
            extra = pydantic.Extra.forbid
