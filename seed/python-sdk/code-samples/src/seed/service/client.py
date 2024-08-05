# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.pydantic_utilities import parse_obj_as
from ..core.request_options import RequestOptions
from .types.my_response import MyResponse

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class ServiceClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def hello(self, *, num_events: int, request_options: typing.Optional[RequestOptions] = None) -> MyResponse:
        """
        Parameters
        ----------
        num_events : int

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        MyResponse

        Examples
        --------
        from seed import SeedCodeSamples

        client = SeedCodeSamples(
            base_url="https://yourhost.com/path/to/api",
        )
        client.service.hello(
            num_events=5,
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "hello", method="POST", json={"num_events": num_events}, request_options=request_options, omit=OMIT
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(MyResponse, parse_obj_as(type_=MyResponse, object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncServiceClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def hello(self, *, num_events: int, request_options: typing.Optional[RequestOptions] = None) -> MyResponse:
        """
        Parameters
        ----------
        num_events : int

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        MyResponse

        Examples
        --------
        import asyncio

        from seed import AsyncSeedCodeSamples

        client = AsyncSeedCodeSamples(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.service.hello(
                num_events=5,
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "hello", method="POST", json={"num_events": num_events}, request_options=request_options, omit=OMIT
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(MyResponse, parse_obj_as(type_=MyResponse, object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
