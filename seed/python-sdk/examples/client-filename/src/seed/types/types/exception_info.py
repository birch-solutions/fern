# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from ...core.serialization import FieldMetadata
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import typing
import pydantic


class ExceptionInfo(UniversalBaseModel):
    """
    Examples
    --------
    from seed.types import ExceptionInfo

    ExceptionInfo(
        exception_type="Unavailable",
        exception_message="This component is unavailable!",
        exception_stacktrace="<logs>",
    )
    """

    exception_type: typing_extensions.Annotated[str, FieldMetadata(alias="exceptionType")]
    exception_message: typing_extensions.Annotated[str, FieldMetadata(alias="exceptionMessage")]
    exception_stacktrace: typing_extensions.Annotated[str, FieldMetadata(alias="exceptionStacktrace")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
