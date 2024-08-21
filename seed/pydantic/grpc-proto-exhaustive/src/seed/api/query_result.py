# This file was auto-generated by Fern from our API Definition.

from .core.pydantic_utilities import UniversalBaseModel
import typing
from .scored_column import ScoredColumn
from .core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class QueryResult(UniversalBaseModel):
    matches: typing.Optional[typing.List[ScoredColumn]] = None
    namespace: typing.Optional[str] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
