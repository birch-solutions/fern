# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing
import pydantic
import datetime as dt
import uuid
from ....core.pydantic_utilities import IS_PYDANTIC_V2


class ObjectWithOptionalField(UniversalBaseModel):
    string: typing.Optional[str] = pydantic.Field(default=None)
    """
    This is a rather long descriptor of this single field in a more complex type. If you ask me I think this is a pretty good description for this field all things considered.
    """

    integer: typing.Optional[int] = None
    long_: typing.Optional[int] = pydantic.Field(alias="long", default=None)
    double: typing.Optional[float] = None
    bool_: typing.Optional[bool] = pydantic.Field(alias="bool", default=None)
    datetime: typing.Optional[dt.datetime] = None
    date: typing.Optional[dt.date] = None
    uuid_: typing.Optional[uuid.UUID] = pydantic.Field(alias="uuid", default=None)
    base_64: typing.Optional[str] = pydantic.Field(alias="base64", default=None)
    list_: typing.Optional[typing.List[str]] = pydantic.Field(alias="list", default=None)
    set_: typing.Optional[typing.Set[str]] = pydantic.Field(alias="set", default=None)
    map_: typing.Optional[typing.Dict[int, str]] = pydantic.Field(alias="map", default=None)
    bigint: typing.Optional[str] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
