# This file was auto-generated by Fern from our API Definition.

import typing
import httpx
from .core.oauth_token_provider import OAuthTokenProvider
from .core.client_wrapper import SyncClientWrapper
from .auth.client import AuthClient
from .core.client_wrapper import AsyncClientWrapper
from .auth.client import AsyncAuthClient


class SeedOauthClientCredentials:
    """
    Use this class to access the different functions within the SDK. You can instantiate any number of clients with different configuration that will propagate to these functions.

    Parameters
    ----------
    base_url : str
        The base url to use for requests from the client.

    client_id : str
    client_secret : str
    _token_getter_override : typing.Optional[typing.Callable[[], str]]
    timeout : typing.Optional[float]
        The timeout to be used, in seconds, for requests. By default the timeout is 60 seconds, unless a custom httpx client is used, in which case this default is not enforced.

    follow_redirects : typing.Optional[bool]
        Whether the default httpx client follows redirects or not, this is irrelevant if a custom httpx client is passed in.

    httpx_client : typing.Optional[httpx.Client]
        The httpx client to use for making requests, a preconfigured client is used by default, however this is useful should you want to pass in any custom httpx configuration.

    Examples
    --------
    from seed import SeedOauthClientCredentials

    client = SeedOauthClientCredentials(
        base_url="https://yourhost.com/path/to/api",
        client_id="YOUR_CLIENT_ID",
        client_secret="YOUR_CLIENT_SECRET",
    )
    """

    def __init__(
        self,
        *,
        base_url: str,
        client_id: str,
        client_secret: str,
        _token_getter_override: typing.Optional[typing.Callable[[], str]] = None,
        timeout: typing.Optional[float] = None,
        follow_redirects: typing.Optional[bool] = True,
        httpx_client: typing.Optional[httpx.Client] = None,
    ):
        _defaulted_timeout = timeout if timeout is not None else 60 if httpx_client is None else None
        oauth_token_provider = OAuthTokenProvider(
            client_id=client_id,
            client_secret=client_secret,
            client_wrapper=SyncClientWrapper(
                base_url=base_url,
                httpx_client=httpx.Client(timeout=_defaulted_timeout, follow_redirects=follow_redirects)
                if follow_redirects is not None
                else httpx.Client(timeout=_defaulted_timeout),
                timeout=_defaulted_timeout,
            ),
        )
        self._client_wrapper = SyncClientWrapper(
            base_url=base_url,
            token=_token_getter_override if _token_getter_override is not None else oauth_token_provider.get_token,
            httpx_client=httpx_client
            if httpx_client is not None
            else httpx.Client(timeout=_defaulted_timeout, follow_redirects=follow_redirects)
            if follow_redirects is not None
            else httpx.Client(timeout=_defaulted_timeout),
            timeout=_defaulted_timeout,
        )
        self.auth = AuthClient(client_wrapper=self._client_wrapper)


class AsyncSeedOauthClientCredentials:
    """
    Use this class to access the different functions within the SDK. You can instantiate any number of clients with different configuration that will propagate to these functions.

    Parameters
    ----------
    base_url : str
        The base url to use for requests from the client.

    client_id : str
    client_secret : str
    _token_getter_override : typing.Optional[typing.Callable[[], str]]
    timeout : typing.Optional[float]
        The timeout to be used, in seconds, for requests. By default the timeout is 60 seconds, unless a custom httpx client is used, in which case this default is not enforced.

    follow_redirects : typing.Optional[bool]
        Whether the default httpx client follows redirects or not, this is irrelevant if a custom httpx client is passed in.

    httpx_client : typing.Optional[httpx.AsyncClient]
        The httpx client to use for making requests, a preconfigured client is used by default, however this is useful should you want to pass in any custom httpx configuration.

    Examples
    --------
    from seed import AsyncSeedOauthClientCredentials

    client = AsyncSeedOauthClientCredentials(
        base_url="https://yourhost.com/path/to/api",
        client_id="YOUR_CLIENT_ID",
        client_secret="YOUR_CLIENT_SECRET",
    )
    """

    def __init__(
        self,
        *,
        base_url: str,
        client_id: str,
        client_secret: str,
        _token_getter_override: typing.Optional[typing.Callable[[], str]] = None,
        timeout: typing.Optional[float] = None,
        follow_redirects: typing.Optional[bool] = True,
        httpx_client: typing.Optional[httpx.AsyncClient] = None,
    ):
        _defaulted_timeout = timeout if timeout is not None else 60 if httpx_client is None else None
        oauth_token_provider = OAuthTokenProvider(
            client_id=client_id,
            client_secret=client_secret,
            client_wrapper=SyncClientWrapper(
                base_url=base_url,
                httpx_client=httpx.Client(timeout=_defaulted_timeout, follow_redirects=follow_redirects)
                if follow_redirects is not None
                else httpx.Client(timeout=_defaulted_timeout),
                timeout=_defaulted_timeout,
            ),
        )
        self._client_wrapper = AsyncClientWrapper(
            base_url=base_url,
            token=_token_getter_override if _token_getter_override is not None else oauth_token_provider.get_token,
            httpx_client=httpx_client
            if httpx_client is not None
            else httpx.AsyncClient(timeout=_defaulted_timeout, follow_redirects=follow_redirects)
            if follow_redirects is not None
            else httpx.AsyncClient(timeout=_defaulted_timeout),
            timeout=_defaulted_timeout,
        )
        self.auth = AsyncAuthClient(client_wrapper=self._client_wrapper)
