# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing
from ....folder_c.common.types.foo import Foo as folder_c_common_types_foo_Foo
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class Foo(UniversalBaseModel):
    foo: typing.Optional[folder_c_common_types_foo_Foo] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
