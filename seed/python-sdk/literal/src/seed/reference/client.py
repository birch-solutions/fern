# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.pydantic_utilities import parse_obj_as
from ..core.request_options import RequestOptions
from ..types.send_response import SendResponse

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class ReferenceClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def send(self, *, query: str, request_options: typing.Optional[RequestOptions] = None) -> SendResponse:
        """
        Parameters
        ----------
        query : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        SendResponse

        Examples
        --------
        from seed.client import SeedLiteral

        client = SeedLiteral(
            base_url="https://yourhost.com/path/to/api",
        )
        client.reference.send(
            query="What is the weather today",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "reference",
            method="POST",
            json={"query": query, "prompt": "You are a helpful assistant", "stream": False},
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(SendResponse, parse_obj_as(type_=SendResponse, object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncReferenceClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def send(self, *, query: str, request_options: typing.Optional[RequestOptions] = None) -> SendResponse:
        """
        Parameters
        ----------
        query : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        SendResponse

        Examples
        --------
        import asyncio

        from seed.client import AsyncSeedLiteral

        client = AsyncSeedLiteral(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.reference.send(
                query="What is the weather today",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "reference",
            method="POST",
            json={"query": query, "prompt": "You are a helpful assistant", "stream": False},
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(SendResponse, parse_obj_as(type_=SendResponse, object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
