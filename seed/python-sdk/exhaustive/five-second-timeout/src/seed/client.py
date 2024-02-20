# This file was auto-generated by Fern from our API Definition.

import typing

import httpx

from .core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from .resources.endpoints.client import AsyncEndpointsClient, EndpointsClient
from .resources.inlined_requests.client import AsyncInlinedRequestsClient, InlinedRequestsClient
from .resources.no_auth.client import AsyncNoAuthClient, NoAuthClient
from .resources.no_req_body.client import AsyncNoReqBodyClient, NoReqBodyClient
from .resources.req_with_headers.client import AsyncReqWithHeadersClient, ReqWithHeadersClient


class SeedExhaustive:
    """
    Use this class to access the different functions within the SDK. You can instantiate any number of clients with different configuration that will propogate to these functions.
    ---
    from seed.client import SeedExhaustive

    client = SeedExhaustive(
        token="YOUR_TOKEN",
        base_url="https://yourhost.com/path/to/api",
    )
    """

    def __init__(
        self,
        *,
        base_url: str,
        token: typing.Optional[typing.Union[str, typing.Callable[[], str]]] = None,
        timeout: typing.Optional[float] = 5,
        httpx_client: typing.Optional[httpx.Client] = None
    ):
        self._client_wrapper = SyncClientWrapper(
            base_url=base_url,
            token=token,
            httpx_client=httpx.Client(timeout=timeout) if httpx_client is None else httpx_client,
        )
        self.endpoints = EndpointsClient(client_wrapper=self._client_wrapper)
        self.inlined_requests = InlinedRequestsClient(client_wrapper=self._client_wrapper)
        self.no_auth = NoAuthClient(client_wrapper=self._client_wrapper)
        self.no_req_body = NoReqBodyClient(client_wrapper=self._client_wrapper)
        self.req_with_headers = ReqWithHeadersClient(client_wrapper=self._client_wrapper)


class AsyncSeedExhaustive:
    """
    Use this class to access the different functions within the SDK. You can instantiate any number of clients with different configuration that will propogate to these functions.
    ---
    from seed.client import AsyncSeedExhaustive

    client = AsyncSeedExhaustive(
        token="YOUR_TOKEN",
        base_url="https://yourhost.com/path/to/api",
    )
    """

    def __init__(
        self,
        *,
        base_url: str,
        token: typing.Optional[typing.Union[str, typing.Callable[[], str]]] = None,
        timeout: typing.Optional[float] = 5,
        httpx_client: typing.Optional[httpx.AsyncClient] = None
    ):
        self._client_wrapper = AsyncClientWrapper(
            base_url=base_url,
            token=token,
            httpx_client=httpx.AsyncClient(timeout=timeout) if httpx_client is None else httpx_client,
        )
        self.endpoints = AsyncEndpointsClient(client_wrapper=self._client_wrapper)
        self.inlined_requests = AsyncInlinedRequestsClient(client_wrapper=self._client_wrapper)
        self.no_auth = AsyncNoAuthClient(client_wrapper=self._client_wrapper)
        self.no_req_body = AsyncNoReqBodyClient(client_wrapper=self._client_wrapper)
        self.req_with_headers = AsyncReqWithHeadersClient(client_wrapper=self._client_wrapper)
