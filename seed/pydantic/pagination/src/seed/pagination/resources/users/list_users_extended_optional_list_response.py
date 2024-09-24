# This file was auto-generated by Fern from our API Definition.

from .user_optional_list_page import UserOptionalListPage
import pydantic
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import typing


class ListUsersExtendedOptionalListResponse(UserOptionalListPage):
    total_count: int = pydantic.Field()
    """
    The totall number of /users
    """

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
