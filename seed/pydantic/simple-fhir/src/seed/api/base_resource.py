# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .core.pydantic_utilities import UniversalBaseModel
import typing
from .core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from .core.pydantic_utilities import update_forward_refs
from .account import Account
from .script import Script
from .patient import Patient
from .practitioner import Practitioner


class BaseResource(UniversalBaseModel):
    id: str
    related_resources: typing.List["ResourceList"]
    memo: "Memo"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


from .resource_list import ResourceList  # noqa: E402
from .memo import Memo  # noqa: E402

update_forward_refs(BaseResource)
update_forward_refs(Memo)
update_forward_refs(Account)
update_forward_refs(Script)
update_forward_refs(Patient)
update_forward_refs(Practitioner)
