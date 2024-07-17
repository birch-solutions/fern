# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.pydantic_utilities import pydantic_v1
from ..core.request_options import RequestOptions
from .types.regular_response import RegularResponse
from .types.stream_response import StreamResponse

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class DummyClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    @typing.overload
    def generate(
        self, *, stream: typing.Literal[True], num_events: int, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.Iterator[StreamResponse]:
        """
        Parameters
        ----------
        stream : typing.Literal[True]

        num_events : int

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.


        Examples
        --------
        from seed.client import SeedStreaming

        client = SeedStreaming(
            base_url="https://yourhost.com/path/to/api",
        )
        response = client.dummy.generate(
            stream=False,
            num_events=5,
        )
        for chunk in response:
            yield chunk
        """
        ...

    @typing.overload
    def generate(
        self, *, stream: typing.Literal[False], num_events: int, request_options: typing.Optional[RequestOptions] = None
    ) -> RegularResponse:
        """
        Parameters
        ----------
        stream : typing.Literal[False]

        num_events : int

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.


        Examples
        --------
        from seed.client import SeedStreaming

        client = SeedStreaming(
            base_url="https://yourhost.com/path/to/api",
        )
        client.dummy.generate(
            stream=False,
            num_events=5,
        )
        """
        ...

    def generate(
        self, *, stream: bool, num_events: int, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.Union[typing.Iterator[StreamResponse], RegularResponse]:
        """
        Parameters
        ----------
        stream : bool

        num_events : int

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        """
        if stream:
            with self._client_wrapper.httpx_client.stream(
                "generate",
                method="POST",
                json={"stream": stream, "num_events": num_events},
                request_options=request_options,
                omit=OMIT,
            ) as _response:
                try:
                    if 200 <= _response.status_code < 300:
                        return pydantic_v1.parse_obj_as(RegularResponse, _response.json())  # type: ignore
                    _response_json = _response.json()
                except JSONDecodeError:
                    raise ApiError(status_code=_response.status_code, body=_response.text)
                raise ApiError(status_code=_response.status_code, body=_response_json)
        else:
            _response = self._client_wrapper.httpx_client.request(
                "generate",
                method="POST",
                json={"stream": stream, "num_events": num_events},
                request_options=request_options,
                omit=OMIT,
            )
            try:
                if 200 <= _response.status_code < 300:
                    return pydantic_v1.parse_obj_as(RegularResponse, _response.json())  # type: ignore
                _response_json = _response.json()
            except JSONDecodeError:
                raise ApiError(status_code=_response.status_code, body=_response.text)
            raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncDummyClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    @typing.overload
    async def generate(
        self, *, stream: typing.Literal[True], num_events: int, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.AsyncIterator[StreamResponse]:
        """
        Parameters
        ----------
        stream : typing.Literal[True]

        num_events : int

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.


        Examples
        --------
        import asyncio

        from seed.client import AsyncSeedStreaming

        client = AsyncSeedStreaming(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            response = await client.dummy.generate(
                stream=False,
                num_events=5,
            )
            async for chunk in response:
                yield chunk


        asyncio.run(main())
        """
        ...

    @typing.overload
    async def generate(
        self, *, stream: typing.Literal[False], num_events: int, request_options: typing.Optional[RequestOptions] = None
    ) -> RegularResponse:
        """
        Parameters
        ----------
        stream : typing.Literal[False]

        num_events : int

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.


        Examples
        --------
        import asyncio

        from seed.client import AsyncSeedStreaming

        client = AsyncSeedStreaming(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.dummy.generate(
                stream=False,
                num_events=5,
            )


        asyncio.run(main())
        """
        ...

    async def generate(
        self, *, stream: bool, num_events: int, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.Union[typing.AsyncIterator[StreamResponse], RegularResponse]:
        """
        Parameters
        ----------
        stream : bool

        num_events : int

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        """
        if stream:
            async with self._client_wrapper.httpx_client.stream(
                "generate",
                method="POST",
                json={"stream": stream, "num_events": num_events},
                request_options=request_options,
                omit=OMIT,
            ) as _response:
                try:
                    if 200 <= _response.status_code < 300:
                        return pydantic_v1.parse_obj_as(RegularResponse, _response.json())  # type: ignore
                    _response_json = _response.json()
                except JSONDecodeError:
                    raise ApiError(status_code=_response.status_code, body=_response.text)
                raise ApiError(status_code=_response.status_code, body=_response_json)
        else:
            _response = await self._client_wrapper.httpx_client.request(
                "generate",
                method="POST",
                json={"stream": stream, "num_events": num_events},
                request_options=request_options,
                omit=OMIT,
            )
            try:
                if 200 <= _response.status_code < 300:
                    return pydantic_v1.parse_obj_as(RegularResponse, _response.json())  # type: ignore
                _response_json = _response.json()
            except JSONDecodeError:
                raise ApiError(status_code=_response.status_code, body=_response.text)
            raise ApiError(status_code=_response.status_code, body=_response_json)
