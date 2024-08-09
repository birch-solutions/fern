# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .base_resource import BaseResource
import typing
from .core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from .core.pydantic_utilities import update_forward_refs


class Practitioner(BaseResource):
    resource_type: typing.Literal["Practitioner"] = "Practitioner"
    name: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


update_forward_refs(Practitioner)
