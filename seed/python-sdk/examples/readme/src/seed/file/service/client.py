# This file was auto-generated by Fern from our API Definition.

from ...core.client_wrapper import SyncClientWrapper
import typing
from ...core.request_options import RequestOptions
from ...types.types.file import File
from ...core.jsonable_encoder import jsonable_encoder
from ...core.pydantic_utilities import parse_obj_as
from ...types.errors.not_found_error import NotFoundError
from json.decoder import JSONDecodeError
from ...core.api_error import ApiError
from ...core.client_wrapper import AsyncClientWrapper


class ServiceClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_file(
        self,
        filename: str,
        *,
        x_file_api_version: str,
        request_options: typing.Optional[RequestOptions] = None,
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
        from seed import SeedExamples
        from seed.environment import SeedExamplesEnvironment

        client = SeedExamples(
            token="YOUR_TOKEN",
            environment=SeedExamplesEnvironment.PRODUCTION,
        )
        client.file.service.get_file(
            filename="file.txt",
            x_file_api_version="0.0.2",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            f"file/{jsonable_encoder(filename)}",
            method="GET",
            headers={
                "X-File-API-Version": str(x_file_api_version)
                if x_file_api_version is not None
                else None,
            },
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    File,
                    parse_obj_as(
                        type_=File,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            if _response.status_code == 404:
                raise NotFoundError(
                    typing.cast(
                        str,
                        parse_obj_as(
                            type_=str,  # type: ignore
                            object_=_response.json(),
                        ),
                    )
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncServiceClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_file(
        self,
        filename: str,
        *,
        x_file_api_version: str,
        request_options: typing.Optional[RequestOptions] = None,
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
        import asyncio

        from seed import AsyncSeedExamples
        from seed.environment import SeedExamplesEnvironment

        client = AsyncSeedExamples(
            token="YOUR_TOKEN",
            environment=SeedExamplesEnvironment.PRODUCTION,
        )


        async def main() -> None:
            await client.file.service.get_file(
                filename="file.txt",
                x_file_api_version="0.0.2",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            f"file/{jsonable_encoder(filename)}",
            method="GET",
            headers={
                "X-File-API-Version": str(x_file_api_version)
                if x_file_api_version is not None
                else None,
            },
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    File,
                    parse_obj_as(
                        type_=File,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            if _response.status_code == 404:
                raise NotFoundError(
                    typing.cast(
                        str,
                        parse_obj_as(
                            type_=str,  # type: ignore
                            object_=_response.json(),
                        ),
                    )
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
