# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .base_resource import BaseResource
import typing
from ..core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from ..core.pydantic_utilities import update_forward_refs
from .account import Account
from .memo import Memo
from .practitioner import Practitioner


class Patient(BaseResource):
    resource_type: typing.Literal["Patient"] = "Patient"
    name: str
    scripts: typing.List["Script"]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


from .script import Script  # noqa: E402

update_forward_refs(Patient)
update_forward_refs(Account)
update_forward_refs(BaseResource)
update_forward_refs(Memo)
update_forward_refs(Practitioner)
update_forward_refs(Script)
