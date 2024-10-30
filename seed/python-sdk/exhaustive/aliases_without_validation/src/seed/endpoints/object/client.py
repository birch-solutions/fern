# This file was auto-generated by Fern from our API Definition.

import typing
from ...core.client_wrapper import SyncClientWrapper
import datetime as dt
import uuid
from ...core.request_options import RequestOptions
from ...types.object.types.object_with_optional_field import ObjectWithOptionalField
from ...core.unchecked_base_model import construct_type
from json.decoder import JSONDecodeError
from ...core.api_error import ApiError
from ...types.object.types.object_with_required_field import ObjectWithRequiredField
from ...types.object.types.object_with_map_of_map import ObjectWithMapOfMap
from ...types.object.types.nested_object_with_optional_field import NestedObjectWithOptionalField
from ...types.object.types.nested_object_with_required_field import NestedObjectWithRequiredField
from ...core.jsonable_encoder import jsonable_encoder
from ...core.client_wrapper import AsyncClientWrapper

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class ObjectClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_and_return_with_optional_field(
        self,
        *,
        string: typing.Optional[str] = OMIT,
        integer: typing.Optional[int] = OMIT,
        long_: typing.Optional[int] = OMIT,
        double: typing.Optional[float] = OMIT,
        bool_: typing.Optional[bool] = OMIT,
        datetime: typing.Optional[dt.datetime] = OMIT,
        date: typing.Optional[dt.date] = OMIT,
        uuid_: typing.Optional[uuid.UUID] = OMIT,
        base_64: typing.Optional[str] = OMIT,
        list_: typing.Optional[typing.Sequence[str]] = OMIT,
        set_: typing.Optional[typing.Set[str]] = OMIT,
        map_: typing.Optional[typing.Dict[int, str]] = OMIT,
        bigint: typing.Optional[str] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> ObjectWithOptionalField:
        """
        Parameters
        ----------
        string : typing.Optional[str]
            This is a rather long descriptor of this single field in a more complex type. If you ask me I think this is a pretty good description for this field all things considered.

        integer : typing.Optional[int]

        long_ : typing.Optional[int]

        double : typing.Optional[float]

        bool_ : typing.Optional[bool]

        datetime : typing.Optional[dt.datetime]

        date : typing.Optional[dt.date]

        uuid_ : typing.Optional[uuid.UUID]

        base_64 : typing.Optional[str]

        list_ : typing.Optional[typing.Sequence[str]]

        set_ : typing.Optional[typing.Set[str]]

        map_ : typing.Optional[typing.Dict[int, str]]

        bigint : typing.Optional[str]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ObjectWithOptionalField

        Examples
        --------
        import datetime
        import uuid

        from seed import SeedExhaustive

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.endpoints.object.get_and_return_with_optional_field(
            string="string",
            integer=1,
            long_=1000000,
            double=1.1,
            bool_=True,
            datetime=datetime.datetime.fromisoformat(
                "2024-01-15 09:30:00+00:00",
            ),
            date=datetime.date.fromisoformat(
                "2023-01-15",
            ),
            uuid_=uuid.UUID(
                "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
            ),
            base_64="SGVsbG8gd29ybGQh",
            list_=["list", "list"],
            set_={"set"},
            map_={1: "map"},
            bigint=1000000,
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "object/get-and-return-with-optional-field",
            method="POST",
            json={
                "string": string,
                "integer": integer,
                "long": long_,
                "double": double,
                "bool": bool_,
                "datetime": datetime,
                "date": date,
                "uuid": uuid_,
                "base64": base_64,
                "list": list_,
                "set": set_,
                "map": map_,
                "bigint": bigint,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    ObjectWithOptionalField,
                    construct_type(
                        type_=ObjectWithOptionalField,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_and_return_with_required_field(
        self, *, string: str, request_options: typing.Optional[RequestOptions] = None
    ) -> ObjectWithRequiredField:
        """
        Parameters
        ----------
        string : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ObjectWithRequiredField

        Examples
        --------
        from seed import SeedExhaustive

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.endpoints.object.get_and_return_with_required_field(
            string="string",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "object/get-and-return-with-required-field",
            method="POST",
            json={
                "string": string,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    ObjectWithRequiredField,
                    construct_type(
                        type_=ObjectWithRequiredField,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_and_return_with_map_of_map(
        self, *, map_: typing.Dict[str, typing.Dict[str, str]], request_options: typing.Optional[RequestOptions] = None
    ) -> ObjectWithMapOfMap:
        """
        Parameters
        ----------
        map_ : typing.Dict[str, typing.Dict[str, str]]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ObjectWithMapOfMap

        Examples
        --------
        from seed import SeedExhaustive

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.endpoints.object.get_and_return_with_map_of_map(
            map_={"map": {"map": "map"}},
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "object/get-and-return-with-map-of-map",
            method="POST",
            json={
                "map": map_,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    ObjectWithMapOfMap,
                    construct_type(
                        type_=ObjectWithMapOfMap,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_and_return_nested_with_optional_field(
        self,
        *,
        string: typing.Optional[str] = OMIT,
        nested_object: typing.Optional[ObjectWithOptionalField] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> NestedObjectWithOptionalField:
        """
        Parameters
        ----------
        string : typing.Optional[str]

        nested_object : typing.Optional[ObjectWithOptionalField]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        NestedObjectWithOptionalField

        Examples
        --------
        import datetime
        import uuid

        from seed import SeedExhaustive
        from seed.types.object import ObjectWithOptionalField

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.endpoints.object.get_and_return_nested_with_optional_field(
            string="string",
            nested_object=ObjectWithOptionalField(
                string="string",
                integer=1,
                long_=1000000,
                double=1.1,
                bool_=True,
                datetime=datetime.datetime.fromisoformat(
                    "2024-01-15 09:30:00+00:00",
                ),
                date=datetime.date.fromisoformat(
                    "2023-01-15",
                ),
                uuid_=uuid.UUID(
                    "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
                ),
                base_64="SGVsbG8gd29ybGQh",
                list_=["list", "list"],
                set_={"set"},
                map_={1: "map"},
                bigint=1000000,
            ),
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "object/get-and-return-nested-with-optional-field",
            method="POST",
            json={
                "string": string,
                "NestedObject": nested_object,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    NestedObjectWithOptionalField,
                    construct_type(
                        type_=NestedObjectWithOptionalField,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_and_return_nested_with_required_field(
        self,
        string_: str,
        *,
        string: str,
        nested_object: ObjectWithOptionalField,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> NestedObjectWithRequiredField:
        """
        Parameters
        ----------
        string_ : str

        string : str

        nested_object : ObjectWithOptionalField

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        NestedObjectWithRequiredField

        Examples
        --------
        import datetime
        import uuid

        from seed import SeedExhaustive
        from seed.types.object import ObjectWithOptionalField

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.endpoints.object.get_and_return_nested_with_required_field(
            string_="string",
            string="string",
            nested_object=ObjectWithOptionalField(
                string="string",
                integer=1,
                long_=1000000,
                double=1.1,
                bool_=True,
                datetime=datetime.datetime.fromisoformat(
                    "2024-01-15 09:30:00+00:00",
                ),
                date=datetime.date.fromisoformat(
                    "2023-01-15",
                ),
                uuid_=uuid.UUID(
                    "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
                ),
                base_64="SGVsbG8gd29ybGQh",
                list_=["list", "list"],
                set_={"set"},
                map_={1: "map"},
                bigint=1000000,
            ),
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            f"object/get-and-return-nested-with-required-field/{jsonable_encoder(string_)}",
            method="POST",
            json={
                "string": string,
                "NestedObject": nested_object,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    NestedObjectWithRequiredField,
                    construct_type(
                        type_=NestedObjectWithRequiredField,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_and_return_nested_with_required_field_as_list(
        self,
        *,
        request: typing.Sequence[NestedObjectWithRequiredField],
        request_options: typing.Optional[RequestOptions] = None,
    ) -> NestedObjectWithRequiredField:
        """
        Parameters
        ----------
        request : typing.Sequence[NestedObjectWithRequiredField]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        NestedObjectWithRequiredField

        Examples
        --------
        import datetime
        import uuid

        from seed import SeedExhaustive
        from seed.types.object import (
            NestedObjectWithRequiredField,
            ObjectWithOptionalField,
        )

        client = SeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )
        client.endpoints.object.get_and_return_nested_with_required_field_as_list(
            request=[
                NestedObjectWithRequiredField(
                    string="string",
                    nested_object=ObjectWithOptionalField(
                        string="string",
                        integer=1,
                        long_=1000000,
                        double=1.1,
                        bool_=True,
                        datetime=datetime.datetime.fromisoformat(
                            "2024-01-15 09:30:00+00:00",
                        ),
                        date=datetime.date.fromisoformat(
                            "2023-01-15",
                        ),
                        uuid_=uuid.UUID(
                            "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
                        ),
                        base_64="SGVsbG8gd29ybGQh",
                        list_=["list", "list"],
                        set_={"set"},
                        map_={1: "map"},
                        bigint=1000000,
                    ),
                ),
                NestedObjectWithRequiredField(
                    string="string",
                    nested_object=ObjectWithOptionalField(
                        string="string",
                        integer=1,
                        long_=1000000,
                        double=1.1,
                        bool_=True,
                        datetime=datetime.datetime.fromisoformat(
                            "2024-01-15 09:30:00+00:00",
                        ),
                        date=datetime.date.fromisoformat(
                            "2023-01-15",
                        ),
                        uuid_=uuid.UUID(
                            "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
                        ),
                        base_64="SGVsbG8gd29ybGQh",
                        list_=["list", "list"],
                        set_={"set"},
                        map_={1: "map"},
                        bigint=1000000,
                    ),
                ),
            ],
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "object/get-and-return-nested-with-required-field-list",
            method="POST",
            json=request,
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    NestedObjectWithRequiredField,
                    construct_type(
                        type_=NestedObjectWithRequiredField,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncObjectClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_and_return_with_optional_field(
        self,
        *,
        string: typing.Optional[str] = OMIT,
        integer: typing.Optional[int] = OMIT,
        long_: typing.Optional[int] = OMIT,
        double: typing.Optional[float] = OMIT,
        bool_: typing.Optional[bool] = OMIT,
        datetime: typing.Optional[dt.datetime] = OMIT,
        date: typing.Optional[dt.date] = OMIT,
        uuid_: typing.Optional[uuid.UUID] = OMIT,
        base_64: typing.Optional[str] = OMIT,
        list_: typing.Optional[typing.Sequence[str]] = OMIT,
        set_: typing.Optional[typing.Set[str]] = OMIT,
        map_: typing.Optional[typing.Dict[int, str]] = OMIT,
        bigint: typing.Optional[str] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> ObjectWithOptionalField:
        """
        Parameters
        ----------
        string : typing.Optional[str]
            This is a rather long descriptor of this single field in a more complex type. If you ask me I think this is a pretty good description for this field all things considered.

        integer : typing.Optional[int]

        long_ : typing.Optional[int]

        double : typing.Optional[float]

        bool_ : typing.Optional[bool]

        datetime : typing.Optional[dt.datetime]

        date : typing.Optional[dt.date]

        uuid_ : typing.Optional[uuid.UUID]

        base_64 : typing.Optional[str]

        list_ : typing.Optional[typing.Sequence[str]]

        set_ : typing.Optional[typing.Set[str]]

        map_ : typing.Optional[typing.Dict[int, str]]

        bigint : typing.Optional[str]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ObjectWithOptionalField

        Examples
        --------
        import asyncio
        import datetime
        import uuid

        from seed import AsyncSeedExhaustive

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.endpoints.object.get_and_return_with_optional_field(
                string="string",
                integer=1,
                long_=1000000,
                double=1.1,
                bool_=True,
                datetime=datetime.datetime.fromisoformat(
                    "2024-01-15 09:30:00+00:00",
                ),
                date=datetime.date.fromisoformat(
                    "2023-01-15",
                ),
                uuid_=uuid.UUID(
                    "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
                ),
                base_64="SGVsbG8gd29ybGQh",
                list_=["list", "list"],
                set_={"set"},
                map_={1: "map"},
                bigint=1000000,
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "object/get-and-return-with-optional-field",
            method="POST",
            json={
                "string": string,
                "integer": integer,
                "long": long_,
                "double": double,
                "bool": bool_,
                "datetime": datetime,
                "date": date,
                "uuid": uuid_,
                "base64": base_64,
                "list": list_,
                "set": set_,
                "map": map_,
                "bigint": bigint,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    ObjectWithOptionalField,
                    construct_type(
                        type_=ObjectWithOptionalField,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_and_return_with_required_field(
        self, *, string: str, request_options: typing.Optional[RequestOptions] = None
    ) -> ObjectWithRequiredField:
        """
        Parameters
        ----------
        string : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ObjectWithRequiredField

        Examples
        --------
        import asyncio

        from seed import AsyncSeedExhaustive

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.endpoints.object.get_and_return_with_required_field(
                string="string",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "object/get-and-return-with-required-field",
            method="POST",
            json={
                "string": string,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    ObjectWithRequiredField,
                    construct_type(
                        type_=ObjectWithRequiredField,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_and_return_with_map_of_map(
        self, *, map_: typing.Dict[str, typing.Dict[str, str]], request_options: typing.Optional[RequestOptions] = None
    ) -> ObjectWithMapOfMap:
        """
        Parameters
        ----------
        map_ : typing.Dict[str, typing.Dict[str, str]]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        ObjectWithMapOfMap

        Examples
        --------
        import asyncio

        from seed import AsyncSeedExhaustive

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.endpoints.object.get_and_return_with_map_of_map(
                map_={"map": {"map": "map"}},
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "object/get-and-return-with-map-of-map",
            method="POST",
            json={
                "map": map_,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    ObjectWithMapOfMap,
                    construct_type(
                        type_=ObjectWithMapOfMap,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_and_return_nested_with_optional_field(
        self,
        *,
        string: typing.Optional[str] = OMIT,
        nested_object: typing.Optional[ObjectWithOptionalField] = OMIT,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> NestedObjectWithOptionalField:
        """
        Parameters
        ----------
        string : typing.Optional[str]

        nested_object : typing.Optional[ObjectWithOptionalField]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        NestedObjectWithOptionalField

        Examples
        --------
        import asyncio
        import datetime
        import uuid

        from seed import AsyncSeedExhaustive
        from seed.types.object import ObjectWithOptionalField

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.endpoints.object.get_and_return_nested_with_optional_field(
                string="string",
                nested_object=ObjectWithOptionalField(
                    string="string",
                    integer=1,
                    long_=1000000,
                    double=1.1,
                    bool_=True,
                    datetime=datetime.datetime.fromisoformat(
                        "2024-01-15 09:30:00+00:00",
                    ),
                    date=datetime.date.fromisoformat(
                        "2023-01-15",
                    ),
                    uuid_=uuid.UUID(
                        "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
                    ),
                    base_64="SGVsbG8gd29ybGQh",
                    list_=["list", "list"],
                    set_={"set"},
                    map_={1: "map"},
                    bigint=1000000,
                ),
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "object/get-and-return-nested-with-optional-field",
            method="POST",
            json={
                "string": string,
                "NestedObject": nested_object,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    NestedObjectWithOptionalField,
                    construct_type(
                        type_=NestedObjectWithOptionalField,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_and_return_nested_with_required_field(
        self,
        string_: str,
        *,
        string: str,
        nested_object: ObjectWithOptionalField,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> NestedObjectWithRequiredField:
        """
        Parameters
        ----------
        string_ : str

        string : str

        nested_object : ObjectWithOptionalField

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        NestedObjectWithRequiredField

        Examples
        --------
        import asyncio
        import datetime
        import uuid

        from seed import AsyncSeedExhaustive
        from seed.types.object import ObjectWithOptionalField

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.endpoints.object.get_and_return_nested_with_required_field(
                string_="string",
                string="string",
                nested_object=ObjectWithOptionalField(
                    string="string",
                    integer=1,
                    long_=1000000,
                    double=1.1,
                    bool_=True,
                    datetime=datetime.datetime.fromisoformat(
                        "2024-01-15 09:30:00+00:00",
                    ),
                    date=datetime.date.fromisoformat(
                        "2023-01-15",
                    ),
                    uuid_=uuid.UUID(
                        "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
                    ),
                    base_64="SGVsbG8gd29ybGQh",
                    list_=["list", "list"],
                    set_={"set"},
                    map_={1: "map"},
                    bigint=1000000,
                ),
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            f"object/get-and-return-nested-with-required-field/{jsonable_encoder(string_)}",
            method="POST",
            json={
                "string": string,
                "NestedObject": nested_object,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    NestedObjectWithRequiredField,
                    construct_type(
                        type_=NestedObjectWithRequiredField,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_and_return_nested_with_required_field_as_list(
        self,
        *,
        request: typing.Sequence[NestedObjectWithRequiredField],
        request_options: typing.Optional[RequestOptions] = None,
    ) -> NestedObjectWithRequiredField:
        """
        Parameters
        ----------
        request : typing.Sequence[NestedObjectWithRequiredField]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        NestedObjectWithRequiredField

        Examples
        --------
        import asyncio
        import datetime
        import uuid

        from seed import AsyncSeedExhaustive
        from seed.types.object import (
            NestedObjectWithRequiredField,
            ObjectWithOptionalField,
        )

        client = AsyncSeedExhaustive(
            token="YOUR_TOKEN",
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.endpoints.object.get_and_return_nested_with_required_field_as_list(
                request=[
                    NestedObjectWithRequiredField(
                        string="string",
                        nested_object=ObjectWithOptionalField(
                            string="string",
                            integer=1,
                            long_=1000000,
                            double=1.1,
                            bool_=True,
                            datetime=datetime.datetime.fromisoformat(
                                "2024-01-15 09:30:00+00:00",
                            ),
                            date=datetime.date.fromisoformat(
                                "2023-01-15",
                            ),
                            uuid_=uuid.UUID(
                                "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
                            ),
                            base_64="SGVsbG8gd29ybGQh",
                            list_=["list", "list"],
                            set_={"set"},
                            map_={1: "map"},
                            bigint=1000000,
                        ),
                    ),
                    NestedObjectWithRequiredField(
                        string="string",
                        nested_object=ObjectWithOptionalField(
                            string="string",
                            integer=1,
                            long_=1000000,
                            double=1.1,
                            bool_=True,
                            datetime=datetime.datetime.fromisoformat(
                                "2024-01-15 09:30:00+00:00",
                            ),
                            date=datetime.date.fromisoformat(
                                "2023-01-15",
                            ),
                            uuid_=uuid.UUID(
                                "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
                            ),
                            base_64="SGVsbG8gd29ybGQh",
                            list_=["list", "list"],
                            set_={"set"},
                            map_={1: "map"},
                            bigint=1000000,
                        ),
                    ),
                ],
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "object/get-and-return-nested-with-required-field-list",
            method="POST",
            json=request,
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(
                    NestedObjectWithRequiredField,
                    construct_type(
                        type_=NestedObjectWithRequiredField,  # type: ignore
                        object_=_response.json(),
                    ),
                )
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
