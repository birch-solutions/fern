# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

import httpx

from .core.api_error import ApiError
from .core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from .core.jsonable_encoder import jsonable_encoder
from .core.pydantic_utilities import pydantic_v1
from .core.request_options import RequestOptions
from .service.client import AsyncServiceClient, ServiceClient

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class SeedPackageYml:
    """
    Use this class to access the different functions within the SDK. You can instantiate any number of clients with different configuration that will propagate to these functions.

    Parameters
    ----------
    base_url : str
        The base url to use for requests from the client.

    timeout : typing.Optional[float]
        The timeout to be used, in seconds, for requests. By default the timeout is 60 seconds, unless a custom httpx client is used, in which case this default is not enforced.

    follow_redirects : typing.Optional[bool]
        Whether the default httpx client follows redirects or not, this is irrelevant if a custom httpx client is passed in.

    httpx_client : typing.Optional[httpx.Client]
        The httpx client to use for making requests, a preconfigured client is used by default, however this is useful should you want to pass in any custom httpx configuration.

    Examples
    --------
    from seed.client import SeedPackageYml

    client = SeedPackageYml(
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
    ):
        _defaulted_timeout = timeout if timeout is not None else 60 if httpx_client is None else None
        self._client_wrapper = SyncClientWrapper(
            base_url=base_url,
            httpx_client=httpx_client
            if httpx_client is not None
            else httpx.Client(timeout=_defaulted_timeout, follow_redirects=follow_redirects)
            if follow_redirects is not None
            else httpx.Client(timeout=_defaulted_timeout),
            timeout=_defaulted_timeout,
        )
        self.service = ServiceClient(client_wrapper=self._client_wrapper)

    def echo(self, id: str, *, request: str, request_options: typing.Optional[RequestOptions] = None) -> str:
        """
        Parameters
        ----------
        id : str

        request : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        str

        Examples
        --------
        from seed.client import SeedPackageYml

        client = SeedPackageYml(
            base_url="https://yourhost.com/path/to/api",
        )
        client.echo(
            id="id-ksfd9c1",
            request="Hello world!",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            f"{jsonable_encoder(id)}/", method="POST", json=request, request_options=request_options, omit=OMIT
        )
        try:
            if 200 <= _response.status_code < 300:
                return pydantic_v1.parse_obj_as(str, _response.json())  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncSeedPackageYml:
    """
    Use this class to access the different functions within the SDK. You can instantiate any number of clients with different configuration that will propagate to these functions.

    Parameters
    ----------
    base_url : str
        The base url to use for requests from the client.

    timeout : typing.Optional[float]
        The timeout to be used, in seconds, for requests. By default the timeout is 60 seconds, unless a custom httpx client is used, in which case this default is not enforced.

    follow_redirects : typing.Optional[bool]
        Whether the default httpx client follows redirects or not, this is irrelevant if a custom httpx client is passed in.

    httpx_client : typing.Optional[httpx.AsyncClient]
        The httpx client to use for making requests, a preconfigured client is used by default, however this is useful should you want to pass in any custom httpx configuration.

    Examples
    --------
    from seed.client import AsyncSeedPackageYml

    client = AsyncSeedPackageYml(
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
    ):
        _defaulted_timeout = timeout if timeout is not None else 60 if httpx_client is None else None
        self._client_wrapper = AsyncClientWrapper(
            base_url=base_url,
            httpx_client=httpx_client
            if httpx_client is not None
            else httpx.AsyncClient(timeout=_defaulted_timeout, follow_redirects=follow_redirects)
            if follow_redirects is not None
            else httpx.AsyncClient(timeout=_defaulted_timeout),
            timeout=_defaulted_timeout,
        )
        self.service = AsyncServiceClient(client_wrapper=self._client_wrapper)

    async def echo(self, id: str, *, request: str, request_options: typing.Optional[RequestOptions] = None) -> str:
        """
        Parameters
        ----------
        id : str

        request : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        str

        Examples
        --------
        import asyncio

        from seed.client import AsyncSeedPackageYml

        client = AsyncSeedPackageYml(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.echo(
                id="id-ksfd9c1",
                request="Hello world!",
            )


        asyncio.run(
            main(),
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            f"{jsonable_encoder(id)}/", method="POST", json=request, request_options=request_options, omit=OMIT
        )
        try:
            if 200 <= _response.status_code < 300:
                return pydantic_v1.parse_obj_as(str, _response.json())  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
