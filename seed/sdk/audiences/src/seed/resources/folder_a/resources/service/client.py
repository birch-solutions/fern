# This file was auto-generated by Fern from our API Definition.

from json.decoder import JSONDecodeError

from .....core.api_error import ApiError
from .....core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from .types.response import Response

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


class ServiceClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_direct_thread(self) -> Response:
        _response = self._client_wrapper.httpx_client.request(
            "GET", self._client_wrapper.get_base_url(), headers=self._client_wrapper.get_headers(), timeout=60
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(Response, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncServiceClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_direct_thread(self) -> Response:
        _response = await self._client_wrapper.httpx_client.request(
            "GET", self._client_wrapper.get_base_url(), headers=self._client_wrapper.get_headers(), timeout=60
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(Response, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
