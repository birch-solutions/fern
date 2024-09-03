# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from .resource_status import ResourceStatus
from ...core.serialization import FieldMetadata
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic


class Base(UniversalBaseModel):
    """
    Examples
    --------
    from seed.service import Resource_User

    Resource_User(
        user_name="username",
        metadata_tags=["tag1", "tag2"],
        extra_properties={"foo": "bar", "baz": "qux"},
    )
    """

    status: typing_extensions.Annotated[ResourceStatus, FieldMetadata(alias="status")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class Resource_User(Base):
    """
    Examples
    --------
    from seed.service import Resource_User

    Resource_User(
        user_name="username",
        metadata_tags=["tag1", "tag2"],
        extra_properties={"foo": "bar", "baz": "qux"},
    )
    """

    resource_type: typing_extensions.Annotated[typing.Literal["user"], FieldMetadata(alias="resource_type")] = "user"
    user_name: typing_extensions.Annotated[str, FieldMetadata(alias="userName")]
    metadata_tags: typing_extensions.Annotated[typing.List[str], FieldMetadata(alias="metadata_tags")]
    extra_properties: typing_extensions.Annotated[typing.Dict[str, str], FieldMetadata(alias="EXTRA_PROPERTIES")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


class Resource_Organization(Base):
    """
    Examples
    --------
    from seed.service import Resource_User

    Resource_User(
        user_name="username",
        metadata_tags=["tag1", "tag2"],
        extra_properties={"foo": "bar", "baz": "qux"},
    )
    """

    resource_type: typing_extensions.Annotated[typing.Literal["Organization"], FieldMetadata(alias="resource_type")] = (
        "Organization"
    )
    name: typing_extensions.Annotated[str, FieldMetadata(alias="name")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


"""
from seed.service import Resource_User

Resource_User(
    user_name="username",
    metadata_tags=["tag1", "tag2"],
    extra_properties={"foo": "bar", "baz": "qux"},
)
"""
Resource = typing.Union[Resource_User, Resource_Organization]
