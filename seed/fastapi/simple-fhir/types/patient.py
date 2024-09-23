# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .base_resource import BaseResource
import typing
from ..core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from ..core.pydantic_utilities import update_forward_refs


class Patient(BaseResource):
    resource_type: typing.Literal["Patient"] = "Patient"
    name: str
    scripts: typing.List["Script"]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid


from .script import Script  # noqa: E402

update_forward_refs(Patient)
