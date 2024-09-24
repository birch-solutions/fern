# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import typing
from .some_literal import SomeLiteral
import pydantic


class SendRequest(UniversalBaseModel):
    prompt: typing.Literal["You are a helpful assistant"] = "You are a helpful assistant"
    query: str
    stream: typing.Literal[False] = False
    context: SomeLiteral = "You're super wise"
    maybe_context: typing.Optional[SomeLiteral] = pydantic.Field(alias="maybeContext", default=None)

    class Config:
        extra = pydantic.Extra.allow
