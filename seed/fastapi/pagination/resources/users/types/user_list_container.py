# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing
from .user import User


class UserListContainer(UniversalBaseModel):
    users: typing.List[User]
