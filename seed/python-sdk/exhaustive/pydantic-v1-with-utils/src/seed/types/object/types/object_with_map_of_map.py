# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing_extensions
import typing
from ....core.serialization import FieldMetadata
import pydantic


class ObjectWithMapOfMap(UniversalBaseModel):
    map_: typing_extensions.Annotated[typing.Dict[str, typing.Dict[str, str]], FieldMetadata(alias="map")]

    class Config:
        frozen = True
        smart_union = True
        extra = pydantic.Extra.allow
