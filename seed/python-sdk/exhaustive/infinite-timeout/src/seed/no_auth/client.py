# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.pydantic_utilities import parse_obj_as
from ..core.request_options import RequestOptions
from ..general_errors.errors.bad_request_body import BadRequestBody
from ..general_errors.types.bad_object_request_info import BadObjectRequestInfo

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class NoAuthClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def post_with_no_auth(
        self, *, request: typing.Optional[typing.Any] = None, request_options: typing.Optional[RequestOptions] = None
    ) -> bool:
        """
        POST request with no auth

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
        from seed import SeedExhaustive

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.no_auth.post_with_no_auth(
            request={"key": "value"},
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "no-auth", method="POST", json=request, request_options=request_options, omit=OMIT
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(bool, parse_obj_as(type_=bool, object_=_response.json()))  # type: ignore
            if _response.status_code == 400:
                raise BadRequestBody(
                    typing.cast(BadObjectRequestInfo, parse_obj_as(type_=BadObjectRequestInfo, object_=_response.json()))  # type: ignore
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncNoAuthClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def post_with_no_auth(
        self, *, request: typing.Optional[typing.Any] = None, request_options: typing.Optional[RequestOptions] = None
    ) -> bool:
        """
        POST request with no auth

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

        from seed import AsyncSeedExhaustive

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.no_auth.post_with_no_auth(
                request={"key": "value"},
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "no-auth", method="POST", json=request, request_options=request_options, omit=OMIT
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(bool, parse_obj_as(type_=bool, object_=_response.json()))  # type: ignore
            if _response.status_code == 400:
                raise BadRequestBody(
                    typing.cast(BadObjectRequestInfo, parse_obj_as(type_=BadObjectRequestInfo, object_=_response.json()))  # type: ignore
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
