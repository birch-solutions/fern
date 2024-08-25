# This file was auto-generated by Fern from our API Definition.

import typing
from .environment import SeedAudiencesEnvironment
import httpx
from .core.client_wrapper import SyncClientWrapper
from .folder_a.client import FolderAClient
from .folder_d.client import FolderDClient
from .foo.client import FooClient
from .core.client_wrapper import AsyncClientWrapper
from .folder_a.client import AsyncFolderAClient
from .folder_d.client import AsyncFolderDClient
from .foo.client import AsyncFooClient


class SeedAudiences:
    """
    Use this class to access the different functions within the SDK. You can instantiate any number of clients with different configuration that will propagate to these functions.

    Parameters
    ----------
    base_url : typing.Optional[str]
        The base url to use for requests from the client.

    environment : typing.Optional[SeedAudiencesEnvironment]
        The environment to use for requests from the client.

    timeout : typing.Optional[float]
        The timeout to be used, in seconds, for requests. By default the timeout is 60 seconds, unless a custom httpx client is used, in which case this default is not enforced.

    follow_redirects : typing.Optional[bool]
        Whether the default httpx client follows redirects or not, this is irrelevant if a custom httpx client is passed in.

    httpx_client : typing.Optional[httpx.Client]
        The httpx client to use for making requests, a preconfigured client is used by default, however this is useful should you want to pass in any custom httpx configuration.

    Examples
    --------
    from seed import SeedAudiences
    from seed.environment import SeedAudiencesEnvironment

    client = SeedAudiences(
        environment=SeedAudiencesEnvironment.ENVIRONMENT_A,
    )
    """

    def __init__(
        self,
        *,
        base_url: typing.Optional[str] = None,
        environment: typing.Optional[SeedAudiencesEnvironment] = None,
        timeout: typing.Optional[float] = None,
        follow_redirects: typing.Optional[bool] = True,
        httpx_client: typing.Optional[httpx.Client] = None,
    ):
        _defaulted_timeout = timeout if timeout is not None else 60 if httpx_client is None else None
        self._client_wrapper = SyncClientWrapper(
            base_url=_get_base_url(base_url=base_url, environment=environment),
            httpx_client=httpx_client
            if httpx_client is not None
            else httpx.Client(timeout=_defaulted_timeout, follow_redirects=follow_redirects)
            if follow_redirects is not None
            else httpx.Client(timeout=_defaulted_timeout),
            timeout=_defaulted_timeout,
        )
        self.folder_a = FolderAClient(client_wrapper=self._client_wrapper)
        self.folder_d = FolderDClient(client_wrapper=self._client_wrapper)
        self.foo = FooClient(client_wrapper=self._client_wrapper)


class AsyncSeedAudiences:
    """
    Use this class to access the different functions within the SDK. You can instantiate any number of clients with different configuration that will propagate to these functions.

    Parameters
    ----------
    base_url : typing.Optional[str]
        The base url to use for requests from the client.

    environment : typing.Optional[SeedAudiencesEnvironment]
        The environment to use for requests from the client.

    timeout : typing.Optional[float]
        The timeout to be used, in seconds, for requests. By default the timeout is 60 seconds, unless a custom httpx client is used, in which case this default is not enforced.

    follow_redirects : typing.Optional[bool]
        Whether the default httpx client follows redirects or not, this is irrelevant if a custom httpx client is passed in.

    httpx_client : typing.Optional[httpx.AsyncClient]
        The httpx client to use for making requests, a preconfigured client is used by default, however this is useful should you want to pass in any custom httpx configuration.

    Examples
    --------
    from seed import AsyncSeedAudiences
    from seed.environment import SeedAudiencesEnvironment

    client = AsyncSeedAudiences(
        environment=SeedAudiencesEnvironment.ENVIRONMENT_A,
    )
    """

    def __init__(
        self,
        *,
        base_url: typing.Optional[str] = None,
        environment: typing.Optional[SeedAudiencesEnvironment] = None,
        timeout: typing.Optional[float] = None,
        follow_redirects: typing.Optional[bool] = True,
        httpx_client: typing.Optional[httpx.AsyncClient] = None,
    ):
        _defaulted_timeout = timeout if timeout is not None else 60 if httpx_client is None else None
        self._client_wrapper = AsyncClientWrapper(
            base_url=_get_base_url(base_url=base_url, environment=environment),
            httpx_client=httpx_client
            if httpx_client is not None
            else httpx.AsyncClient(timeout=_defaulted_timeout, follow_redirects=follow_redirects)
            if follow_redirects is not None
            else httpx.AsyncClient(timeout=_defaulted_timeout),
            timeout=_defaulted_timeout,
        )
        self.folder_a = AsyncFolderAClient(client_wrapper=self._client_wrapper)
        self.folder_d = AsyncFolderDClient(client_wrapper=self._client_wrapper)
        self.foo = AsyncFooClient(client_wrapper=self._client_wrapper)


def _get_base_url(
    *, base_url: typing.Optional[str] = None, environment: typing.Optional[SeedAudiencesEnvironment] = None
) -> str:
    if base_url is not None:
        return base_url
    elif environment is not None:
        return environment.value
    else:
        raise Exception("Please pass in either base_url or environment to construct the client")
