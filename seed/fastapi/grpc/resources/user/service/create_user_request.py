# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing


class CreateUserRequest(UniversalBaseModel):
    username: str
    email: typing.Optional[str] = None
    age: typing.Optional[int] = None
    weight: typing.Optional[float] = None
