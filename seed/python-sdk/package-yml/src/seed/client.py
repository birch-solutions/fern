# This file was auto-generated by Fern from our API Definition.

import typing
import urllib.parse
from json.decoder import JSONDecodeError

import httpx

from .core.api_error import ApiError
from .core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from .core.jsonable_encoder import jsonable_encoder
from .core.remove_none_from_dict import remove_none_from_dict
from .core.request_options import RequestOptions
from .resources.service.client import AsyncServiceClient, ServiceClient

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class SeedPackageYml:
    def __init__(
        self, *, base_url: str, timeout: typing.Optional[float] = 60, httpx_client: typing.Optional[httpx.Client] = None
    ):
        self._client_wrapper = SyncClientWrapper(
            base_url=base_url, httpx_client=httpx.Client(timeout=timeout) if httpx_client is None else httpx_client
        )
        self.service = ServiceClient(client_wrapper=self._client_wrapper)

    def echo(self, id: str, *, request: str, request_options: typing.Optional[RequestOptions] = None) -> str:
        """
        Parameters:
            - id: str.

            - request: str.

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        ---
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
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", f"{id}/"),
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


class AsyncSeedPackageYml:
    def __init__(
        self,
        *,
        base_url: str,
        timeout: typing.Optional[float] = 60,
        httpx_client: typing.Optional[httpx.AsyncClient] = None,
    ):
        self._client_wrapper = AsyncClientWrapper(
            base_url=base_url, httpx_client=httpx.AsyncClient(timeout=timeout) if httpx_client is None else httpx_client
        )
        self.service = AsyncServiceClient(client_wrapper=self._client_wrapper)

    async def echo(self, id: str, *, request: str, request_options: typing.Optional[RequestOptions] = None) -> str:
        """
        Parameters:
            - id: str.

            - request: str.

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        ---
        from seed.client import AsyncSeedPackageYml

        client = AsyncSeedPackageYml(
            base_url="https://yourhost.com/path/to/api",
        )
        await client.echo(
            id="id-ksfd9c1",
            request="Hello world!",
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", f"{id}/"),
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
