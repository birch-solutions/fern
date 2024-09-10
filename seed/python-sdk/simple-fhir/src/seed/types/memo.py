# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ..core.pydantic_utilities import UniversalBaseModel
import typing
from ..core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from ..core.pydantic_utilities import update_forward_refs


class Memo(UniversalBaseModel):
    description: str
    account: typing.Optional["Account"] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


from .script import Script  # noqa: E402
from .practitioner import Practitioner  # noqa: E402
from .account import Account  # noqa: E402
from .base_resource import BaseResource  # noqa: E402
from .patient import Patient  # noqa: E402

update_forward_refs(Memo)
update_forward_refs(Script)
update_forward_refs(Practitioner)
update_forward_refs(Account)
update_forward_refs(BaseResource)
update_forward_refs(Patient)
