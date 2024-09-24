# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
from .user_optional_list_container import UserOptionalListContainer
import typing
import uuid
import pydantic


class UserOptionalListPage(UniversalBaseModel):
    data: UserOptionalListContainer
    next: typing.Optional[uuid.UUID] = None

    class Config:
        extra = pydantic.Extra.forbid
