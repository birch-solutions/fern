# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.request_options import RequestOptions

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class ReqWithHeadersClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_with_custom_header(
        self,
        *,
        x_test_service_header: str,
        x_test_endpoint_header: str,
        request: str,
        request_options: typing.Optional[RequestOptions] = None
    ) -> None:
        """
        Parameters
        ----------
        x_test_service_header : str

        x_test_endpoint_header : str

        request : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        from seed.client import SeedExhaustive

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.req_with_headers.get_with_custom_header(
            x_test_service_header="string",
            x_test_endpoint_header="string",
            request="string",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "test-headers/custom-header",
            method="POST",
            json=request,
            headers={
                "X-TEST-SERVICE-HEADER": str(x_test_service_header) if x_test_service_header is not None else None,
                "X-TEST-ENDPOINT-HEADER": str(x_test_endpoint_header) if x_test_endpoint_header is not None else None,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncReqWithHeadersClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_with_custom_header(
        self,
        *,
        x_test_service_header: str,
        x_test_endpoint_header: str,
        request: str,
        request_options: typing.Optional[RequestOptions] = None
    ) -> None:
        """
        Parameters
        ----------
        x_test_service_header : str

        x_test_endpoint_header : str

        request : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        import asyncio

        from seed.client import AsyncSeedExhaustive

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.req_with_headers.get_with_custom_header(
                x_test_service_header="string",
                x_test_endpoint_header="string",
                request="string",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "test-headers/custom-header",
            method="POST",
            json=request,
            headers={
                "X-TEST-SERVICE-HEADER": str(x_test_service_header) if x_test_service_header is not None else None,
                "X-TEST-ENDPOINT-HEADER": str(x_test_endpoint_header) if x_test_endpoint_header is not None else None,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
