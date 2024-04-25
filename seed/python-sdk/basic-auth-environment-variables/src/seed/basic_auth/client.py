# This file was auto-generated by Fern from our API Definition.

import typing
import urllib.parse
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.jsonable_encoder import jsonable_encoder
from ..core.pydantic_utilities import pydantic_v1
from ..core.remove_none_from_dict import remove_none_from_dict
from ..core.request_options import RequestOptions
from ..errors.errors.bad_request import BadRequest
from ..errors.errors.unauthorized_request import UnauthorizedRequest
from ..errors.types.unauthorized_request_error_body import UnauthorizedRequestErrorBody

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class BasicAuthClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_with_basic_auth(self, *, request_options: typing.Optional[RequestOptions] = None) -> bool:
        """
        GET request with basic auth scheme

        Parameters:
            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import SeedBasicAuthEnvironmentVariables

        client = SeedBasicAuthEnvironmentVariables(
            username="YOUR_USERNAME",
            password="YOUR_PASSWORD",
            base_url="https://yourhost.com/path/to/api",
        )
        client.basic_auth.get_with_basic_auth()
        """
        _response = self._client_wrapper.httpx_client.request(
            method="GET",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "basic-auth"),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.get("additional_headers", {}) if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(bool, _response.json())  # type: ignore
        if _response.status_code == 401:
            raise UnauthorizedRequest(
                pydantic_v1.parse_obj_as(UnauthorizedRequestErrorBody, _response.json())  # type: ignore
            )
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def post_with_basic_auth(
        self, *, request: typing.Any, request_options: typing.Optional[RequestOptions] = None
    ) -> bool:
        """
        POST request with basic auth scheme

        Parameters:
            - request: typing.Any.

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import SeedBasicAuthEnvironmentVariables

        client = SeedBasicAuthEnvironmentVariables(
            username="YOUR_USERNAME",
            password="YOUR_PASSWORD",
            base_url="https://yourhost.com/path/to/api",
        )
        client.basic_auth.post_with_basic_auth(
            request={"key": "value"},
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            method="POST",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "basic-auth"),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            json=jsonable_encoder(request)
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.get("additional_headers", {}) if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(bool, _response.json())  # type: ignore
        if _response.status_code == 401:
            raise UnauthorizedRequest(
                pydantic_v1.parse_obj_as(UnauthorizedRequestErrorBody, _response.json())  # type: ignore
            )
        if _response.status_code == 400:
            raise BadRequest()
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncBasicAuthClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_with_basic_auth(self, *, request_options: typing.Optional[RequestOptions] = None) -> bool:
        """
        GET request with basic auth scheme

        Parameters:
            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import AsyncSeedBasicAuthEnvironmentVariables

        client = AsyncSeedBasicAuthEnvironmentVariables(
            username="YOUR_USERNAME",
            password="YOUR_PASSWORD",
            base_url="https://yourhost.com/path/to/api",
        )
        await client.basic_auth.get_with_basic_auth()
        """
        _response = await self._client_wrapper.httpx_client.request(
            method="GET",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "basic-auth"),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.get("additional_headers", {}) if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(bool, _response.json())  # type: ignore
        if _response.status_code == 401:
            raise UnauthorizedRequest(
                pydantic_v1.parse_obj_as(UnauthorizedRequestErrorBody, _response.json())  # type: ignore
            )
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def post_with_basic_auth(
        self, *, request: typing.Any, request_options: typing.Optional[RequestOptions] = None
    ) -> bool:
        """
        POST request with basic auth scheme

        Parameters:
            - request: typing.Any.

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import AsyncSeedBasicAuthEnvironmentVariables

        client = AsyncSeedBasicAuthEnvironmentVariables(
            username="YOUR_USERNAME",
            password="YOUR_PASSWORD",
            base_url="https://yourhost.com/path/to/api",
        )
        await client.basic_auth.post_with_basic_auth(
            request={"key": "value"},
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            method="POST",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "basic-auth"),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            json=jsonable_encoder(request)
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.get("additional_headers", {}) if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(bool, _response.json())  # type: ignore
        if _response.status_code == 401:
            raise UnauthorizedRequest(
                pydantic_v1.parse_obj_as(UnauthorizedRequestErrorBody, _response.json())  # type: ignore
            )
        if _response.status_code == 400:
            raise BadRequest()
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
