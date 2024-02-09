# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

import httpx

from .core.api_error import ApiError
from .core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from .core.jsonable_encoder import jsonable_encoder
from .core.remove_none_from_dict import remove_none_from_dict
from .core.request_options import RequestOptions
from .environment import SeedExamplesEnvironment
from .resources.file.client import AsyncFileClient, FileClient
from .resources.health.client import AsyncHealthClient, HealthClient
from .resources.service.client import AsyncServiceClient, ServiceClient

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class SeedExamples:
    def __init__(
        self,
        *,
        base_url: typing.Optional[str] = None,
        environment: typing.Optional[SeedExamplesEnvironment] = None,
        token: typing.Optional[typing.Union[str, typing.Callable[[], str]]] = None,
        timeout: typing.Optional[float] = 60,
        httpx_client: typing.Optional[httpx.Client] = None
    ):
        self._client_wrapper = SyncClientWrapper(
            base_url=_get_base_url(base_url=base_url, environment=environment),
            token=token,
            httpx_client=httpx.Client(timeout=timeout) if httpx_client is None else httpx_client,
        )
        self.file = FileClient(client_wrapper=self._client_wrapper)
        self.health = HealthClient(client_wrapper=self._client_wrapper)
        self.service = ServiceClient(client_wrapper=self._client_wrapper)

    def echo(self, *, request: str, request_options: typing.Optional[RequestOptions] = None) -> str:
        """
        Parameters:
            - request: str.

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        ---
        from seed.client import SeedExamples
        from seed.environment import SeedExamplesEnvironment

        client = SeedExamples(
            token="YOUR_TOKEN",
            environment=SeedExamplesEnvironment.PRODUCTION,
        )
        client.echo(
            request="Hello world!",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "POST",
            self._client_wrapper.get_base_url(),
            params=request_options.additional_query_parameters if request_options is not None else None,
            json=jsonable_encoder(request),
            headers=remove_none_from_dict(
                {
                    **self._client_wrapper.get_headers(),
                    **(request_options.additional_headers if request_options is not None else {}),
                }
            ),
            timeout=request_options.timeout_in_seconds if request_options.timeout_in_seconds is not None else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(str, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncSeedExamples:
    def __init__(
        self,
        *,
        base_url: typing.Optional[str] = None,
        environment: typing.Optional[SeedExamplesEnvironment] = None,
        token: typing.Optional[typing.Union[str, typing.Callable[[], str]]] = None,
        timeout: typing.Optional[float] = 60,
        httpx_client: typing.Optional[httpx.AsyncClient] = None
    ):
        self._client_wrapper = AsyncClientWrapper(
            base_url=_get_base_url(base_url=base_url, environment=environment),
            token=token,
            httpx_client=httpx.AsyncClient(timeout=timeout) if httpx_client is None else httpx_client,
        )
        self.file = AsyncFileClient(client_wrapper=self._client_wrapper)
        self.health = AsyncHealthClient(client_wrapper=self._client_wrapper)
        self.service = AsyncServiceClient(client_wrapper=self._client_wrapper)

    async def echo(self, *, request: str, request_options: typing.Optional[RequestOptions] = None) -> str:
        """
        Parameters:
            - request: str.

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        ---
        from seed.client import AsyncSeedExamples
        from seed.environment import SeedExamplesEnvironment

        client = AsyncSeedExamples(
            token="YOUR_TOKEN",
            environment=SeedExamplesEnvironment.PRODUCTION,
        )
        await client.echo(
            request="Hello world!",
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            "POST",
            self._client_wrapper.get_base_url(),
            params=request_options.additional_query_parameters if request_options is not None else None,
            json=jsonable_encoder(request),
            headers=remove_none_from_dict(
                {
                    **self._client_wrapper.get_headers(),
                    **(request_options.additional_headers if request_options is not None else {}),
                }
            ),
            timeout=request_options.timeout_in_seconds if request_options.timeout_in_seconds is not None else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(str, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


def _get_base_url(
    *, base_url: typing.Optional[str] = None, environment: typing.Optional[SeedExamplesEnvironment] = None
) -> str:
    if base_url is not None:
        return base_url
    elif environment is not None:
        return environment.value
    else:
        raise Exception("Please pass in either base_url or environment to construct the client")
