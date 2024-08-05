# This file was auto-generated by Fern from our API Definition.

from ..core.client_wrapper import SyncClientWrapper
import typing
from ..core.request_options import RequestOptions
from ..core.pydantic_utilities import parse_obj_as
from json.decoder import JSONDecodeError
from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper


class DummyClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_dummy(
        self, *, request_options: typing.Optional[RequestOptions] = None
    ) -> str:
        """
        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        str

        Examples
        --------
        from seed import SeedSingleUrlEnvironmentNoDefault
        from seed.environment import SeedSingleUrlEnvironmentNoDefaultEnvironment

        client = SeedSingleUrlEnvironmentNoDefault(
            token="YOUR_TOKEN",
            environment=SeedSingleUrlEnvironmentNoDefaultEnvironment.PRODUCTION,
        )
        client.dummy.get_dummy()
        """
        _response = self._client_wrapper.httpx_client.request(
            "dummy",
            method="GET",
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    str, parse_obj_as(type_=str, object_=_response.json())
                )  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncDummyClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_dummy(
        self, *, request_options: typing.Optional[RequestOptions] = None
    ) -> str:
        """
        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        str

        Examples
        --------
        import asyncio

        from seed import AsyncSeedSingleUrlEnvironmentNoDefault
        from seed.environment import SeedSingleUrlEnvironmentNoDefaultEnvironment

        client = AsyncSeedSingleUrlEnvironmentNoDefault(
            token="YOUR_TOKEN",
            environment=SeedSingleUrlEnvironmentNoDefaultEnvironment.PRODUCTION,
        )


        async def main() -> None:
            await client.dummy.get_dummy()


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "dummy",
            method="GET",
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    str, parse_obj_as(type_=str, object_=_response.json())
                )  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
