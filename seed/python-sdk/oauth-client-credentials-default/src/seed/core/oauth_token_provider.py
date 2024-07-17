# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing

from ..auth.client import AuthClient
from .client_wrapper import SyncClientWrapper


class OAuthTokenProvider:
    BUFFER_IN_MINUTES = 2

    def __init__(self, *, client_id: str, client_secret: str, client_wrapper: SyncClientWrapper):
        self._client_id = client_id
        self._client_secret = client_secret
        self._access_token: typing.Optional[str] = None
        self._auth_client = AuthClient(client_wrapper=client_wrapper)

    def get_token(self) -> str:
        if self._access_token:
            return self._access_token
        return self._refresh()

    def _refresh(self) -> str:
        token_response = self._auth_client.get_token(client_id=self._client_id, client_secret=self._client_secret)
        self._access_token = token_response.access_token
        return self._access_token

    def _get_expires_at(self, *, expires_in_seconds: int, buffer_in_minutes: int):
        return dt.datetime.now() + dt.timedelta(seconds=expires_in_seconds) - dt.timedelta(minutes=buffer_in_minutes)
