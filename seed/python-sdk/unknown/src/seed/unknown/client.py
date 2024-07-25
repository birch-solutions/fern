# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.pydantic_utilities import parse_obj_as
from ..core.request_options import RequestOptions

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class UnknownClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def post(
        self, *, request: typing.Any, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.List[typing.Any]:
        """
        Parameters
        ----------
        request : typing.Any

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        typing.List[typing.Any]

        Examples
        --------
        from seed import SeedUnknownAsAny

        client = SeedUnknownAsAny(
            base_url="https://yourhost.com/path/to/api",
        )
        client.unknown.post(
            request={"key": "value"},
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            method="POST", json=request, request_options=request_options, omit=OMIT
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(typing.List[typing.Any], parse_obj_as(type_=typing.List[typing.Any], object_=_response.json()))  # type: ignore
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
        Parameters
        ----------
        request : typing.Any

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        typing.List[typing.Any]

        Examples
        --------
        import asyncio

        from seed import AsyncSeedUnknownAsAny

        client = AsyncSeedUnknownAsAny(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.unknown.post(
                request={"key": "value"},
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            method="POST", json=request, request_options=request_options, omit=OMIT
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(typing.List[typing.Any], parse_obj_as(type_=typing.List[typing.Any], object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
