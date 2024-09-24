# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel
import typing
from .list_element import ListElement
from .pagination import Pagination
from .usage import Usage
from ..core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class ListResponse(UniversalBaseModel):
    columns: typing.Optional[typing.List[ListElement]] = None
    pagination: typing.Optional[Pagination] = None
    namespace: typing.Optional[str] = None
    usage: typing.Optional[Usage] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
