# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing
import pydantic
import typing_extensions
from ....core.serialization import FieldMetadata
import datetime as dt
import uuid


class ObjectWithOptionalField(UniversalBaseModel):
    string: typing.Optional[str] = pydantic.Field(default=None)
    """
    This is a rather long descriptor of this single field in a more complex type. If you ask me I think this is a pretty good description for this field all things considered.
    """

    integer: typing.Optional[int] = None
    long_: typing_extensions.Annotated[typing.Optional[int], FieldMetadata(alias="long")] = None
    double: typing.Optional[float] = None
    bool_: typing_extensions.Annotated[typing.Optional[bool], FieldMetadata(alias="bool")] = None
    datetime: typing.Optional[dt.datetime] = None
    date: typing.Optional[dt.date] = None
    uuid_: typing_extensions.Annotated[typing.Optional[uuid.UUID], FieldMetadata(alias="uuid")] = None
    base_64: typing_extensions.Annotated[typing.Optional[str], FieldMetadata(alias="base64")] = None
    list_: typing_extensions.Annotated[typing.Optional[typing.List[str]], FieldMetadata(alias="list")] = None
    set_: typing_extensions.Annotated[typing.Optional[typing.Set[str]], FieldMetadata(alias="set")] = None
    map_: typing_extensions.Annotated[typing.Optional[typing.Dict[int, str]], FieldMetadata(alias="map")] = None
    bigint: typing.Optional[str] = None

    class Config:
        frozen = True
        smart_union = True
        extra = pydantic.Extra.allow
