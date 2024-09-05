# This file was auto-generated by Fern from our API Definition.

import typing
from ...core.client_wrapper import SyncClientWrapper
from ...types.union.types.animal import Animal
from ...core.request_options import RequestOptions
from ...core.unchecked_base_model import construct_type
from json.decoder import JSONDecodeError
from ...core.api_error import ApiError
from ...core.client_wrapper import AsyncClientWrapper

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class UnionClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_and_return_union(
        self, *, request: Animal, request_options: typing.Optional[RequestOptions] = None
    ) -> Animal:
        """
        Parameters
        ----------
        request : Animal

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        Animal

        Examples
        --------
        from seed import SeedExhaustive
        from seed.types.union import Animal_Dog

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.endpoints.union.get_and_return_union(
            request=Animal_Dog(
                name="string",
                likes_to_woof=True,
            ),
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "union",
            method="POST",
            json=request,
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    Animal,
                    construct_type(
                        type_=Animal,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncUnionClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_and_return_union(
        self, *, request: Animal, request_options: typing.Optional[RequestOptions] = None
    ) -> Animal:
        """
        Parameters
        ----------
        request : Animal

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        Animal

        Examples
        --------
        import asyncio

        from seed import AsyncSeedExhaustive
        from seed.types.union import Animal_Dog

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.endpoints.union.get_and_return_union(
                request=Animal_Dog(
                    name="string",
                    likes_to_woof=True,
                ),
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "union",
            method="POST",
            json=request,
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    Animal,
                    construct_type(
                        type_=Animal,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
