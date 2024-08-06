# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.pydantic_utilities import parse_obj_as
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

        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        bool

        Examples
        --------
        from seed import SeedBasicAuthEnvironmentVariables

        client = SeedBasicAuthEnvironmentVariables(
            username="YOUR_USERNAME",
            password="YOUR_PASSWORD",
            base_url="https://yourhost.com/path/to/api",
        )
        client.basic_auth.get_with_basic_auth()
        """
        _response = self._client_wrapper.httpx_client.request(
            "basic-auth", method="GET", request_options=request_options
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(bool, parse_obj_as(type_=bool, object_=_response.json()))  # type: ignore
            if _response.status_code == 401:
                raise UnauthorizedRequest(
                    typing.cast(UnauthorizedRequestErrorBody, parse_obj_as(type_=UnauthorizedRequestErrorBody, object_=_response.json()))  # type: ignore
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def post_with_basic_auth(
        self, *, request: typing.Optional[typing.Any] = None, request_options: typing.Optional[RequestOptions] = None
    ) -> bool:
        """
        POST request with basic auth scheme

        Parameters
        ----------
        request : typing.Optional[typing.Any]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        bool

        Examples
        --------
        from seed import SeedBasicAuthEnvironmentVariables

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
            "basic-auth", method="POST", json=request, request_options=request_options, omit=OMIT
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(bool, parse_obj_as(type_=bool, object_=_response.json()))  # type: ignore
            if _response.status_code == 401:
                raise UnauthorizedRequest(
                    typing.cast(UnauthorizedRequestErrorBody, parse_obj_as(type_=UnauthorizedRequestErrorBody, object_=_response.json()))  # type: ignore
                )
            if _response.status_code == 400:
                raise BadRequest()
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

        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        bool

        Examples
        --------
        import asyncio

        from seed import AsyncSeedBasicAuthEnvironmentVariables

        client = AsyncSeedBasicAuthEnvironmentVariables(
            username="YOUR_USERNAME",
            password="YOUR_PASSWORD",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.basic_auth.get_with_basic_auth()


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "basic-auth", method="GET", request_options=request_options
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(bool, parse_obj_as(type_=bool, object_=_response.json()))  # type: ignore
            if _response.status_code == 401:
                raise UnauthorizedRequest(
                    typing.cast(UnauthorizedRequestErrorBody, parse_obj_as(type_=UnauthorizedRequestErrorBody, object_=_response.json()))  # type: ignore
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def post_with_basic_auth(
        self, *, request: typing.Optional[typing.Any] = None, request_options: typing.Optional[RequestOptions] = None
    ) -> bool:
        """
        POST request with basic auth scheme

        Parameters
        ----------
        request : typing.Optional[typing.Any]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        bool

        Examples
        --------
        import asyncio

        from seed import AsyncSeedBasicAuthEnvironmentVariables

        client = AsyncSeedBasicAuthEnvironmentVariables(
            username="YOUR_USERNAME",
            password="YOUR_PASSWORD",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.basic_auth.post_with_basic_auth(
                request={"key": "value"},
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "basic-auth", method="POST", json=request, request_options=request_options, omit=OMIT
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(bool, parse_obj_as(type_=bool, object_=_response.json()))  # type: ignore
            if _response.status_code == 401:
                raise UnauthorizedRequest(
                    typing.cast(UnauthorizedRequestErrorBody, parse_obj_as(type_=UnauthorizedRequestErrorBody, object_=_response.json()))  # type: ignore
                )
            if _response.status_code == 400:
                raise BadRequest()
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
