# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
import typing
from .core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from .core.pydantic_utilities import update_forward_refs


class Patient(BaseResource):
    resource_type: typing.Literal["Patient"] = "Patient"
    name: str
    scripts: typing.List["Script"]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow


from .base_resource import BaseResource  # noqa: E402
from .memo import Memo  # noqa: E402
from .script import Script  # noqa: E402
from .account import Account  # noqa: E402
from .practitioner import Practitioner  # noqa: E402

update_forward_refs(Patient)
update_forward_refs(Memo)
update_forward_refs(BaseResource)
update_forward_refs(Script)
update_forward_refs(Account)
update_forward_refs(Practitioner)
