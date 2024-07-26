# This file was auto-generated by Fern from our API Definition.

import typing_extensions

from ...core.serialization import FieldMetadata


class Circle(typing_extensions.TypedDict):
    radius_measurement: typing_extensions.Annotated[float, FieldMetadata(alias="radiusMeasurement")]
