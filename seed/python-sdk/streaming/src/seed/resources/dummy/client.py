# This file was auto-generated by Fern from our API Definition.

import json
import typing
import urllib.parse
from json.decoder import JSONDecodeError

from ...core.api_error import ApiError
from ...core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ...core.jsonable_encoder import jsonable_encoder
from ...core.remove_none_from_dict import remove_none_from_dict
from ...core.request_options import RequestOptions
from .types.stream_response import StreamResponse

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class DummyClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def generate_stream(
        self, *, num_events: int, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.Iterator[StreamResponse]:
        """
        Parameters:
            - num_events: int.

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        """
        with self._client_wrapper.httpx_client.stream(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "generate-stream"),
            params=jsonable_encoder(
                request_options.additional_query_parameters if request_options is not None else None
            ),
            json=jsonable_encoder({"num_events": num_events})
            if request_options is None or request_options.additional_body_parameters is None
            else {
                **jsonable_encoder({"num_events": num_events}),
                **(jsonable_encoder(remove_none_from_dict(request_options.additional_body_parameters))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.additional_headers if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.timeout_in_seconds
            if request_options is not None and request_options.timeout_in_seconds is not None
            else 60,
        ) as _response:
            if 200 <= _response.status_code < 300:
                for _text in _response.iter_lines():
                    if len(_text) == 0:
                        continue
                    yield pydantic.parse_obj_as(StreamResponse, json.loads(_text))  # type: ignore
                return
            _response.read()
            try:
                _response_json = _response.json()
            except JSONDecodeError:
                raise ApiError(status_code=_response.status_code, body=_response.text)
            raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncDummyClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def generate_stream(
        self, *, num_events: int, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.AsyncIterator[StreamResponse]:
        """
        Parameters:
            - num_events: int.

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        """
        async with self._client_wrapper.httpx_client.stream(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "generate-stream"),
            params=jsonable_encoder(
                request_options.additional_query_parameters if request_options is not None else None
            ),
            json=jsonable_encoder({"num_events": num_events})
            if request_options is None or request_options.additional_body_parameters is None
            else {
                **jsonable_encoder({"num_events": num_events}),
                **(jsonable_encoder(remove_none_from_dict(request_options.additional_body_parameters))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.additional_headers if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.timeout_in_seconds
            if request_options is not None and request_options.timeout_in_seconds is not None
            else 60,
        ) as _response:
            if 200 <= _response.status_code < 300:
                async for _text in _response.aiter_lines():
                    if len(_text) == 0:
                        continue
                    yield pydantic.parse_obj_as(StreamResponse, json.loads(_text))  # type: ignore
                return
            await _response.aread()
            try:
                _response_json = _response.json()
            except JSONDecodeError:
                raise ApiError(status_code=_response.status_code, body=_response.text)
            raise ApiError(status_code=_response.status_code, body=_response_json)
