# This file was auto-generated by Fern from our API Definition.

import typing
import urllib.parse
from json.decoder import JSONDecodeError

from ...core.api_error import ApiError
from ...core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ...core.jsonable_encoder import jsonable_encoder
from ...core.remove_none_from_dict import remove_none_from_dict
from ...core.request_options import RequestOptions
from ..types.types.metadata import Metadata
from ..types.types.movie import Movie
from ..types.types.movie_id import MovieId

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class ServiceClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_movie(self, movie_id: MovieId, *, request_options: typing.Optional[RequestOptions] = None) -> Movie:
        """
        Parameters:
            - movie_id: MovieId.

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        ---
        from seed.client import SeedExamples
        from seed.environment import SeedExamplesEnvironment

        client = SeedExamples(
            token="YOUR_TOKEN",
            environment=SeedExamplesEnvironment.PRODUCTION,
        )
        client.service.get_movie(
            movie_id="movie-c06a4ad7",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "GET",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", f"movie/{movie_id}"),
            params=request_options.additional_query_parameters if request_options is not None else None,
            headers=remove_none_from_dict(
                {
                    **self._client_wrapper.get_headers(),
                    **(request_options.additional_headers if request_options is not None else {}),
                }
            ),
            timeout=request_options.timeout_in_seconds if request_options.timeout_in_seconds is not None else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(Movie, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def create_movie(self, *, request: Movie, request_options: typing.Optional[RequestOptions] = None) -> MovieId:
        """
        Parameters:
            - request: Movie.

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        ---
        from seed import Movie
        from seed.client import SeedExamples
        from seed.environment import SeedExamplesEnvironment

        client = SeedExamples(
            token="YOUR_TOKEN",
            environment=SeedExamplesEnvironment.PRODUCTION,
        )
        client.service.create_movie(
            request=Movie(
                id="movie-c06a4ad7",
                title="The Boy and the Heron",
                from_="Hayao Miyazaki",
                rating=8.0,
                type="movie",
                tag="tag-wf9as23d",
            ),
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "movie"),
            params=request_options.additional_query_parameters if request_options is not None else None,
            json=jsonable_encoder(request),
            headers=remove_none_from_dict(
                {
                    **self._client_wrapper.get_headers(),
                    **(request_options.additional_headers if request_options is not None else {}),
                }
            ),
            timeout=request_options.timeout_in_seconds if request_options.timeout_in_seconds is not None else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(MovieId, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_metadata(
        self,
        *,
        shallow: typing.Optional[bool] = None,
        tag: typing.Optional[typing.Union[str, typing.List[str]]] = None,
        x_api_version: str,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> Metadata:
        """
        Parameters:
            - shallow: typing.Optional[bool].

            - tag: typing.Optional[typing.Union[str, typing.List[str]]].

            - x_api_version: str.

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        ---
        from seed.client import SeedExamples
        from seed.environment import SeedExamplesEnvironment

        client = SeedExamples(
            token="YOUR_TOKEN",
            environment=SeedExamplesEnvironment.PRODUCTION,
        )
        client.service.get_metadata(
            x_api_version="0.0.1",
            shallow=False,
            tag="development",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "GET",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "metadata"),
            params=remove_none_from_dict(
                {
                    "shallow": shallow,
                    "tag": tag,
                    **(request_options.additional_query_parameters if request_options is not None else None),
                }
            ),
            headers=remove_none_from_dict(
                {
                    **self._client_wrapper.get_headers(),
                    "X-API-Version": x_api_version,
                    **(request_options.additional_headers if request_options is not None else {}),
                }
            ),
            timeout=request_options.timeout_in_seconds if request_options.timeout_in_seconds is not None else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(Metadata, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncServiceClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_movie(self, movie_id: MovieId, *, request_options: typing.Optional[RequestOptions] = None) -> Movie:
        """
        Parameters:
            - movie_id: MovieId.

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        ---
        from seed.client import AsyncSeedExamples
        from seed.environment import SeedExamplesEnvironment

        client = AsyncSeedExamples(
            token="YOUR_TOKEN",
            environment=SeedExamplesEnvironment.PRODUCTION,
        )
        await client.service.get_movie(
            movie_id="movie-c06a4ad7",
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            "GET",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", f"movie/{movie_id}"),
            params=request_options.additional_query_parameters if request_options is not None else None,
            headers=remove_none_from_dict(
                {
                    **self._client_wrapper.get_headers(),
                    **(request_options.additional_headers if request_options is not None else {}),
                }
            ),
            timeout=request_options.timeout_in_seconds if request_options.timeout_in_seconds is not None else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(Movie, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def create_movie(self, *, request: Movie, request_options: typing.Optional[RequestOptions] = None) -> MovieId:
        """
        Parameters:
            - request: Movie.

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        ---
        from seed import Movie
        from seed.client import AsyncSeedExamples
        from seed.environment import SeedExamplesEnvironment

        client = AsyncSeedExamples(
            token="YOUR_TOKEN",
            environment=SeedExamplesEnvironment.PRODUCTION,
        )
        await client.service.create_movie(
            request=Movie(
                id="movie-c06a4ad7",
                title="The Boy and the Heron",
                from_="Hayao Miyazaki",
                rating=8.0,
                type="movie",
                tag="tag-wf9as23d",
            ),
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "movie"),
            params=request_options.additional_query_parameters if request_options is not None else None,
            json=jsonable_encoder(request),
            headers=remove_none_from_dict(
                {
                    **self._client_wrapper.get_headers(),
                    **(request_options.additional_headers if request_options is not None else {}),
                }
            ),
            timeout=request_options.timeout_in_seconds if request_options.timeout_in_seconds is not None else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(MovieId, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_metadata(
        self,
        *,
        shallow: typing.Optional[bool] = None,
        tag: typing.Optional[typing.Union[str, typing.List[str]]] = None,
        x_api_version: str,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> Metadata:
        """
        Parameters:
            - shallow: typing.Optional[bool].

            - tag: typing.Optional[typing.Union[str, typing.List[str]]].

            - x_api_version: str.

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        ---
        from seed.client import AsyncSeedExamples
        from seed.environment import SeedExamplesEnvironment

        client = AsyncSeedExamples(
            token="YOUR_TOKEN",
            environment=SeedExamplesEnvironment.PRODUCTION,
        )
        await client.service.get_metadata(
            x_api_version="0.0.1",
            shallow=False,
            tag="development",
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            "GET",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "metadata"),
            params=remove_none_from_dict(
                {
                    "shallow": shallow,
                    "tag": tag,
                    **(request_options.additional_query_parameters if request_options is not None else None),
                }
            ),
            headers=remove_none_from_dict(
                {
                    **self._client_wrapper.get_headers(),
                    "X-API-Version": x_api_version,
                    **(request_options.additional_headers if request_options is not None else {}),
                }
            ),
            timeout=request_options.timeout_in_seconds if request_options.timeout_in_seconds is not None else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(Metadata, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
