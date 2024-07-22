# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

import httpx

from .core.api_error import ApiError
from .core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from .core.pydantic_utilities import parse_obj_as
from .core.request_options import RequestOptions
from .environment import SeedExhaustiveEnvironment
from .file.client import AsyncFileClient, FileClient
from .health.client import AsyncHealthClient, HealthClient
from .service.client import AsyncServiceClient, ServiceClient

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class BaseSeedExhaustive:
    """
    Use this class to access the different functions within the SDK. You can instantiate any number of clients with different configuration that will propagate to these functions.

    Parameters
    ----------
    base_url : typing.Optional[str]
        The base url to use for requests from the client.

    environment : typing.Optional[SeedExhaustiveEnvironment]
        The environment to use for requests from the client.

    token : typing.Optional[typing.Union[str, typing.Callable[[], str]]]
    timeout : typing.Optional[float]
        The timeout to be used, in seconds, for requests. By default the timeout is 60 seconds, unless a custom httpx client is used, in which case this default is not enforced.

    follow_redirects : typing.Optional[bool]
        Whether the default httpx client follows redirects or not, this is irrelevant if a custom httpx client is passed in.

    httpx_client : typing.Optional[httpx.Client]
        The httpx client to use for making requests, a preconfigured client is used by default, however this is useful should you want to pass in any custom httpx configuration.

    Examples
    --------
    from seed.client import SeedExhaustive
    from seed.environment import SeedExhaustiveEnvironment

    client = SeedExhaustive(
        token="YOUR_TOKEN",
        environment=SeedExhaustiveEnvironment.PRODUCTION,
    )
    """

    def __init__(
        self,
        *,
        base_url: typing.Optional[str] = None,
        environment: typing.Optional[SeedExhaustiveEnvironment] = None,
        token: typing.Optional[typing.Union[str, typing.Callable[[], str]]] = None,
        timeout: typing.Optional[float] = None,
        follow_redirects: typing.Optional[bool] = True,
        httpx_client: typing.Optional[httpx.Client] = None
    ):
        _defaulted_timeout = timeout if timeout is not None else 60 if httpx_client is None else None
        self._client_wrapper = SyncClientWrapper(
            base_url=_get_base_url(base_url=base_url, environment=environment),
            token=token,
            httpx_client=httpx_client
            if httpx_client is not None
            else httpx.Client(timeout=_defaulted_timeout, follow_redirects=follow_redirects)
            if follow_redirects is not None
            else httpx.Client(timeout=_defaulted_timeout),
            timeout=_defaulted_timeout,
        )
        self.file = FileClient(client_wrapper=self._client_wrapper)
        self.health = HealthClient(client_wrapper=self._client_wrapper)
        self.service = ServiceClient(client_wrapper=self._client_wrapper)

    def echo(self, *, request: str, request_options: typing.Optional[RequestOptions] = None) -> str:
        """
        Parameters
        ----------
        request : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        str

        Examples
        --------
        from seed.client import SeedExhaustive
        from seed.environment import SeedExhaustiveEnvironment

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            environment=SeedExhaustiveEnvironment.PRODUCTION,
        )
        client.echo(
            request="Hello world!\\n\\nwith\\n\\tnewlines",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            method="POST", json=request, request_options=request_options, omit=OMIT
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(str, parse_obj_as(type_=str, object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncBaseSeedExhaustive:
    """
    Use this class to access the different functions within the SDK. You can instantiate any number of clients with different configuration that will propagate to these functions.

    Parameters
    ----------
    base_url : typing.Optional[str]
        The base url to use for requests from the client.

    environment : typing.Optional[SeedExhaustiveEnvironment]
        The environment to use for requests from the client.

    token : typing.Optional[typing.Union[str, typing.Callable[[], str]]]
    timeout : typing.Optional[float]
        The timeout to be used, in seconds, for requests. By default the timeout is 60 seconds, unless a custom httpx client is used, in which case this default is not enforced.

    follow_redirects : typing.Optional[bool]
        Whether the default httpx client follows redirects or not, this is irrelevant if a custom httpx client is passed in.

    httpx_client : typing.Optional[httpx.AsyncClient]
        The httpx client to use for making requests, a preconfigured client is used by default, however this is useful should you want to pass in any custom httpx configuration.

    Examples
    --------
    from seed.client import AsyncSeedExhaustive
    from seed.environment import SeedExhaustiveEnvironment

    client = AsyncSeedExhaustive(
        token="YOUR_TOKEN",
        environment=SeedExhaustiveEnvironment.PRODUCTION,
    )
    """

    def __init__(
        self,
        *,
        base_url: typing.Optional[str] = None,
        environment: typing.Optional[SeedExhaustiveEnvironment] = None,
        token: typing.Optional[typing.Union[str, typing.Callable[[], str]]] = None,
        timeout: typing.Optional[float] = None,
        follow_redirects: typing.Optional[bool] = True,
        httpx_client: typing.Optional[httpx.AsyncClient] = None
    ):
        _defaulted_timeout = timeout if timeout is not None else 60 if httpx_client is None else None
        self._client_wrapper = AsyncClientWrapper(
            base_url=_get_base_url(base_url=base_url, environment=environment),
            token=token,
            httpx_client=httpx_client
            if httpx_client is not None
            else httpx.AsyncClient(timeout=_defaulted_timeout, follow_redirects=follow_redirects)
            if follow_redirects is not None
            else httpx.AsyncClient(timeout=_defaulted_timeout),
            timeout=_defaulted_timeout,
        )
        self.file = AsyncFileClient(client_wrapper=self._client_wrapper)
        self.health = AsyncHealthClient(client_wrapper=self._client_wrapper)
        self.service = AsyncServiceClient(client_wrapper=self._client_wrapper)

    async def echo(self, *, request: str, request_options: typing.Optional[RequestOptions] = None) -> str:
        """
        Parameters
        ----------
        request : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        str

        Examples
        --------
        import asyncio

        from seed.client import AsyncSeedExhaustive
        from seed.environment import SeedExhaustiveEnvironment

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            environment=SeedExhaustiveEnvironment.PRODUCTION,
        )


        async def main() -> None:
            await client.echo(
                request="Hello world!\\n\\nwith\\n\\tnewlines",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            method="POST", json=request, request_options=request_options, omit=OMIT
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(str, parse_obj_as(type_=str, object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


def _get_base_url(
    *, base_url: typing.Optional[str] = None, environment: typing.Optional[SeedExhaustiveEnvironment] = None
) -> str:
    if base_url is not None:
        return base_url
    elif environment is not None:
        return environment.value
    else:
        raise Exception("Please pass in either base_url or environment to construct the client")
