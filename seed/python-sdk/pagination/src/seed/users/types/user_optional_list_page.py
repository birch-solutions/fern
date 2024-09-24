# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
from .user_optional_list_container import UserOptionalListContainer
import typing
import uuid
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class UserOptionalListPage(UniversalBaseModel):
    data: UserOptionalListContainer
    next: typing.Optional[uuid.UUID] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
