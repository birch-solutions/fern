# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing
import uuid

import typing_extensions

from ....core.serialization import FieldMetadata


class ObjectWithOptionalFieldParams(typing_extensions.TypedDict):
    string: typing_extensions.NotRequired[str]
    """
    This is a rather long descriptor of this single field in a more complex type. If you ask me I think this is a pretty good description for this field all things considered.
    """

    integer: typing_extensions.NotRequired[int]
    long_: typing_extensions.NotRequired[
        typing_extensions.Annotated[int, FieldMetadata(alias="long")]
    ]
    double: typing_extensions.NotRequired[float]
    bool_: typing_extensions.NotRequired[
        typing_extensions.Annotated[bool, FieldMetadata(alias="bool")]
    ]
    datetime: typing_extensions.NotRequired[dt.datetime]
    date: typing_extensions.NotRequired[dt.date]
    uuid_: typing_extensions.NotRequired[
        typing_extensions.Annotated[uuid.UUID, FieldMetadata(alias="uuid")]
    ]
    base_64: typing_extensions.NotRequired[
        typing_extensions.Annotated[str, FieldMetadata(alias="base64")]
    ]
    list_: typing_extensions.NotRequired[
        typing_extensions.Annotated[typing.Sequence[str], FieldMetadata(alias="list")]
    ]
    set_: typing_extensions.NotRequired[
        typing_extensions.Annotated[typing.Set[str], FieldMetadata(alias="set")]
    ]
    map_: typing_extensions.NotRequired[
        typing_extensions.Annotated[typing.Dict[int, str], FieldMetadata(alias="map")]
    ]
    bigint: typing_extensions.NotRequired[str]
