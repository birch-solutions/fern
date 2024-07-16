# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic

from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel


class Exception_Generic(UniversalBaseModel):
    """
    Examples
    --------
    from seed import Exception_Generic

    Exception_Generic(
        exception_type="Unavailable",
        exception_message="This component is unavailable!",
        exception_stacktrace="<logs>",
    )
    """

    exception_type: str = pydantic.Field(alias="exceptionType")
    exception_message: str = pydantic.Field(alias="exceptionMessage")
    exception_stacktrace: str = pydantic.Field(alias="exceptionStacktrace")
    type: typing.Literal["generic"] = "generic"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            allow_population_by_field_name = True
            extra = pydantic.Extra.allow


class Exception_Timeout(UniversalBaseModel):
    """
    Examples
    --------
    from seed import Exception_Generic

    Exception_Generic(
        exception_type="Unavailable",
        exception_message="This component is unavailable!",
        exception_stacktrace="<logs>",
    )
    """

    type: typing.Literal["timeout"] = "timeout"

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


"""
from seed import Exception_Generic

Exception_Generic(
    exception_type="Unavailable",
    exception_message="This component is unavailable!",
    exception_stacktrace="<logs>",
)
"""
Exception = typing.Union[Exception_Generic, Exception_Timeout]
