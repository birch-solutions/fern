# This file was auto-generated by Fern from our API Definition.

import typing

import httpx

from .core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from .resources.service.client import AsyncServiceClient, ServiceClient


class SeedBearerTokenEnvironmentVariable:
    def __init__(
        self,
        *,
        base_url: str,
        api_key: typing.Union[str, typing.Callable[[], str]],
        timeout: typing.Optional[float] = 60,
        httpx_client: typing.Optional[httpx.Client] = None
    ):
        self._client_wrapper = SyncClientWrapper(
            base_url=base_url,
            api_key=api_key,
            httpx_client=httpx.Client(timeout=timeout) if httpx_client is None else httpx_client,
        )
        self.service = ServiceClient(client_wrapper=self._client_wrapper)


class AsyncSeedBearerTokenEnvironmentVariable:
    def __init__(
        self,
        *,
        base_url: str,
        api_key: typing.Union[str, typing.Callable[[], str]],
        timeout: typing.Optional[float] = 60,
        httpx_client: typing.Optional[httpx.AsyncClient] = None
    ):
        self._client_wrapper = AsyncClientWrapper(
            base_url=base_url,
            api_key=api_key,
            httpx_client=httpx.AsyncClient(timeout=timeout) if httpx_client is None else httpx_client,
        )
        self.service = AsyncServiceClient(client_wrapper=self._client_wrapper)
