# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import pydantic
import typing
from .next_page import NextPage


class Page(UniversalBaseModel):
    page: int = pydantic.Field()
    """
    The current page
    """

    next: typing.Optional[NextPage] = None
    per_page: int
    total_page: int
