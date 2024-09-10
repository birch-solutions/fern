# This file was auto-generated by Fern from our API Definition.

from .base_resource import BaseResource
import typing
from .core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from .core.pydantic_utilities import update_forward_refs
from .memo import Memo
from .account import Account
from .patient import Patient
from .practitioner import Practitioner


class Script(BaseResource):
    resource_type: typing.Literal["Script"] = "Script"
    name: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


update_forward_refs(Memo)
update_forward_refs(Account)
update_forward_refs(BaseResource)
update_forward_refs(Patient)
update_forward_refs(Practitioner)
