# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic


class FileInfoV2(UniversalBaseModel):
    filename: str
    directory: str
    contents: str
    editable: bool

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
