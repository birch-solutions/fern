# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import pydantic


class TokenResponse(UniversalBaseModel):
    """
    An OAuth token response.
    """

    access_token: str
    expires_in: int

    class Config:
        extra = pydantic.Extra.forbid
