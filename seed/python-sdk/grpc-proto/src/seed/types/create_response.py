# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel
import typing
from .user_model import UserModel
from ..core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class CreateResponse(UniversalBaseModel):
    user: typing.Optional[UserModel] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
