# This file was auto-generated by Fern from our API Definition.

import typing

import httpx

from .core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from .resources.package.client import AsyncPackageClient, PackageClient


class SeedNurseryApi:
    """
    Use this class to access the different functions within the SDK. You can instantiate any number of clients with different configuration that will propogate to these functions.
    ---
    from seed.client import SeedNurseryApi

    client = SeedNurseryApi(
        base_url="https://yourhost.com/path/to/api",
    )
    """

    def __init__(
        self, *, base_url: str, timeout: typing.Optional[float] = 60, httpx_client: typing.Optional[httpx.Client] = None
    ):
        self._client_wrapper = SyncClientWrapper(
            base_url=base_url, httpx_client=httpx.Client(timeout=timeout) if httpx_client is None else httpx_client
        )
        self.package = PackageClient(client_wrapper=self._client_wrapper)


class AsyncSeedNurseryApi:
    """
    Use this class to access the different functions within the SDK. You can instantiate any number of clients with different configuration that will propogate to these functions.
    ---
    from seed.client import AsyncSeedNurseryApi

    client = AsyncSeedNurseryApi(
        base_url="https://yourhost.com/path/to/api",
    )
    """

    def __init__(
        self,
        *,
        base_url: str,
        timeout: typing.Optional[float] = 60,
        httpx_client: typing.Optional[httpx.AsyncClient] = None
    ):
        self._client_wrapper = AsyncClientWrapper(
            base_url=base_url, httpx_client=httpx.AsyncClient(timeout=timeout) if httpx_client is None else httpx_client
        )
        self.package = AsyncPackageClient(client_wrapper=self._client_wrapper)
