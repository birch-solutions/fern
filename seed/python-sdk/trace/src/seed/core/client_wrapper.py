# This file was auto-generated by Fern from our API Definition.

import typing

import httpx

from .http_client import AsyncHttpClient, HttpClient


class BaseClientWrapper:
    def __init__(
        self,
        *,
        x_random_header: typing.Optional[str] = None,
        token: typing.Optional[typing.Union[str, typing.Callable[[], str]]] = None,
        base_url: str,
    ):
        self._x_random_header = x_random_header
        self._token = token
        self._base_url = base_url

    def get_headers(self) -> typing.Dict[str, str]:
        headers: typing.Dict[str, str] = {
            "X-Fern-Language": "Python",
            "X-Fern-SDK-Name": "fern_trace",
            "X-Fern-SDK-Version": "0.0.1",
        }
        if self._x_random_header is not None:
            headers["X-Random-Header"] = self._x_random_header
        token = self._get_token()
        if token is not None:
            headers["Authorization"] = f"Bearer {token}"
        return headers

    def _get_token(self) -> typing.Optional[str]:
        if isinstance(self._token, str) or self._token is None:
            return self._token
        else:
            return self._token()

    def get_base_url(self) -> str:
        return self._base_url


class SyncClientWrapper(BaseClientWrapper):
    def __init__(
        self,
        *,
        x_random_header: typing.Optional[str] = None,
        token: typing.Optional[typing.Union[str, typing.Callable[[], str]]] = None,
        base_url: str,
        httpx_client: httpx.Client,
    ):
        super().__init__(x_random_header=x_random_header, token=token, base_url=base_url)
        self.httpx_client = HttpClient(httpx_client=httpx_client)


class AsyncClientWrapper(BaseClientWrapper):
    def __init__(
        self,
        *,
        x_random_header: typing.Optional[str] = None,
        token: typing.Optional[typing.Union[str, typing.Callable[[], str]]] = None,
        base_url: str,
        httpx_client: httpx.AsyncClient,
    ):
        super().__init__(x_random_header=x_random_header, token=token, base_url=base_url)
        self.httpx_client = AsyncHttpClient(httpx_client=httpx_client)
