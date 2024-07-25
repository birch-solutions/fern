# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.jsonable_encoder import jsonable_encoder
from ..core.pydantic_utilities import parse_obj_as
from ..core.request_options import RequestOptions
from .types.shape import Shape

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class UnionClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get(self, id: str, *, request_options: typing.Optional[RequestOptions] = None) -> Shape:
        """
        Parameters
        ----------
        id : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        Shape

        Examples
        --------
        from seed import SeedUnions

        client = SeedUnions(
            base_url="https://yourhost.com/path/to/api",
        )
        client.union.get(
            id="string",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            f"{jsonable_encoder(id)}", method="GET", request_options=request_options
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(Shape, parse_obj_as(type_=Shape, object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def update(self, *, request: Shape, request_options: typing.Optional[RequestOptions] = None) -> bool:
        """
        Parameters
        ----------
        request : Shape

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        bool

        Examples
        --------
        from seed import SeedUnions
        from seed.union.types import Shape_Circle

        client = SeedUnions(
            base_url="https://yourhost.com/path/to/api",
        )
        client.union.update(
            request=Shape_Circle(
                id="string",
                radius=1.1,
            ),
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            method="PATCH", json=request, request_options=request_options, omit=OMIT
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(bool, parse_obj_as(type_=bool, object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncUnionClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get(self, id: str, *, request_options: typing.Optional[RequestOptions] = None) -> Shape:
        """
        Parameters
        ----------
        id : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        Shape

        Examples
        --------
        import asyncio

        from seed import AsyncSeedUnions

        client = AsyncSeedUnions(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.union.get(
                id="string",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            f"{jsonable_encoder(id)}", method="GET", request_options=request_options
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(Shape, parse_obj_as(type_=Shape, object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def update(self, *, request: Shape, request_options: typing.Optional[RequestOptions] = None) -> bool:
        """
        Parameters
        ----------
        request : Shape

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        bool

        Examples
        --------
        import asyncio

        from seed import AsyncSeedUnions
        from seed.union.types import Shape_Circle

        client = AsyncSeedUnions(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.union.update(
                request=Shape_Circle(
                    id="string",
                    radius=1.1,
                ),
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            method="PATCH", json=request, request_options=request_options, omit=OMIT
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(bool, parse_obj_as(type_=bool, object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
