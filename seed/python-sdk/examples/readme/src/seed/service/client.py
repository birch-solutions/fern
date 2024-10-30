# This file was auto-generated by Fern from our API Definition.

import typing
from ..core.client_wrapper import SyncClientWrapper
from ..types.types.movie_id import MovieId
from ..core.request_options import RequestOptions
from ..types.types.movie import Movie
from ..core.jsonable_encoder import jsonable_encoder
from ..core.pydantic_utilities import parse_obj_as
from json.decoder import JSONDecodeError
from ..core.api_error import ApiError
from ..commons.types.types.tag import Tag
from ..types.types.metadata import Metadata as types_types_metadata_Metadata
from ..types.types.cast_member import CastMember
from ..types.types.extended_movie import ExtendedMovie
from ..types.types.entity import Entity
from ..commons.types.types.metadata import Metadata as commons_types_types_metadata_Metadata
from ..commons.types.types.event_info import EventInfo
from ..commons.types.types.data import Data
from ..types.types.migration import Migration
from ..types.types.exception import Exception
from ..types.types.test import Test
from ..types.types.node import Node
from ..types.types.directory import Directory
from ..types.types.moment import Moment
from ..types.types.response import Response
from ..core.serialization import convert_and_respect_annotation_metadata
from ..core.client_wrapper import AsyncClientWrapper

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
        from seed import SeedExamples
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
            f"movie/{jsonable_encoder(movie_id)}",
            method="GET",
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    Movie,
                    parse_obj_as(
                        type_=Movie,  # type: ignore
                        object_=_response.json(),
                    ),
                )
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
        metadata: typing.Dict[str, typing.Optional[typing.Any]],
        revenue: int,
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

        metadata : typing.Dict[str, typing.Optional[typing.Any]]

        revenue : int

        prequel : typing.Optional[MovieId]

        book : typing.Optional[str]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        MovieId

        Examples
        --------
        from seed import SeedExamples
        from seed.environment import SeedExamplesEnvironment

        client = SeedExamples(
            token="YOUR_TOKEN",
            environment=SeedExamplesEnvironment.PRODUCTION,
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
            revenue=1000000,
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
                "revenue": revenue,
                "type": "movie",
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    MovieId,
                    parse_obj_as(
                        type_=MovieId,  # type: ignore
                        object_=_response.json(),
                    ),
                )
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
    ) -> types_types_metadata_Metadata:
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
        types_types_metadata_Metadata

        Examples
        --------
        from seed import SeedExamples
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
            "metadata",
            method="GET",
            params={
                "shallow": shallow,
                "tag": tag,
            },
            headers={
                "X-API-Version": str(x_api_version) if x_api_version is not None else None,
            },
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    types_types_metadata_Metadata,
                    parse_obj_as(
                        type_=types_types_metadata_Metadata,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def create_big_entity(
        self,
        *,
        cast_member: typing.Optional[CastMember] = OMIT,
        extended_movie: typing.Optional[ExtendedMovie] = OMIT,
        entity: typing.Optional[Entity] = OMIT,
        metadata: typing.Optional[types_types_metadata_Metadata] = OMIT,
        common_metadata: typing.Optional[commons_types_types_metadata_Metadata] = OMIT,
        event_info: typing.Optional[EventInfo] = OMIT,
        data: typing.Optional[Data] = OMIT,
        migration: typing.Optional[Migration] = OMIT,
        exception: typing.Optional[Exception] = OMIT,
        test: typing.Optional[Test] = OMIT,
        node: typing.Optional[Node] = OMIT,
        directory: typing.Optional[Directory] = OMIT,
        moment: typing.Optional[Moment] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> Response:
        """
        Parameters
        ----------
        cast_member : typing.Optional[CastMember]

        extended_movie : typing.Optional[ExtendedMovie]

        entity : typing.Optional[Entity]

        metadata : typing.Optional[types_types_metadata_Metadata]

        common_metadata : typing.Optional[commons_types_types_metadata_Metadata]

        event_info : typing.Optional[EventInfo]

        data : typing.Optional[Data]

        migration : typing.Optional[Migration]

        exception : typing.Optional[Exception]

        test : typing.Optional[Test]

        node : typing.Optional[Node]

        directory : typing.Optional[Directory]

        moment : typing.Optional[Moment]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        Response

        Examples
        --------
        import datetime
        import uuid

        from seed import SeedExamples
        from seed.commons.types import Data_String, EventInfo_Metadata, Metadata
        from seed.environment import SeedExamplesEnvironment
        from seed.types import (
            Actor,
            Directory,
            Entity,
            Exception_Generic,
            ExtendedMovie,
            File,
            Metadata_Html,
            Migration,
            Moment,
            Node,
            Test_And,
            Tree,
        )

        client = SeedExamples(
            token="YOUR_TOKEN",
            environment=SeedExamplesEnvironment.PRODUCTION,
        )
        client.service.create_big_entity(
            cast_member=Actor(
                name="name",
                id="id",
            ),
            extended_movie=ExtendedMovie(
                cast=["cast", "cast"],
            ),
            entity=Entity(
                type="primitive",
                name="name",
            ),
            metadata=Metadata_Html(value="metadata"),
            common_metadata=Metadata(
                id="id",
                data={"data": "data"},
                json_string="jsonString",
            ),
            event_info=EventInfo_Metadata(
                id="id",
                data={"data": "data"},
                json_string="jsonString",
            ),
            data=Data_String(value="data"),
            migration=Migration(
                name="name",
                status="RUNNING",
            ),
            exception=Exception_Generic(
                exception_type="exceptionType",
                exception_message="exceptionMessage",
                exception_stacktrace="exceptionStacktrace",
            ),
            test=Test_And(value=True),
            node=Node(
                name="name",
                nodes=[
                    Node(
                        name="name",
                        nodes=[
                            Node(
                                name="name",
                                nodes=[],
                                trees=[],
                            ),
                            Node(
                                name="name",
                                nodes=[],
                                trees=[],
                            ),
                        ],
                        trees=[
                            Tree(
                                nodes=[],
                            ),
                            Tree(
                                nodes=[],
                            ),
                        ],
                    ),
                    Node(
                        name="name",
                        nodes=[
                            Node(
                                name="name",
                                nodes=[],
                                trees=[],
                            ),
                            Node(
                                name="name",
                                nodes=[],
                                trees=[],
                            ),
                        ],
                        trees=[
                            Tree(
                                nodes=[],
                            ),
                            Tree(
                                nodes=[],
                            ),
                        ],
                    ),
                ],
                trees=[
                    Tree(
                        nodes=[
                            Node(
                                name="name",
                                nodes=[],
                                trees=[],
                            ),
                            Node(
                                name="name",
                                nodes=[],
                                trees=[],
                            ),
                        ],
                    ),
                    Tree(
                        nodes=[
                            Node(
                                name="name",
                                nodes=[],
                                trees=[],
                            ),
                            Node(
                                name="name",
                                nodes=[],
                                trees=[],
                            ),
                        ],
                    ),
                ],
            ),
            directory=Directory(
                name="name",
                files=[
                    File(
                        name="name",
                        contents="contents",
                    ),
                    File(
                        name="name",
                        contents="contents",
                    ),
                ],
                directories=[
                    Directory(
                        name="name",
                        files=[
                            File(
                                name="name",
                                contents="contents",
                            ),
                            File(
                                name="name",
                                contents="contents",
                            ),
                        ],
                        directories=[
                            Directory(
                                name="name",
                                files=[],
                                directories=[],
                            ),
                            Directory(
                                name="name",
                                files=[],
                                directories=[],
                            ),
                        ],
                    ),
                    Directory(
                        name="name",
                        files=[
                            File(
                                name="name",
                                contents="contents",
                            ),
                            File(
                                name="name",
                                contents="contents",
                            ),
                        ],
                        directories=[
                            Directory(
                                name="name",
                                files=[],
                                directories=[],
                            ),
                            Directory(
                                name="name",
                                files=[],
                                directories=[],
                            ),
                        ],
                    ),
                ],
            ),
            moment=Moment(
                id=uuid.UUID(
                    "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
                ),
                date=datetime.date.fromisoformat(
                    "2023-01-15",
                ),
                datetime=datetime.datetime.fromisoformat(
                    "2024-01-15 09:30:00+00:00",
                ),
            ),
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "big-entity",
            method="POST",
            json={
                "castMember": convert_and_respect_annotation_metadata(
                    object_=cast_member, annotation=CastMember, direction="write"
                ),
                "extendedMovie": convert_and_respect_annotation_metadata(
                    object_=extended_movie, annotation=ExtendedMovie, direction="write"
                ),
                "entity": convert_and_respect_annotation_metadata(object_=entity, annotation=Entity, direction="write"),
                "metadata": convert_and_respect_annotation_metadata(
                    object_=metadata, annotation=types_types_metadata_Metadata, direction="write"
                ),
                "commonMetadata": convert_and_respect_annotation_metadata(
                    object_=common_metadata, annotation=commons_types_types_metadata_Metadata, direction="write"
                ),
                "eventInfo": convert_and_respect_annotation_metadata(
                    object_=event_info, annotation=EventInfo, direction="write"
                ),
                "data": convert_and_respect_annotation_metadata(object_=data, annotation=Data, direction="write"),
                "migration": convert_and_respect_annotation_metadata(
                    object_=migration, annotation=Migration, direction="write"
                ),
                "exception": convert_and_respect_annotation_metadata(
                    object_=exception, annotation=Exception, direction="write"
                ),
                "test": convert_and_respect_annotation_metadata(object_=test, annotation=Test, direction="write"),
                "node": convert_and_respect_annotation_metadata(object_=node, annotation=Node, direction="write"),
                "directory": convert_and_respect_annotation_metadata(
                    object_=directory, annotation=Directory, direction="write"
                ),
                "moment": convert_and_respect_annotation_metadata(object_=moment, annotation=Moment, direction="write"),
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    Response,
                    parse_obj_as(
                        type_=Response,  # type: ignore
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
        import asyncio

        from seed import AsyncSeedExamples
        from seed.environment import SeedExamplesEnvironment

        client = AsyncSeedExamples(
            token="YOUR_TOKEN",
            environment=SeedExamplesEnvironment.PRODUCTION,
        )


        async def main() -> None:
            await client.service.get_movie(
                movie_id="movie-c06a4ad7",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            f"movie/{jsonable_encoder(movie_id)}",
            method="GET",
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    Movie,
                    parse_obj_as(
                        type_=Movie,  # type: ignore
                        object_=_response.json(),
                    ),
                )
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
        metadata: typing.Dict[str, typing.Optional[typing.Any]],
        revenue: int,
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

        metadata : typing.Dict[str, typing.Optional[typing.Any]]

        revenue : int

        prequel : typing.Optional[MovieId]

        book : typing.Optional[str]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        MovieId

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
                revenue=1000000,
            )


        asyncio.run(main())
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
                "revenue": revenue,
                "type": "movie",
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    MovieId,
                    parse_obj_as(
                        type_=MovieId,  # type: ignore
                        object_=_response.json(),
                    ),
                )
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
    ) -> types_types_metadata_Metadata:
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
        types_types_metadata_Metadata

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
            await client.service.get_metadata(
                x_api_version="0.0.1",
                shallow=False,
                tag="development",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "metadata",
            method="GET",
            params={
                "shallow": shallow,
                "tag": tag,
            },
            headers={
                "X-API-Version": str(x_api_version) if x_api_version is not None else None,
            },
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    types_types_metadata_Metadata,
                    parse_obj_as(
                        type_=types_types_metadata_Metadata,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def create_big_entity(
        self,
        *,
        cast_member: typing.Optional[CastMember] = OMIT,
        extended_movie: typing.Optional[ExtendedMovie] = OMIT,
        entity: typing.Optional[Entity] = OMIT,
        metadata: typing.Optional[types_types_metadata_Metadata] = OMIT,
        common_metadata: typing.Optional[commons_types_types_metadata_Metadata] = OMIT,
        event_info: typing.Optional[EventInfo] = OMIT,
        data: typing.Optional[Data] = OMIT,
        migration: typing.Optional[Migration] = OMIT,
        exception: typing.Optional[Exception] = OMIT,
        test: typing.Optional[Test] = OMIT,
        node: typing.Optional[Node] = OMIT,
        directory: typing.Optional[Directory] = OMIT,
        moment: typing.Optional[Moment] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> Response:
        """
        Parameters
        ----------
        cast_member : typing.Optional[CastMember]

        extended_movie : typing.Optional[ExtendedMovie]

        entity : typing.Optional[Entity]

        metadata : typing.Optional[types_types_metadata_Metadata]

        common_metadata : typing.Optional[commons_types_types_metadata_Metadata]

        event_info : typing.Optional[EventInfo]

        data : typing.Optional[Data]

        migration : typing.Optional[Migration]

        exception : typing.Optional[Exception]

        test : typing.Optional[Test]

        node : typing.Optional[Node]

        directory : typing.Optional[Directory]

        moment : typing.Optional[Moment]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        Response

        Examples
        --------
        import asyncio
        import datetime
        import uuid

        from seed import AsyncSeedExamples
        from seed.commons.types import Data_String, EventInfo_Metadata, Metadata
        from seed.environment import SeedExamplesEnvironment
        from seed.types import (
            Actor,
            Directory,
            Entity,
            Exception_Generic,
            ExtendedMovie,
            File,
            Metadata_Html,
            Migration,
            Moment,
            Node,
            Test_And,
            Tree,
        )

        client = AsyncSeedExamples(
            token="YOUR_TOKEN",
            environment=SeedExamplesEnvironment.PRODUCTION,
        )


        async def main() -> None:
            await client.service.create_big_entity(
                cast_member=Actor(
                    name="name",
                    id="id",
                ),
                extended_movie=ExtendedMovie(
                    cast=["cast", "cast"],
                ),
                entity=Entity(
                    type="primitive",
                    name="name",
                ),
                metadata=Metadata_Html(value="metadata"),
                common_metadata=Metadata(
                    id="id",
                    data={"data": "data"},
                    json_string="jsonString",
                ),
                event_info=EventInfo_Metadata(
                    id="id",
                    data={"data": "data"},
                    json_string="jsonString",
                ),
                data=Data_String(value="data"),
                migration=Migration(
                    name="name",
                    status="RUNNING",
                ),
                exception=Exception_Generic(
                    exception_type="exceptionType",
                    exception_message="exceptionMessage",
                    exception_stacktrace="exceptionStacktrace",
                ),
                test=Test_And(value=True),
                node=Node(
                    name="name",
                    nodes=[
                        Node(
                            name="name",
                            nodes=[
                                Node(
                                    name="name",
                                    nodes=[],
                                    trees=[],
                                ),
                                Node(
                                    name="name",
                                    nodes=[],
                                    trees=[],
                                ),
                            ],
                            trees=[
                                Tree(
                                    nodes=[],
                                ),
                                Tree(
                                    nodes=[],
                                ),
                            ],
                        ),
                        Node(
                            name="name",
                            nodes=[
                                Node(
                                    name="name",
                                    nodes=[],
                                    trees=[],
                                ),
                                Node(
                                    name="name",
                                    nodes=[],
                                    trees=[],
                                ),
                            ],
                            trees=[
                                Tree(
                                    nodes=[],
                                ),
                                Tree(
                                    nodes=[],
                                ),
                            ],
                        ),
                    ],
                    trees=[
                        Tree(
                            nodes=[
                                Node(
                                    name="name",
                                    nodes=[],
                                    trees=[],
                                ),
                                Node(
                                    name="name",
                                    nodes=[],
                                    trees=[],
                                ),
                            ],
                        ),
                        Tree(
                            nodes=[
                                Node(
                                    name="name",
                                    nodes=[],
                                    trees=[],
                                ),
                                Node(
                                    name="name",
                                    nodes=[],
                                    trees=[],
                                ),
                            ],
                        ),
                    ],
                ),
                directory=Directory(
                    name="name",
                    files=[
                        File(
                            name="name",
                            contents="contents",
                        ),
                        File(
                            name="name",
                            contents="contents",
                        ),
                    ],
                    directories=[
                        Directory(
                            name="name",
                            files=[
                                File(
                                    name="name",
                                    contents="contents",
                                ),
                                File(
                                    name="name",
                                    contents="contents",
                                ),
                            ],
                            directories=[
                                Directory(
                                    name="name",
                                    files=[],
                                    directories=[],
                                ),
                                Directory(
                                    name="name",
                                    files=[],
                                    directories=[],
                                ),
                            ],
                        ),
                        Directory(
                            name="name",
                            files=[
                                File(
                                    name="name",
                                    contents="contents",
                                ),
                                File(
                                    name="name",
                                    contents="contents",
                                ),
                            ],
                            directories=[
                                Directory(
                                    name="name",
                                    files=[],
                                    directories=[],
                                ),
                                Directory(
                                    name="name",
                                    files=[],
                                    directories=[],
                                ),
                            ],
                        ),
                    ],
                ),
                moment=Moment(
                    id=uuid.UUID(
                        "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
                    ),
                    date=datetime.date.fromisoformat(
                        "2023-01-15",
                    ),
                    datetime=datetime.datetime.fromisoformat(
                        "2024-01-15 09:30:00+00:00",
                    ),
                ),
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "big-entity",
            method="POST",
            json={
                "castMember": convert_and_respect_annotation_metadata(
                    object_=cast_member, annotation=CastMember, direction="write"
                ),
                "extendedMovie": convert_and_respect_annotation_metadata(
                    object_=extended_movie, annotation=ExtendedMovie, direction="write"
                ),
                "entity": convert_and_respect_annotation_metadata(object_=entity, annotation=Entity, direction="write"),
                "metadata": convert_and_respect_annotation_metadata(
                    object_=metadata, annotation=types_types_metadata_Metadata, direction="write"
                ),
                "commonMetadata": convert_and_respect_annotation_metadata(
                    object_=common_metadata, annotation=commons_types_types_metadata_Metadata, direction="write"
                ),
                "eventInfo": convert_and_respect_annotation_metadata(
                    object_=event_info, annotation=EventInfo, direction="write"
                ),
                "data": convert_and_respect_annotation_metadata(object_=data, annotation=Data, direction="write"),
                "migration": convert_and_respect_annotation_metadata(
                    object_=migration, annotation=Migration, direction="write"
                ),
                "exception": convert_and_respect_annotation_metadata(
                    object_=exception, annotation=Exception, direction="write"
                ),
                "test": convert_and_respect_annotation_metadata(object_=test, annotation=Test, direction="write"),
                "node": convert_and_respect_annotation_metadata(object_=node, annotation=Node, direction="write"),
                "directory": convert_and_respect_annotation_metadata(
                    object_=directory, annotation=Directory, direction="write"
                ),
                "moment": convert_and_respect_annotation_metadata(object_=moment, annotation=Moment, direction="write"),
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    Response,
                    parse_obj_as(
                        type_=Response,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
