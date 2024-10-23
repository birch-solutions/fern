# This file was auto-generated by Fern from our API Definition.

from ...core.client_wrapper import SyncClientWrapper
from .metadata.client import MetadataClient
import typing
from ...core.request_options import RequestOptions
from .types.event import Event
from ...core.pydantic_utilities import parse_obj_as
from json.decoder import JSONDecodeError
from ...core.api_error import ApiError
from ...core.client_wrapper import AsyncClientWrapper
from .metadata.client import AsyncMetadataClient


class EventsClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper
        self.metadata = MetadataClient(client_wrapper=self._client_wrapper)

    def list_events(
        self, *, limit: typing.Optional[int] = None, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.List[Event]:
        """
        List all user events.

        Parameters
        ----------
        limit : typing.Optional[int]
            The maximum number of results to return.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        typing.List[Event]

        Examples
        --------
        from seed import SeedMixedFileDirectory

        client = SeedMixedFileDirectory(
            base_url="https://yourhost.com/path/to/api",
        )
        client.user.events.list_events()
        """
        _response = self._client_wrapper.httpx_client.request(
            "users/events/",
            method="GET",
            params={
                "limit": limit,
            },
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    typing.List[Event],
                    parse_obj_as(
                        type_=typing.List[Event],  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncEventsClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper
        self.metadata = AsyncMetadataClient(client_wrapper=self._client_wrapper)

    async def list_events(
        self, *, limit: typing.Optional[int] = None, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.List[Event]:
        """
        List all user events.

        Parameters
        ----------
        limit : typing.Optional[int]
            The maximum number of results to return.

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        typing.List[Event]

        Examples
        --------
        import asyncio

        from seed import AsyncSeedMixedFileDirectory

        client = AsyncSeedMixedFileDirectory(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.user.events.list_events()


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "users/events/",
            method="GET",
            params={
                "limit": limit,
            },
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    typing.List[Event],
                    parse_obj_as(
                        type_=typing.List[Event],  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
