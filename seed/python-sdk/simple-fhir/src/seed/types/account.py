# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .base_resource import BaseResource
import typing
from ..core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from ..core.pydantic_utilities import update_forward_refs
from .script import Script
from .memo import Memo


class Account(BaseResource):
    resource_type: typing.Literal["Account"] = "Account"
    name: str
    patient: typing.Optional["Patient"] = None
    practitioner: typing.Optional["Practitioner"] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


from .patient import Patient  # noqa: E402
from .practitioner import Practitioner  # noqa: E402

update_forward_refs(Account)
update_forward_refs(Script)
update_forward_refs(Patient)
update_forward_refs(Memo)
update_forward_refs(Practitioner)
update_forward_refs(BaseResource)
