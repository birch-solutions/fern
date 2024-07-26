# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ...core.api_error import ApiError
from ...core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ...core.jsonable_encoder import jsonable_encoder
from ...core.pydantic_utilities import parse_obj_as
from ...core.request_options import RequestOptions

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class ParamsClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_with_path(self, param: str, *, request_options: typing.Optional[RequestOptions] = None) -> str:
        """
        GET with path param

        Parameters
        ----------
        param : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        str

        Examples
        --------
        from seed import SeedExhaustive

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.endpoints.params.get_with_path(
            param="string",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            f"params/path/{jsonable_encoder(param)}", method="GET", request_options=request_options
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(str, parse_obj_as(type_=str, object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_with_query(
        self, *, query: str, number: int, request_options: typing.Optional[RequestOptions] = None
    ) -> None:
        """
        GET with query param

        Parameters
        ----------
        query : str

        number : int

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        from seed import SeedExhaustive

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.endpoints.params.get_with_query(
            query="string",
            number=1,
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "params", method="GET", params={"query": query, "number": number}, request_options=request_options
        )
        try:
            if 200 <= _response.status_code < 300:
                return
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_with_allow_multiple_query(
        self,
        *,
        query: typing.Union[str, typing.Sequence[str]],
        numer: typing.Union[int, typing.Sequence[int]],
        request_options: typing.Optional[RequestOptions] = None,
    ) -> None:
        """
        GET with multiple of same query param

        Parameters
        ----------
        query : typing.Union[str, typing.Sequence[str]]

        numer : typing.Union[int, typing.Sequence[int]]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        from seed import SeedExhaustive

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.endpoints.params.get_with_allow_multiple_query(
            query="string",
            numer=1,
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "params", method="GET", params={"query": query, "numer": numer}, request_options=request_options
        )
        try:
            if 200 <= _response.status_code < 300:
                return
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_with_path_and_query(
        self, param: str, *, query: str, request_options: typing.Optional[RequestOptions] = None
    ) -> None:
        """
        GET with path and query params

        Parameters
        ----------
        param : str

        query : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        from seed import SeedExhaustive

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.endpoints.params.get_with_path_and_query(
            param="string",
            query="string",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            f"params/path-query/{jsonable_encoder(param)}",
            method="GET",
            params={"query": query},
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def modify_with_path(
        self, param: str, *, request: str, request_options: typing.Optional[RequestOptions] = None
    ) -> str:
        """
        PUT to update with path param

        Parameters
        ----------
        param : str

        request : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        str

        Examples
        --------
        from seed import SeedExhaustive

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.endpoints.params.modify_with_path(
            param="string",
            request="string",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            f"params/path/{jsonable_encoder(param)}",
            method="PUT",
            json=request,
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(str, parse_obj_as(type_=str, object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncParamsClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_with_path(self, param: str, *, request_options: typing.Optional[RequestOptions] = None) -> str:
        """
        GET with path param

        Parameters
        ----------
        param : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        str

        Examples
        --------
        import asyncio

        from seed import AsyncSeedExhaustive

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.endpoints.params.get_with_path(
                param="string",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            f"params/path/{jsonable_encoder(param)}", method="GET", request_options=request_options
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(str, parse_obj_as(type_=str, object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_with_query(
        self, *, query: str, number: int, request_options: typing.Optional[RequestOptions] = None
    ) -> None:
        """
        GET with query param

        Parameters
        ----------
        query : str

        number : int

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        import asyncio

        from seed import AsyncSeedExhaustive

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.endpoints.params.get_with_query(
                query="string",
                number=1,
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "params", method="GET", params={"query": query, "number": number}, request_options=request_options
        )
        try:
            if 200 <= _response.status_code < 300:
                return
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_with_allow_multiple_query(
        self,
        *,
        query: typing.Union[str, typing.Sequence[str]],
        numer: typing.Union[int, typing.Sequence[int]],
        request_options: typing.Optional[RequestOptions] = None,
    ) -> None:
        """
        GET with multiple of same query param

        Parameters
        ----------
        query : typing.Union[str, typing.Sequence[str]]

        numer : typing.Union[int, typing.Sequence[int]]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        import asyncio

        from seed import AsyncSeedExhaustive

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.endpoints.params.get_with_allow_multiple_query(
                query="string",
                numer=1,
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "params", method="GET", params={"query": query, "numer": numer}, request_options=request_options
        )
        try:
            if 200 <= _response.status_code < 300:
                return
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_with_path_and_query(
        self, param: str, *, query: str, request_options: typing.Optional[RequestOptions] = None
    ) -> None:
        """
        GET with path and query params

        Parameters
        ----------
        param : str

        query : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        import asyncio

        from seed import AsyncSeedExhaustive

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.endpoints.params.get_with_path_and_query(
                param="string",
                query="string",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            f"params/path-query/{jsonable_encoder(param)}",
            method="GET",
            params={"query": query},
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def modify_with_path(
        self, param: str, *, request: str, request_options: typing.Optional[RequestOptions] = None
    ) -> str:
        """
        PUT to update with path param

        Parameters
        ----------
        param : str

        request : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        str

        Examples
        --------
        import asyncio

        from seed import AsyncSeedExhaustive

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.endpoints.params.modify_with_path(
                param="string",
                request="string",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            f"params/path/{jsonable_encoder(param)}",
            method="PUT",
            json=request,
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(str, parse_obj_as(type_=str, object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
