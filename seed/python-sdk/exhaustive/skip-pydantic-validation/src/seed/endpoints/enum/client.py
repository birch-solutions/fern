# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ...core.api_error import ApiError
from ...core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ...core.request_options import RequestOptions
from ...core.unchecked_base_model import construct_type
from ...types.enum.types.weather_report import WeatherReport

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class EnumClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_and_return_enum(
        self, *, request: WeatherReport, request_options: typing.Optional[RequestOptions] = None
    ) -> WeatherReport:
        """
        Parameters
        ----------
        request : WeatherReport

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        WeatherReport

        Examples
        --------
        from seed import SeedExhaustive

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.endpoints.enum.get_and_return_enum(
            request="SUNNY",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "enum", method="POST", json=request, request_options=request_options, omit=OMIT
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(WeatherReport, construct_type(type_=WeatherReport, object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncEnumClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_and_return_enum(
        self, *, request: WeatherReport, request_options: typing.Optional[RequestOptions] = None
    ) -> WeatherReport:
        """
        Parameters
        ----------
        request : WeatherReport

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        WeatherReport

        Examples
        --------
        import asyncio

        from seed import AsyncSeedExhaustive

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.endpoints.enum.get_and_return_enum(
                request="SUNNY",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "enum", method="POST", json=request, request_options=request_options, omit=OMIT
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(WeatherReport, construct_type(type_=WeatherReport, object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
