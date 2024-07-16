# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic

from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from .resource_status import ResourceStatus


class Base(UniversalBaseModel):
    """
    Examples
    --------
    from seed.mixed_case import Resource_User

    Resource_User(
        user_name="username",
        metadata_tags=["tag1", "tag2"],
        extra_properties={"foo": "bar", "baz": "qux"},
    )
    """

    status: ResourceStatus

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


class Resource_User(Base):
    """
    Examples
    --------
    from seed.mixed_case import Resource_User

    Resource_User(
        user_name="username",
        metadata_tags=["tag1", "tag2"],
        extra_properties={"foo": "bar", "baz": "qux"},
    )
    """

    user_name: str = pydantic.Field(alias="userName")
    metadata_tags: typing.List[str]
    extra_properties: typing.Dict[str, str] = pydantic.Field(alias="EXTRA_PROPERTIES")
    resource_type: typing.Literal["user"] = "user"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            allow_population_by_field_name = True
            extra = pydantic.Extra.allow


class Resource_Organization(Base):
    """
    Examples
    --------
    from seed.mixed_case import Resource_User

    Resource_User(
        user_name="username",
        metadata_tags=["tag1", "tag2"],
        extra_properties={"foo": "bar", "baz": "qux"},
    )
    """

    name: str
    resource_type: typing.Literal["Organization"] = "Organization"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            allow_population_by_field_name = True
            extra = pydantic.Extra.allow


"""
from seed.mixed_case import Resource_User

Resource_User(
    user_name="username",
    metadata_tags=["tag1", "tag2"],
    extra_properties={"foo": "bar", "baz": "qux"},
)
"""
Resource = typing.Union[Resource_User, Resource_Organization]
