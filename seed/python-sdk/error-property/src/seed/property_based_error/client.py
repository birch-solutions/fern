# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.pydantic_utilities import pydantic_v1
from ..core.request_options import RequestOptions
from ..errors.errors.property_based_error_test import PropertyBasedErrorTest
from ..errors.types.property_based_error_test_body import PropertyBasedErrorTestBody


class PropertyBasedErrorClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def throw_error(self, *, request_options: typing.Optional[RequestOptions] = None) -> str:
        """
        GET request that always throws an error

        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        str

        Examples
        --------
        from seed.client import SeedErrorProperty

        client = SeedErrorProperty(
            base_url="https://yourhost.com/path/to/api",
        )
        client.property_based_error.throw_error()
        """
        _response = self._client_wrapper.httpx_client.request(
            "property-based-error", method="GET", request_options=request_options
        )
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(str, _response_json)  # type: ignore
        if "errorName" in _response_json:
            if _response_json["errorName"] == "PropertyBasedErrorTest":
                raise PropertyBasedErrorTest(
                    pydantic_v1.parse_obj_as(PropertyBasedErrorTestBody, _response_json["content"])  # type: ignore
                )
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncPropertyBasedErrorClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def throw_error(self, *, request_options: typing.Optional[RequestOptions] = None) -> str:
        """
        GET request that always throws an error

        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        str

        Examples
        --------
        import asyncio

        from seed.client import AsyncSeedErrorProperty

        client = AsyncSeedErrorProperty(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.property_based_error.throw_error()


        asyncio.run(
            main(),
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            "property-based-error", method="GET", request_options=request_options
        )
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(str, _response_json)  # type: ignore
        if "errorName" in _response_json:
            if _response_json["errorName"] == "PropertyBasedErrorTest":
                raise PropertyBasedErrorTest(
                    pydantic_v1.parse_obj_as(PropertyBasedErrorTestBody, _response_json["content"])  # type: ignore
                )
        raise ApiError(status_code=_response.status_code, body=_response_json)
