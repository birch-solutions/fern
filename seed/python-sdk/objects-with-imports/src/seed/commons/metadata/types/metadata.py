# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class Metadata(UniversalBaseModel):
    """
    Examples
    --------
    from seed.commons.metadata import Metadata

    Metadata(
        id="metadata-js8dg24b",
        data={"foo": "bar", "baz": "qux"},
    )
    """

    id: str
    data: typing.Optional[typing.Dict[str, str]] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
