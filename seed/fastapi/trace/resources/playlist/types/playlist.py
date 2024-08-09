# This file was auto-generated by Fern from our API Definition.

from .playlist_create_request import PlaylistCreateRequest
from .playlist_id import PlaylistId
from ...commons.types.user_id import UserId
import pydantic
from ....core.pydantic_utilities import IS_PYDANTIC_V2
import typing


class Playlist(PlaylistCreateRequest):
    playlist_id: PlaylistId
    owner_id: UserId = pydantic.Field(alias="owner-id")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="forbid"
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
