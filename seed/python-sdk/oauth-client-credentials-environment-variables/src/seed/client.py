# This file was auto-generated by Fern from our API Definition.

import os
import typing

import httpx

from .auth.client import AsyncAuthClient, AuthClient
from .core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from .core.oauth_token_provider import OAuthTokenProvider


class SeedOauthClientCredentialsEnvironmentVariables:
    """
    Use this class to access the different functions within the SDK. You can instantiate any number of clients with different configuration that will propogate to these functions.

    Parameters:
        - base_url: str. The base url to use for requests from the client.

        - timeout: typing.Optional[float]. The timeout to be used, in seconds, for requests by default the timeout is 60 seconds, unless a custom httpx client is used, in which case a default is not set.

        - follow_redirects: typing.Optional[bool]. Whether the default httpx client follows redirects or not, this is irrelevant if a custom httpx client is passed in.

        - httpx_client: typing.Optional[httpx.Client]. The httpx client to use for making requests, a preconfigured client is used by default, however this is useful should you want to pass in any custom httpx configuration.

        - client_id: typing.Optional[str].

        - client_secret: typing.Optional[str].
    ---
    from seed.client import SeedOauthClientCredentialsEnvironmentVariables

    client = SeedOauthClientCredentialsEnvironmentVariables(
        base_url="https://yourhost.com/path/to/api",
    )
    """

    def __init__(
        self,
        *,
        base_url: str,
        timeout: typing.Optional[float] = None,
        follow_redirects: typing.Optional[bool] = True,
        httpx_client: typing.Optional[httpx.Client] = None,
        client_id: typing.Optional[str] = os.getenv("CLIENT_ID"),
        client_secret: typing.Optional[str] = os.getenv("CLIENT_SECRET")
    ):
        _defaulted_timeout = timeout if timeout is not None else 60 if httpx_client is None else None
        oauth_token_provider = OAuthTokenProvider(
            client_id=client_id,
            client_secret=client_secret,
            client_wrapper=SyncClientWrapper(
                base_url=base_url,
                httpx_client=httpx_client
                if httpx_client is not None
                else httpx.Client(timeout=_defaulted_timeout, follow_redirects=follow_redirects)
                if follow_redirects is not None
                else httpx.Client(timeout=_defaulted_timeout),
                timeout=_defaulted_timeout,
            ),
        )
        self._client_wrapper = SyncClientWrapper(
            base_url=base_url,
            token=oauth_token_provider.get_token,
            httpx_client=httpx_client
            if httpx_client is not None
            else httpx.Client(timeout=_defaulted_timeout, follow_redirects=follow_redirects)
            if follow_redirects is not None
            else httpx.Client(timeout=_defaulted_timeout),
            timeout=_defaulted_timeout,
        )
        self.auth = AuthClient(client_wrapper=self._client_wrapper)


class AsyncSeedOauthClientCredentialsEnvironmentVariables:
    """
    Use this class to access the different functions within the SDK. You can instantiate any number of clients with different configuration that will propogate to these functions.

    Parameters:
        - base_url: str. The base url to use for requests from the client.

        - timeout: typing.Optional[float]. The timeout to be used, in seconds, for requests by default the timeout is 60 seconds, unless a custom httpx client is used, in which case a default is not set.

        - follow_redirects: typing.Optional[bool]. Whether the default httpx client follows redirects or not, this is irrelevant if a custom httpx client is passed in.

        - httpx_client: typing.Optional[httpx.AsyncClient]. The httpx client to use for making requests, a preconfigured client is used by default, however this is useful should you want to pass in any custom httpx configuration.

        - client_id: typing.Optional[str].

        - client_secret: typing.Optional[str].
    ---
    from seed.client import AsyncSeedOauthClientCredentialsEnvironmentVariables

    client = AsyncSeedOauthClientCredentialsEnvironmentVariables(
        base_url="https://yourhost.com/path/to/api",
    )
    """

    def __init__(
        self,
        *,
        base_url: str,
        timeout: typing.Optional[float] = None,
        follow_redirects: typing.Optional[bool] = True,
        httpx_client: typing.Optional[httpx.AsyncClient] = None,
        client_id: typing.Optional[str] = os.getenv("CLIENT_ID"),
        client_secret: typing.Optional[str] = os.getenv("CLIENT_SECRET")
    ):
        _defaulted_timeout = timeout if timeout is not None else 60 if httpx_client is None else None
        oauth_token_provider = OAuthTokenProvider(
            client_id=client_id,
            client_secret=client_secret,
            client_wrapper=SyncClientWrapper(
                base_url=base_url,
                httpx_client=httpx_client
                if httpx_client is not None
                else httpx.AsyncClient(timeout=_defaulted_timeout, follow_redirects=follow_redirects)
                if follow_redirects is not None
                else httpx.AsyncClient(timeout=_defaulted_timeout),
                timeout=_defaulted_timeout,
            ),
        )
        self._client_wrapper = AsyncClientWrapper(
            base_url=base_url,
            token=oauth_token_provider.get_token,
            httpx_client=httpx_client
            if httpx_client is not None
            else httpx.AsyncClient(timeout=_defaulted_timeout, follow_redirects=follow_redirects)
            if follow_redirects is not None
            else httpx.AsyncClient(timeout=_defaulted_timeout),
            timeout=_defaulted_timeout,
        )
        self.auth = AsyncAuthClient(client_wrapper=self._client_wrapper)
