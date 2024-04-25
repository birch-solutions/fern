# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing

from ...core.datetime_utils import serialize_datetime
from ...core.pydantic_utilities import pydantic_v1


class User(pydantic_v1.BaseModel):
    """
    from seed import User

    User(
        user_name="username",
        metadata_tags=["tag1", "tag2"],
        extra_properties={"foo": "bar", "baz": "qux"},
    )
    """

    user_name: str = pydantic_v1.Field(alias="userName")
    metadata_tags: typing.List[str]
    extra_properties: typing.Dict[str, str] = pydantic_v1.Field(alias="EXTRA_PROPERTIES")

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
