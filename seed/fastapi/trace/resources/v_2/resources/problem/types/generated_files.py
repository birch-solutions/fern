# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing

from ......core.datetime_utils import serialize_datetime
from ......core.pydantic_utilities import pydantic_v1
from .....commons.types.language import Language
from .files import Files


class GeneratedFiles(pydantic_v1.BaseModel):
    generated_test_case_files: typing.Dict[Language, Files] = pydantic_v1.Field(alias="generatedTestCaseFiles")
    generated_template_files: typing.Dict[Language, Files] = pydantic_v1.Field(alias="generatedTemplateFiles")
    other: typing.Dict[Language, Files]

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        allow_population_by_field_name = True
        populate_by_name = True
        extra = pydantic_v1.Extra.forbid
        json_encoders = {dt.datetime: serialize_datetime}
