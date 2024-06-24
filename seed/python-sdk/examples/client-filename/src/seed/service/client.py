# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ..commons.types.types.tag import Tag
from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.jsonable_encoder import jsonable_encoder
from ..core.pydantic_utilities import pydantic_v1
from ..core.request_options import RequestOptions
from ..types.types.metadata import Metadata
from ..types.types.movie import Movie
from ..types.types.movie_id import MovieId
from ..types.types.response import Response

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class ServiceClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_movie(self, movie_id: MovieId, *, request_options: typing.Optional[RequestOptions] = None) -> Movie:
        """
        Parameters
        ----------
        movie_id : MovieId

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        Movie

        Examples
        --------
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
            f"movie/{jsonable_encoder(movie_id)}", method="GET", request_options=request_options
        )
        try:
            if 200 <= _response.status_code < 300:
                return pydantic_v1.parse_obj_as(Movie, _response.json())  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def create_movie(
        self,
        *,
        id: MovieId,
        title: str,
        from_: str,
        rating: float,
        tag: Tag,
        metadata: typing.Dict[str, typing.Any],
        prequel: typing.Optional[MovieId] = OMIT,
        book: typing.Optional[str] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> MovieId:
        """
        Parameters
        ----------
        id : MovieId

        title : str

        from_ : str

        rating : float
            The rating scale is one to five stars

        tag : Tag

        metadata : typing.Dict[str, typing.Any]

        prequel : typing.Optional[MovieId]

        book : typing.Optional[str]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        MovieId

        Examples
        --------
        from seed.client import SeedExhaustive
        from seed.environment import SeedExhaustiveEnvironment

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            environment=SeedExhaustiveEnvironment.PRODUCTION,
        )
        client.service.create_movie(
            id="movie-c06a4ad7",
            prequel="movie-cv9b914f",
            title="The Boy and the Heron",
            from_="Hayao Miyazaki",
            rating=8.0,
            tag="tag-wf9as23d",
            metadata={
                "actors": ["Christian Bale", "Florence Pugh", "Willem Dafoe"],
                "releaseDate": "2023-12-08",
                "ratings": {"rottenTomatoes": 97, "imdb": 7.6},
            },
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "movie",
            method="POST",
            json={
                "id": id,
                "prequel": prequel,
                "title": title,
                "from": from_,
                "rating": rating,
                "tag": tag,
                "book": book,
                "metadata": metadata,
                "type": "movie",
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return pydantic_v1.parse_obj_as(MovieId, _response.json())  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_metadata(
        self,
        *,
        x_api_version: str,
        shallow: typing.Optional[bool] = None,
        tag: typing.Optional[typing.Union[str, typing.Sequence[str]]] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> Metadata:
        """
        Parameters
        ----------
        x_api_version : str

        shallow : typing.Optional[bool]

        tag : typing.Optional[typing.Union[str, typing.Sequence[str]]]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        Metadata

        Examples
        --------
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
            "metadata",
            method="GET",
            params={"shallow": shallow, "tag": tag},
            headers={"X-API-Version": str(x_api_version) if x_api_version is not None else None},
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return pydantic_v1.parse_obj_as(Metadata, _response.json())  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_response(self, *, request_options: typing.Optional[RequestOptions] = None) -> Response:
        """
        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        Response

        Examples
        --------
        from seed.client import SeedExhaustive
        from seed.environment import SeedExhaustiveEnvironment

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            environment=SeedExhaustiveEnvironment.PRODUCTION,
        )
        client.service.get_response()
        """
        _response = self._client_wrapper.httpx_client.request(
            "response", method="POST", request_options=request_options
        )
        try:
            if 200 <= _response.status_code < 300:
                return pydantic_v1.parse_obj_as(Response, _response.json())  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncServiceClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_movie(self, movie_id: MovieId, *, request_options: typing.Optional[RequestOptions] = None) -> Movie:
        """
        Parameters
        ----------
        movie_id : MovieId

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        Movie

        Examples
        --------
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
            f"movie/{jsonable_encoder(movie_id)}", method="GET", request_options=request_options
        )
        try:
            if 200 <= _response.status_code < 300:
                return pydantic_v1.parse_obj_as(Movie, _response.json())  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def create_movie(
        self,
        *,
        id: MovieId,
        title: str,
        from_: str,
        rating: float,
        tag: Tag,
        metadata: typing.Dict[str, typing.Any],
        prequel: typing.Optional[MovieId] = OMIT,
        book: typing.Optional[str] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> MovieId:
        """
        Parameters
        ----------
        id : MovieId

        title : str

        from_ : str

        rating : float
            The rating scale is one to five stars

        tag : Tag

        metadata : typing.Dict[str, typing.Any]

        prequel : typing.Optional[MovieId]

        book : typing.Optional[str]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        MovieId

        Examples
        --------
        from seed.client import AsyncSeedExhaustive
        from seed.environment import SeedExhaustiveEnvironment

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            environment=SeedExhaustiveEnvironment.PRODUCTION,
        )
        await client.service.create_movie(
            id="movie-c06a4ad7",
            prequel="movie-cv9b914f",
            title="The Boy and the Heron",
            from_="Hayao Miyazaki",
            rating=8.0,
            tag="tag-wf9as23d",
            metadata={
                "actors": ["Christian Bale", "Florence Pugh", "Willem Dafoe"],
                "releaseDate": "2023-12-08",
                "ratings": {"rottenTomatoes": 97, "imdb": 7.6},
            },
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            "movie",
            method="POST",
            json={
                "id": id,
                "prequel": prequel,
                "title": title,
                "from": from_,
                "rating": rating,
                "tag": tag,
                "book": book,
                "metadata": metadata,
                "type": "movie",
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return pydantic_v1.parse_obj_as(MovieId, _response.json())  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_metadata(
        self,
        *,
        x_api_version: str,
        shallow: typing.Optional[bool] = None,
        tag: typing.Optional[typing.Union[str, typing.Sequence[str]]] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> Metadata:
        """
        Parameters
        ----------
        x_api_version : str

        shallow : typing.Optional[bool]

        tag : typing.Optional[typing.Union[str, typing.Sequence[str]]]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        Metadata

        Examples
        --------
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
            "metadata",
            method="GET",
            params={"shallow": shallow, "tag": tag},
            headers={"X-API-Version": str(x_api_version) if x_api_version is not None else None},
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return pydantic_v1.parse_obj_as(Metadata, _response.json())  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_response(self, *, request_options: typing.Optional[RequestOptions] = None) -> Response:
        """
        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        Response

        Examples
        --------
        from seed.client import AsyncSeedExhaustive
        from seed.environment import SeedExhaustiveEnvironment

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            environment=SeedExhaustiveEnvironment.PRODUCTION,
        )
        await client.service.get_response()
        """
        _response = await self._client_wrapper.httpx_client.request(
            "response", method="POST", request_options=request_options
        )
        try:
            if 200 <= _response.status_code < 300:
                return pydantic_v1.parse_obj_as(Response, _response.json())  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
