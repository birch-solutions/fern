# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import typing
import pydantic
from .page import Page
from .user import User


class ListUsersPaginationResponse(UniversalBaseModel):
    has_next_page: typing.Optional[bool] = pydantic.Field(alias="hasNextPage", default=None)
    page: typing.Optional[Page] = None
    total_count: int = pydantic.Field()
    """
    The totall number of /users
    """

    data: typing.List[User]

    class Config:
        extra = pydantic.Extra.allow
