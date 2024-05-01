# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

from ...core.datetime_utils import serialize_datetime
from ...core.pydantic_utilities import pydantic_v1
from .resource_status import ResourceStatus


class Base(pydantic_v1.BaseModel):
    """
    Examples
    --------
    from seed import Resource_User

    Resource_User(
        user_name="username",
        metadata_tags=["tag1", "tag2"],
        extra_properties={"foo": "bar", "baz": "qux"},
    )
    """

    status: ResourceStatus

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        frozen = True
        smart_union = True
        extra = pydantic_v1.Extra.allow
        json_encoders = {dt.datetime: serialize_datetime}


class Resource_User(pydantic_v1.BaseModel):
    """
    Examples
    --------
    from seed import Resource_User

    Resource_User(
        user_name="username",
        metadata_tags=["tag1", "tag2"],
        extra_properties={"foo": "bar", "baz": "qux"},
    )
    """

    user_name: str = pydantic_v1.Field(alias="userName")
    metadata_tags: typing.List[str]
    extra_properties: typing.Dict[str, str] = pydantic_v1.Field(alias="EXTRA_PROPERTIES")
    resource_type: typing.Literal["user"] = "user"

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        frozen = True
        smart_union = True
        allow_population_by_field_name = True
        populate_by_name = True
        extra = pydantic_v1.Extra.allow
        json_encoders = {dt.datetime: serialize_datetime}


class Resource_Organization(pydantic_v1.BaseModel):
    """
    Examples
    --------
    from seed import Resource_User

    Resource_User(
        user_name="username",
        metadata_tags=["tag1", "tag2"],
        extra_properties={"foo": "bar", "baz": "qux"},
    )
    """

    name: str
    resource_type: typing.Literal["Organization"] = "Organization"

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        frozen = True
        smart_union = True
        extra = pydantic_v1.Extra.allow
        json_encoders = {dt.datetime: serialize_datetime}


"""
from seed import Resource_User

Resource_User(
    user_name="username",
    metadata_tags=["tag1", "tag2"],
    extra_properties={"foo": "bar", "baz": "qux"},
)
"""
Resource = typing.Union[Resource_User, Resource_Organization]
