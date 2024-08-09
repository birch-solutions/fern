# This file was auto-generated by Fern from our API Definition.

from ..core.client_wrapper import SyncClientWrapper
import typing
from ..core.request_options import RequestOptions
from .types.resource import Resource
from ..core.jsonable_encoder import jsonable_encoder
from ..core.pydantic_utilities import parse_obj_as
from json.decoder import JSONDecodeError
from ..core.api_error import ApiError
import datetime as dt
from ..core.client_wrapper import AsyncClientWrapper


class ServiceClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_resource(self, resource_id: str, *, request_options: typing.Optional[RequestOptions] = None) -> Resource:
        """
        Parameters
        ----------
        resource_id : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        Resource

        Examples
        --------
        from seed import SeedMixedCase

        client = SeedMixedCase(
            base_url="https://yourhost.com/path/to/api",
        )
        client.service.get_resource(
            resource_id="rsc-xyz",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            f"resource/{jsonable_encoder(resource_id)}",
            method="GET",
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    Resource,
                    parse_obj_as(
                        type_=Resource,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def list_resources(
        self, *, page_limit: int, before_date: dt.date, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.List[Resource]:
        """
        Parameters
        ----------
        page_limit : int

        before_date : dt.date

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        typing.List[Resource]

        Examples
        --------
        import datetime

        from seed import SeedMixedCase

        client = SeedMixedCase(
            base_url="https://yourhost.com/path/to/api",
        )
        client.service.list_resources(
            page_limit=10,
            before_date=datetime.date.fromisoformat(
                "2023-01-01",
            ),
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "resource",
            method="GET",
            params={
                "page_limit": page_limit,
                "beforeDate": str(before_date),
            },
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    typing.List[Resource],
                    parse_obj_as(
                        type_=typing.List[Resource],  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncServiceClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_resource(
        self, resource_id: str, *, request_options: typing.Optional[RequestOptions] = None
    ) -> Resource:
        """
        Parameters
        ----------
        resource_id : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        Resource

        Examples
        --------
        import asyncio

        from seed import AsyncSeedMixedCase

        client = AsyncSeedMixedCase(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.service.get_resource(
                resource_id="rsc-xyz",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            f"resource/{jsonable_encoder(resource_id)}",
            method="GET",
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    Resource,
                    parse_obj_as(
                        type_=Resource,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def list_resources(
        self, *, page_limit: int, before_date: dt.date, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.List[Resource]:
        """
        Parameters
        ----------
        page_limit : int

        before_date : dt.date

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        typing.List[Resource]

        Examples
        --------
        import asyncio
        import datetime

        from seed import AsyncSeedMixedCase

        client = AsyncSeedMixedCase(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.service.list_resources(
                page_limit=10,
                before_date=datetime.date.fromisoformat(
                    "2023-01-01",
                ),
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "resource",
            method="GET",
            params={
                "page_limit": page_limit,
                "beforeDate": str(before_date),
            },
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    typing.List[Resource],
                    parse_obj_as(
                        type_=typing.List[Resource],  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
