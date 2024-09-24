# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import pydantic
import typing


class User(UniversalBaseModel):
    """
    Examples
    --------
    from seed.mixed_case.resources.service import User

    User(
        user_name="username",
        metadata_tags=["tag1", "tag2"],
        extra_properties={"foo": "bar", "baz": "qux"},
    )
    """

    user_name: str = pydantic.Field(alias="userName")
    metadata_tags: typing.List[str]
    extra_properties: typing.Dict[str, str] = pydantic.Field(alias="EXTRA_PROPERTIES")

    class Config:
        extra = pydantic.Extra.forbid
