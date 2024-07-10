# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ......core.pydantic_utilities import pydantic_v1
import typing
from ......core.pydantic_utilities import deep_union_pydantic_dicts
import datetime as dt
from ......core.datetime_utils import serialize_datetime
class OptionalAlias(pydantic_v1.BaseModel):
    __root__: typing.Optional[str]
    def get_as_str(self) -> typing.Optional[str]:
        return self.__root__
    @staticmethod
    def get_as_str(value: typing.Optional[str]) -> OptionalAlias:
        return OptionalAlias(__root__=value)
    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = { "by_alias": True, "exclude_unset": True, **kwargs }
        return super().json(**kwargs_with_defaults)
    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults_exclude_unset: typing.Any = { "by_alias": True, "exclude_unset": True, **kwargs }
        kwargs_with_defaults_exclude_none: typing.Any = { "by_alias": True, "exclude_none": True, **kwargs }
        
        return deep_union_pydantic_dicts(super().dict(**kwargs_with_defaults_exclude_unset), super().dict(**kwargs_with_defaults_exclude_none))
    class Config:
        extra = pydantic_v1.Extra.forbid
        json_encoders = {dt.datetime: serialize_datetime}
