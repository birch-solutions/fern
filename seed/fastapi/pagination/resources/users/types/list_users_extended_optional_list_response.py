# This file was auto-generated by Fern from our API Definition.

from .user_optional_list_page import UserOptionalListPage
import pydantic


class ListUsersExtendedOptionalListResponse(UserOptionalListPage):
    total_count: int = pydantic.Field()
    """
    The totall number of /users
    """
