# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .core.pydantic_utilities import UniversalBaseModel
import typing
from .core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from .core.pydantic_utilities import update_forward_refs


class Memo(UniversalBaseModel):
    description: str
    account: typing.Optional["Account"] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


from .account import Account  # noqa: E402

update_forward_refs(Memo)
