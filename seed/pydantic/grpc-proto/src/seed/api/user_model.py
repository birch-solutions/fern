# This file was auto-generated by Fern from our API Definition.

from .core.pydantic_utilities import UniversalBaseModel
import typing
from .core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class UserModel(UniversalBaseModel):
    username: typing.Optional[str] = None
    email: typing.Optional[str] = None
    age: typing.Optional[int] = None
    weight: typing.Optional[float] = None
    metadata: typing.Optional[typing.Dict[str, typing.Optional[typing.Any]]] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
