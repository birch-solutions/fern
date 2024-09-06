# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
from ....types.id import Id
import typing
from ...user.types.user import User
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class Organization(UniversalBaseModel):
    id: Id
    name: str
    users: typing.List[User]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
