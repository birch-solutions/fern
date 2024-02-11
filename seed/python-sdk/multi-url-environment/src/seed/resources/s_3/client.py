# This file was auto-generated by Fern from our API Definition.

import typing
import urllib.parse
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


class S3Client:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_presigned_url(self, *, s_3_key: str, request_options: typing.Optional[RequestOptions] = None) -> str:
        """
        Parameters:
            - s_3_key: str.

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        """
        _response = self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_environment().s_3}/", "s3/presigned-url"),
            params=jsonable_encoder(
                request_options.additional_query_parameters if request_options is not None else None
            ),
            json={
                **{jsonable_encoder({"s3Key": s_3_key})},
                **(request_options.additional_headers if request_options is not None else {}),
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
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(str, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncS3Client:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_presigned_url(self, *, s_3_key: str, request_options: typing.Optional[RequestOptions] = None) -> str:
        """
        Parameters:
            - s_3_key: str.

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        """
        _response = await self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_environment().s_3}/", "s3/presigned-url"),
            params=jsonable_encoder(
                request_options.additional_query_parameters if request_options is not None else None
            ),
            json={
                **{jsonable_encoder({"s3Key": s_3_key})},
                **(request_options.additional_headers if request_options is not None else {}),
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
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(str, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
