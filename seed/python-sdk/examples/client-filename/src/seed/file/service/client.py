# This file was auto-generated by Fern from our API Definition.

import typing
import urllib.parse
from json.decoder import JSONDecodeError

from ...core.api_error import ApiError
from ...core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ...core.jsonable_encoder import jsonable_encoder
from ...core.pydantic_utilities import pydantic_v1
from ...core.remove_none_from_dict import remove_none_from_dict
from ...core.request_options import RequestOptions
from ...types.errors.not_found_error import NotFoundError
from ...types.types.file import File


class ServiceClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_file(
        self, filename: str, *, x_file_api_version: str, request_options: typing.Optional[RequestOptions] = None
    ) -> File:
        """
        This endpoint returns a file by its name.

        Parameters
        ----------
        filename : str
            This is a filename

        x_file_api_version : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        File
        Examples
        --------
        from seed.client import SeedExhaustive
        from seed.environment import SeedExhaustiveEnvironment

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            environment=SeedExhaustiveEnvironment.PRODUCTION,
        )
        client.file.service.get_file(
            filename="file.txt",
            x_file_api_version="0.0.2",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            method="GET",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", f"file/{jsonable_encoder(filename)}"),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        "X-File-API-Version": str(x_file_api_version) if x_file_api_version is not None else None,
                        **(request_options.get("additional_headers", {}) if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(File, _response.json())  # type: ignore
        if _response.status_code == 404:
            raise NotFoundError(pydantic_v1.parse_obj_as(str, _response.json()))  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncServiceClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_file(
        self, filename: str, *, x_file_api_version: str, request_options: typing.Optional[RequestOptions] = None
    ) -> File:
        """
        This endpoint returns a file by its name.

        Parameters
        ----------
        filename : str
            This is a filename

        x_file_api_version : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        File
        Examples
        --------
        from seed.client import AsyncSeedExhaustive
        from seed.environment import SeedExhaustiveEnvironment

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            environment=SeedExhaustiveEnvironment.PRODUCTION,
        )
        await client.file.service.get_file(
            filename="file.txt",
            x_file_api_version="0.0.2",
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            method="GET",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", f"file/{jsonable_encoder(filename)}"),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        "X-File-API-Version": str(x_file_api_version) if x_file_api_version is not None else None,
                        **(request_options.get("additional_headers", {}) if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.get("timeout_in_seconds")
            if request_options is not None and request_options.get("timeout_in_seconds") is not None
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        if 200 <= _response.status_code < 300:
            return pydantic_v1.parse_obj_as(File, _response.json())  # type: ignore
        if _response.status_code == 404:
            raise NotFoundError(pydantic_v1.parse_obj_as(str, _response.json()))  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
