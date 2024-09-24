# This file was auto-generated by Fern from our API Definition.

from ......core.pydantic_utilities import UniversalBaseModel
from ......core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic


class ObjectWithRequiredField(UniversalBaseModel):
    string: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            frozen=True
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            extra = pydantic.Extra.forbid
