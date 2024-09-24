# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
from .user import User
import pydantic


class CreateUserResponse(UniversalBaseModel):
    user: User

    class Config:
        extra = pydantic.Extra.forbid
