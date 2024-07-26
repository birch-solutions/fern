# This file was auto-generated by Fern from our API Definition.

import typing_extensions

from ....core.serialization import FieldMetadata
from ....types.types.object.optional_alias import OptionalAlias


class DoubleOptionalParams(typing_extensions.TypedDict):
    optional_alias: typing_extensions.NotRequired[
        typing_extensions.Annotated[OptionalAlias, FieldMetadata(alias="optionalAlias")]
    ]
