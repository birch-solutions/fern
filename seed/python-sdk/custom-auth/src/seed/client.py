# This file was auto-generated by Fern from our API Definition.

import typing

import httpx

from .core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from .resources.custom_auth.client import AsyncCustomAuthClient, CustomAuthClient


class SeedCustomAuth:
    """
    Use this class to access the different functions within the SDK. You can instantiate any number of clients with different configuration that will propogate to these functions.
    ---
    from seed.client import SeedCustomAuth

    client = SeedCustomAuth(
        custom_auth_scheme="YOUR_CUSTOM_AUTH_SCHEME",
        base_url="https://yourhost.com/path/to/api",
    )
    """

    def __init__(
        self,
        *,
        base_url: str,
        custom_auth_scheme: str,
        timeout: typing.Optional[float] = 60,
        httpx_client: typing.Optional[httpx.Client] = None
    ):
        self._client_wrapper = SyncClientWrapper(
            base_url=base_url,
            custom_auth_scheme=custom_auth_scheme,
            httpx_client=httpx.Client(timeout=timeout) if httpx_client is None else httpx_client,
        )
        self.custom_auth = CustomAuthClient(client_wrapper=self._client_wrapper)


class AsyncSeedCustomAuth:
    """
    Use this class to access the different functions within the SDK. You can instantiate any number of clients with different configuration that will propogate to these functions.
    ---
    from seed.client import AsyncSeedCustomAuth

    client = AsyncSeedCustomAuth(
        custom_auth_scheme="YOUR_CUSTOM_AUTH_SCHEME",
        base_url="https://yourhost.com/path/to/api",
    )
    """

    def __init__(
        self,
        *,
        base_url: str,
        custom_auth_scheme: str,
        timeout: typing.Optional[float] = 60,
        httpx_client: typing.Optional[httpx.AsyncClient] = None
    ):
        self._client_wrapper = AsyncClientWrapper(
            base_url=base_url,
            custom_auth_scheme=custom_auth_scheme,
            httpx_client=httpx.AsyncClient(timeout=timeout) if httpx_client is None else httpx_client,
        )
        self.custom_auth = AsyncCustomAuthClient(client_wrapper=self._client_wrapper)
