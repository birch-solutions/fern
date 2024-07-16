# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from ....core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel


class CreateUserRequest(UniversalBaseModel):
    type: typing.Literal["CreateUserRequest"] = pydantic.Field(alias="_type", default="CreateUserRequest")
    version: typing.Literal["v1"] = pydantic.Field(alias="_version", default="v1")
    name: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="forbid")  # type: ignore # Pydantic v2
    else:

        class Config:
            allow_population_by_field_name = True
            extra = pydantic.Extra.forbid
