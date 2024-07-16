# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from .user import User


class NestedUser(UniversalBaseModel):
    """
    Examples
    --------
    from seed.mixed_case import NestedUser, User

    NestedUser(
        name="username",
        nested_user=User(
            user_name="nestedUsername",
            metadata_tags=["tag1", "tag2"],
            extra_properties={"foo": "bar", "baz": "qux"},
        ),
    )
    """

    name: str = pydantic.Field(alias="Name")
    nested_user: User = pydantic.Field(alias="NestedUser")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            allow_population_by_field_name = True
            extra = pydantic.Extra.allow
