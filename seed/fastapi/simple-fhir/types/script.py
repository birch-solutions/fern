# This file was auto-generated by Fern from our API Definition.

from .base_resource import BaseResource
import typing


class Script(BaseResource):
    resource_type: typing.Literal["Script"] = "Script"
    name: str
