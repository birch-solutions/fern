# This file was auto-generated by Fern from our API Definition.

import typing
from ..core.client_wrapper import SyncClientWrapper
from ..core.request_options import RequestOptions
from ..core.pydantic_utilities import parse_obj_as
from ..errors.errors.unauthorized_request import UnauthorizedRequest
from ..errors.types.unauthorized_request_error_body import UnauthorizedRequestErrorBody
from json.decoder import JSONDecodeError
from ..core.api_error import ApiError
from ..errors.errors.bad_request import BadRequest
from ..core.client_wrapper import AsyncClientWrapper

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class CustomAuthClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_with_custom_auth(
        self, *, request_options: typing.Optional[RequestOptions] = None
    ) -> bool:
        """
        GET request with custom auth scheme

        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        bool

        Examples
        --------
        from seed import SeedCustomAuth

        client = SeedCustomAuth(
            custom_auth_scheme="YOUR_CUSTOM_AUTH_SCHEME",
            base_url="https://yourhost.com/path/to/api",
        )
        client.custom_auth.get_with_custom_auth()
        """
        _response = self._client_wrapper.httpx_client.request(
            "custom-auth",
            method="GET",
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    bool, parse_obj_as(type_=bool, object_=_response.json())
                )  # type: ignore
            if _response.status_code == 401:
                raise UnauthorizedRequest(
                    typing.cast(
                        UnauthorizedRequestErrorBody,
                        parse_obj_as(
                            type_=UnauthorizedRequestErrorBody, object_=_response.json()
                        ),
                    )  # type: ignore
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def post_with_custom_auth(
        self,
        *,
        request: typing.Optional[typing.Any] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> bool:
        """
        POST request with custom auth scheme

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
        from seed import SeedCustomAuth

        client = SeedCustomAuth(
            custom_auth_scheme="YOUR_CUSTOM_AUTH_SCHEME",
            base_url="https://yourhost.com/path/to/api",
        )
        client.custom_auth.post_with_custom_auth(
            request={"key": "value"},
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "custom-auth",
            method="POST",
            json=request,
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    bool, parse_obj_as(type_=bool, object_=_response.json())
                )  # type: ignore
            if _response.status_code == 401:
                raise UnauthorizedRequest(
                    typing.cast(
                        UnauthorizedRequestErrorBody,
                        parse_obj_as(
                            type_=UnauthorizedRequestErrorBody, object_=_response.json()
                        ),
                    )  # type: ignore
                )
            if _response.status_code == 400:
                raise BadRequest()
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncCustomAuthClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_with_custom_auth(
        self, *, request_options: typing.Optional[RequestOptions] = None
    ) -> bool:
        """
        GET request with custom auth scheme

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

        from seed import AsyncSeedCustomAuth

        client = AsyncSeedCustomAuth(
            custom_auth_scheme="YOUR_CUSTOM_AUTH_SCHEME",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.custom_auth.get_with_custom_auth()


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "custom-auth",
            method="GET",
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    bool, parse_obj_as(type_=bool, object_=_response.json())
                )  # type: ignore
            if _response.status_code == 401:
                raise UnauthorizedRequest(
                    typing.cast(
                        UnauthorizedRequestErrorBody,
                        parse_obj_as(
                            type_=UnauthorizedRequestErrorBody, object_=_response.json()
                        ),
                    )  # type: ignore
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def post_with_custom_auth(
        self,
        *,
        request: typing.Optional[typing.Any] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> bool:
        """
        POST request with custom auth scheme

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

        from seed import AsyncSeedCustomAuth

        client = AsyncSeedCustomAuth(
            custom_auth_scheme="YOUR_CUSTOM_AUTH_SCHEME",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.custom_auth.post_with_custom_auth(
                request={"key": "value"},
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "custom-auth",
            method="POST",
            json=request,
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    bool, parse_obj_as(type_=bool, object_=_response.json())
                )  # type: ignore
            if _response.status_code == 401:
                raise UnauthorizedRequest(
                    typing.cast(
                        UnauthorizedRequestErrorBody,
                        parse_obj_as(
                            type_=UnauthorizedRequestErrorBody, object_=_response.json()
                        ),
                    )  # type: ignore
                )
            if _response.status_code == 400:
                raise BadRequest()
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
