# This file was auto-generated by Fern from our API Definition.

import typing
from ..core.client_wrapper import SyncClientWrapper
from ..core.request_options import RequestOptions
from .types.stream_response import StreamResponse
from ..core.unchecked_base_model import construct_type
import json
from json.decoder import JSONDecodeError
from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class DummyClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def generate_stream(
        self,
        *,
        num_events: int,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> typing.Iterator[StreamResponse]:
        """
        Parameters
        ----------
        num_events : int

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Yields
        ------
        typing.Iterator[StreamResponse]

        Examples
        --------
        from seed import SeedStreaming

        client = SeedStreaming(
            base_url="https://yourhost.com/path/to/api",
        )
        response = client.dummy.generate_stream(
            num_events=1,
        )
        for chunk in response:
            yield chunk
        """
        with self._client_wrapper.httpx_client.stream(
            "generate-stream",
            method="POST",
            json={
                "num_events": num_events,
                "stream": True,
            },
            request_options=request_options,
            omit=OMIT,
        ) as _response:
            try:
                if 200 <= _response.status_code < 300:
                    for _text in _response.iter_lines():
                        try:
                            if len(_text) == 0:
                                continue
                            yield typing.cast(
                                StreamResponse,
                                construct_type(
                                    type_=StreamResponse,  # type: ignore
                                    object_=json.loads(_text),
                                ),
                            )
                        except:
                            pass
                    return
                _response.read()
                _response_json = _response.json()
            except JSONDecodeError:
                raise ApiError(status_code=_response.status_code, body=_response.text)
            raise ApiError(status_code=_response.status_code, body=_response_json)

    def generate(
        self,
        *,
        num_events: int,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> StreamResponse:
        """
        Parameters
        ----------
        num_events : int

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        StreamResponse

        Examples
        --------
        from seed import SeedStreaming

        client = SeedStreaming(
            base_url="https://yourhost.com/path/to/api",
        )
        client.dummy.generate(
            num_events=5,
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "generate",
            method="POST",
            json={
                "num_events": num_events,
                "stream": False,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    StreamResponse,
                    construct_type(
                        type_=StreamResponse,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncDummyClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def generate_stream(
        self,
        *,
        num_events: int,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> typing.AsyncIterator[StreamResponse]:
        """
        Parameters
        ----------
        num_events : int

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Yields
        ------
        typing.AsyncIterator[StreamResponse]

        Examples
        --------
        import asyncio

        from seed import AsyncSeedStreaming

        client = AsyncSeedStreaming(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            response = await client.dummy.generate_stream(
                num_events=1,
            )
            async for chunk in response:
                yield chunk


        asyncio.run(main())
        """
        async with self._client_wrapper.httpx_client.stream(
            "generate-stream",
            method="POST",
            json={
                "num_events": num_events,
                "stream": True,
            },
            request_options=request_options,
            omit=OMIT,
        ) as _response:
            try:
                if 200 <= _response.status_code < 300:
                    async for _text in _response.aiter_lines():
                        try:
                            if len(_text) == 0:
                                continue
                            yield typing.cast(
                                StreamResponse,
                                construct_type(
                                    type_=StreamResponse,  # type: ignore
                                    object_=json.loads(_text),
                                ),
                            )
                        except:
                            pass
                    return
                await _response.aread()
                _response_json = _response.json()
            except JSONDecodeError:
                raise ApiError(status_code=_response.status_code, body=_response.text)
            raise ApiError(status_code=_response.status_code, body=_response_json)

    async def generate(
        self,
        *,
        num_events: int,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> StreamResponse:
        """
        Parameters
        ----------
        num_events : int

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        StreamResponse

        Examples
        --------
        import asyncio

        from seed import AsyncSeedStreaming

        client = AsyncSeedStreaming(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.dummy.generate(
                num_events=5,
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "generate",
            method="POST",
            json={
                "num_events": num_events,
                "stream": False,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    StreamResponse,
                    construct_type(
                        type_=StreamResponse,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
