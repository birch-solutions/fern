# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.jsonable_encoder import jsonable_encoder
from ..core.pydantic_utilities import pydantic_v1
from ..core.request_options import RequestOptions
from .types.resource import Resource


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
        from seed.client import SeedMixedCase

        client = SeedMixedCase(
            base_url="https://yourhost.com/path/to/api",
        )
        client.service.get_resource(
            resource_id="rsc-xyz",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            f"resource/{jsonable_encoder(resource_id)}", method="GET", request_options=request_options
        )
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(Resource, _response.json())  # type: ignore
        try:
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

        from seed.client import SeedMixedCase

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
            params={"page_limit": page_limit, "beforeDate": str(before_date)},
            request_options=request_options,
        )
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(typing.List[Resource], _response.json())  # type: ignore
        try:
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
        from seed.client import AsyncSeedMixedCase

        client = AsyncSeedMixedCase(
            base_url="https://yourhost.com/path/to/api",
        )
        await client.service.get_resource(
            resource_id="rsc-xyz",
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            f"resource/{jsonable_encoder(resource_id)}", method="GET", request_options=request_options
        )
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(Resource, _response.json())  # type: ignore
        try:
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
        import datetime

        from seed.client import AsyncSeedMixedCase

        client = AsyncSeedMixedCase(
            base_url="https://yourhost.com/path/to/api",
        )
        await client.service.list_resources(
            page_limit=10,
            before_date=datetime.date.fromisoformat(
                "2023-01-01",
            ),
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            "resource",
            method="GET",
            params={"page_limit": page_limit, "beforeDate": str(before_date)},
            request_options=request_options,
        )
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(typing.List[Resource], _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
