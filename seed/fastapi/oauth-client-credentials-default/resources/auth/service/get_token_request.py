# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing


class GetTokenRequest(UniversalBaseModel):
    client_id: str
    client_secret: str
    grant_type: typing.Literal["client_credentials"] = "client_credentials"
