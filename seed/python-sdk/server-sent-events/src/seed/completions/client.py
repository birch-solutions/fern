# This file was auto-generated by Fern from our API Definition.

import typing
from ..core.client_wrapper import SyncClientWrapper
from ..core.request_options import RequestOptions
from .types.streamed_completion import StreamedCompletion
import httpx_sse
from ..core.pydantic_utilities import parse_obj_as
import json
from json.decoder import JSONDecodeError
from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class CompletionsClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def stream(
        self, *, query: str, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.Iterator[StreamedCompletion]:
        """
        Parameters
        ----------
        query : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Yields
        ------
        typing.Iterator[StreamedCompletion]

        Examples
        --------
        from seed import SeedServerSentEvents

        client = SeedServerSentEvents(
            base_url="https://yourhost.com/path/to/api",
        )
        response = client.completions.stream(
            query="string",
        )
        for chunk in response:
            yield chunk
        """
        with self._client_wrapper.httpx_client.stream(
            "stream",
            method="POST",
            json={
                "query": query,
            },
            request_options=request_options,
            omit=OMIT,
        ) as _response:
            try:
                if 200 <= _response.status_code < 300:
                    _event_source = httpx_sse.EventSource(_response)
                    for _sse in _event_source.iter_sse():
                        if _sse.data == "[[DONE]]":
                            return
                        try:
                            yield typing.cast(
                                StreamedCompletion,
                                parse_obj_as(
                                    type_=StreamedCompletion,  # type: ignore
                                    object_=json.loads(_sse.data),
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


class AsyncCompletionsClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def stream(
        self, *, query: str, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.AsyncIterator[StreamedCompletion]:
        """
        Parameters
        ----------
        query : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Yields
        ------
        typing.AsyncIterator[StreamedCompletion]

        Examples
        --------
        import asyncio

        from seed import AsyncSeedServerSentEvents

        client = AsyncSeedServerSentEvents(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            response = await client.completions.stream(
                query="string",
            )
            async for chunk in response:
                yield chunk


        asyncio.run(main())
        """
        async with self._client_wrapper.httpx_client.stream(
            "stream",
            method="POST",
            json={
                "query": query,
            },
            request_options=request_options,
            omit=OMIT,
        ) as _response:
            try:
                if 200 <= _response.status_code < 300:
                    _event_source = httpx_sse.EventSource(_response)
                    async for _sse in _event_source.aiter_sse():
                        if _sse.data == "[[DONE]]":
                            return
                        try:
                            yield typing.cast(
                                StreamedCompletion,
                                parse_obj_as(
                                    type_=StreamedCompletion,  # type: ignore
                                    object_=json.loads(_sse.data),
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
