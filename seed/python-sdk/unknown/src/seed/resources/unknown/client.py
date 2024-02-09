# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ...core.api_error import ApiError
from ...core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ...core.jsonable_encoder import jsonable_encoder
from ...core.remove_none_from_dict import remove_none_from_dict
from ...core.request_options import RequestOptions

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class UnknownClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def post(
        self, *, request: typing.Any, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.List[typing.Any]:
        """
        Parameters:
            - request: typing.Any.

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        """
        _response = self._client_wrapper.httpx_client.request(
            "POST",
            self._client_wrapper.get_base_url(),
            params=request_options.additional_query_parameters if request_options is not None else None,
            json=jsonable_encoder(request),
            headers=remove_none_from_dict(
                {
                    **self._client_wrapper.get_headers(),
                    **(request_options.additional_headers if request_options is not None else {}),
                }
            ),
            timeout=request_options.timeout_in_seconds if request_options.timeout_in_seconds is not None else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(typing.List[typing.Any], _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncUnknownClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def post(
        self, *, request: typing.Any, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.List[typing.Any]:
        """
        Parameters:
            - request: typing.Any.

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        """
        _response = await self._client_wrapper.httpx_client.request(
            "POST",
            self._client_wrapper.get_base_url(),
            params=request_options.additional_query_parameters if request_options is not None else None,
            json=jsonable_encoder(request),
            headers=remove_none_from_dict(
                {
                    **self._client_wrapper.get_headers(),
                    **(request_options.additional_headers if request_options is not None else {}),
                }
            ),
            timeout=request_options.timeout_in_seconds if request_options.timeout_in_seconds is not None else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(typing.List[typing.Any], _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
