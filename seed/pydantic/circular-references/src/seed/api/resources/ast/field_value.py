# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import typing_extensions

from .primitive_value import PrimitiveValue

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


class FieldValue_PrimitiveValue(pydantic.BaseModel):
    type: typing_extensions.Literal["primitive_value"]
    value: PrimitiveValue


class FieldValue_ObjectValue(ObjectValue):
    type: typing_extensions.Literal["object_value"]

    class Config:
        allow_population_by_field_name = True


class FieldValue_ContainerValue(pydantic.BaseModel):
    type: typing_extensions.Literal["container_value"]
    value: ContainerValue


class FieldValue_UndiscriminatedContainerValue(pydantic.BaseModel):
    type: typing_extensions.Literal["undiscriminated_container_value"]
    value: UndiscriminatedContainerValue


FieldValue = typing.Union[
    FieldValue_PrimitiveValue,
    FieldValue_ObjectValue,
    FieldValue_ContainerValue,
    FieldValue_UndiscriminatedContainerValue,
]
from .container_value import ContainerValue  # noqa: E402
from .object_value import ObjectValue  # noqa: E402
from .undiscriminated_container_value import UndiscriminatedContainerValue  # noqa: E402

FieldValue_ObjectValue.update_forward_refs(
    ContainerValue=ContainerValue,
    FieldValue=FieldValue,
    ObjectValue=ObjectValue,
    UndiscriminatedContainerValue=UndiscriminatedContainerValue,
)
FieldValue_ContainerValue.update_forward_refs(
    ContainerValue=ContainerValue,
    FieldValue=FieldValue,
    ObjectValue=ObjectValue,
    UndiscriminatedContainerValue=UndiscriminatedContainerValue,
)
FieldValue_UndiscriminatedContainerValue.update_forward_refs(
    ContainerValue=ContainerValue,
    FieldValue=FieldValue,
    ObjectValue=ObjectValue,
    UndiscriminatedContainerValue=UndiscriminatedContainerValue,
)
