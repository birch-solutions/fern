# This file was auto-generated by Fern from our API Definition.

import typing
import urllib.parse
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.jsonable_encoder import jsonable_encoder
from ..core.pydantic_utilities import pydantic_v1
from ..core.remove_none_from_dict import remove_none_from_dict
from ..core.request_options import RequestOptions
from ..types.types.metadata import Metadata
from ..types.types.movie import Movie
from ..types.types.movie_id import MovieId

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class ServiceClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_movie(self, movie_id: MovieId, *, request_options: typing.Optional[RequestOptions] = None) -> Movie:
        """
        Parameters:
            - movie_id: MovieId.

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import SeedExhaustive
        from seed.environment import SeedExhaustiveEnvironment

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            environment=SeedExhaustiveEnvironment.PRODUCTION,
        )
        client.service.get_movie(
            movie_id="movie-c06a4ad7",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "GET",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", f"movie/{jsonable_encoder(movie_id)}"),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
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
            return pydantic_v1.parse_obj_as(Movie, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def create_movie(self, *, request: Movie, request_options: typing.Optional[RequestOptions] = None) -> MovieId:
        """
        Parameters:
            - request: Movie.

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed import Movie
        from seed.client import SeedExhaustive
        from seed.environment import SeedExhaustiveEnvironment

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            environment=SeedExhaustiveEnvironment.PRODUCTION,
        )
        client.service.create_movie(
            request=Movie(
                id="movie-c06a4ad7",
                prequel="movie-cv9b914f",
                title="The Boy and the Heron",
                from_="Hayao Miyazaki",
                rating=8.0,
                type="movie",
                tag="tag-wf9as23d",
                metadata={
                    "actors": ["Christian Bale", "Florence Pugh", "Willem Dafoe"],
                    "releaseDate": "2023-12-08",
                    "ratings": {"rottenTomatoes": 97, "imdb": 7.6},
                },
            ),
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "movie"),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            json=jsonable_encoder(request)
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
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
            return pydantic_v1.parse_obj_as(MovieId, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_metadata(
        self,
        *,
        shallow: typing.Optional[bool] = None,
        tag: typing.Optional[typing.Union[str, typing.Sequence[str]]] = None,
        x_api_version: str,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> Metadata:
        """
        Parameters:
            - shallow: typing.Optional[bool].

            - tag: typing.Optional[typing.Union[str, typing.Sequence[str]]].

            - x_api_version: str.

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import SeedExhaustive
        from seed.environment import SeedExhaustiveEnvironment

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            environment=SeedExhaustiveEnvironment.PRODUCTION,
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
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "shallow": shallow,
                        "tag": tag,
                        **(
                            request_options.get("additional_query_parameters", {})
                            if request_options is not None
                            else {}
                        ),
                    }
                )
            ),
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        "X-API-Version": str(x_api_version),
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
            return pydantic_v1.parse_obj_as(Metadata, _response.json())  # type: ignore
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

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import AsyncSeedExhaustive
        from seed.environment import SeedExhaustiveEnvironment

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            environment=SeedExhaustiveEnvironment.PRODUCTION,
        )
        await client.service.get_movie(
            movie_id="movie-c06a4ad7",
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            "GET",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", f"movie/{jsonable_encoder(movie_id)}"),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
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
            return pydantic_v1.parse_obj_as(Movie, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def create_movie(self, *, request: Movie, request_options: typing.Optional[RequestOptions] = None) -> MovieId:
        """
        Parameters:
            - request: Movie.

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed import Movie
        from seed.client import AsyncSeedExhaustive
        from seed.environment import SeedExhaustiveEnvironment

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            environment=SeedExhaustiveEnvironment.PRODUCTION,
        )
        await client.service.create_movie(
            request=Movie(
                id="movie-c06a4ad7",
                prequel="movie-cv9b914f",
                title="The Boy and the Heron",
                from_="Hayao Miyazaki",
                rating=8.0,
                type="movie",
                tag="tag-wf9as23d",
                metadata={
                    "actors": ["Christian Bale", "Florence Pugh", "Willem Dafoe"],
                    "releaseDate": "2023-12-08",
                    "ratings": {"rottenTomatoes": 97, "imdb": 7.6},
                },
            ),
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "movie"),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            json=jsonable_encoder(request)
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
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
            return pydantic_v1.parse_obj_as(MovieId, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_metadata(
        self,
        *,
        shallow: typing.Optional[bool] = None,
        tag: typing.Optional[typing.Union[str, typing.Sequence[str]]] = None,
        x_api_version: str,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> Metadata:
        """
        Parameters:
            - shallow: typing.Optional[bool].

            - tag: typing.Optional[typing.Union[str, typing.Sequence[str]]].

            - x_api_version: str.

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import AsyncSeedExhaustive
        from seed.environment import SeedExhaustiveEnvironment

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            environment=SeedExhaustiveEnvironment.PRODUCTION,
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
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "shallow": shallow,
                        "tag": tag,
                        **(
                            request_options.get("additional_query_parameters", {})
                            if request_options is not None
                            else {}
                        ),
                    }
                )
            ),
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        "X-API-Version": str(x_api_version),
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
            return pydantic_v1.parse_obj_as(Metadata, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
