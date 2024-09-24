# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing


class Request(UniversalBaseModel):
    """
    Examples
    --------
    from seed.examples.resources.types import Request

    Request(
        request={},
    )
    """

    request: typing.Optional[typing.Any] = None
