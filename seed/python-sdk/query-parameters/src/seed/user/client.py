# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing
import uuid
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.datetime_utils import serialize_datetime
from ..core.jsonable_encoder import jsonable_encoder
from ..core.pydantic_utilities import parse_obj_as
from ..core.request_options import RequestOptions
from .types.nested_user import NestedUser
from .types.user import User


class UserClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_username(
        self,
        *,
        limit: int,
        id: uuid.UUID,
        date: dt.date,
        deadline: dt.datetime,
        bytes: str,
        user: User,
        user_list: typing.Sequence[User],
        key_value: typing.Dict[str, str],
        nested_user: NestedUser,
        exclude_user: typing.Union[User, typing.Sequence[User]],
        filter: typing.Union[str, typing.Sequence[str]],
        optional_deadline: typing.Optional[dt.datetime] = None,
        optional_string: typing.Optional[str] = None,
        optional_user: typing.Optional[User] = None,
        request_options: typing.Optional[RequestOptions] = None
    ) -> User:
        """
        Parameters
        ----------
        limit : int

        id : uuid.UUID

        date : dt.date

        deadline : dt.datetime

        bytes : str

        user : User

        user_list : typing.Sequence[User]

        key_value : typing.Dict[str, str]

        nested_user : NestedUser

        exclude_user : typing.Union[User, typing.Sequence[User]]

        filter : typing.Union[str, typing.Sequence[str]]

        optional_deadline : typing.Optional[dt.datetime]

        optional_string : typing.Optional[str]

        optional_user : typing.Optional[User]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        User

        Examples
        --------
        import datetime
        import uuid

        from seed import NestedUser, User
        from seed.client import SeedQueryParameters

        client = SeedQueryParameters(
            base_url="https://yourhost.com/path/to/api",
        )
        client.user.get_username(
            limit=1,
            id=uuid.UUID(
                "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
            ),
            date=datetime.date.fromisoformat(
                "2023-01-15",
            ),
            deadline=datetime.datetime.fromisoformat(
                "2024-01-15 09:30:00+00:00",
            ),
            bytes="SGVsbG8gd29ybGQh",
            user=User(
                name="string",
                tags=["string"],
            ),
            user_list=[
                User(
                    name="string",
                    tags=["string"],
                )
            ],
            optional_deadline=datetime.datetime.fromisoformat(
                "2024-01-15 09:30:00+00:00",
            ),
            key_value={"string": "string"},
            optional_string="string",
            nested_user=NestedUser(
                name="string",
                user=User(
                    name="string",
                    tags=["string"],
                ),
            ),
            optional_user=User(
                name="string",
                tags=["string"],
            ),
            exclude_user=User(
                name="string",
                tags=["string"],
            ),
            filter="string",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            "user",
            method="GET",
            params={
                "limit": limit,
                "id": jsonable_encoder(id),
                "date": str(date),
                "deadline": serialize_datetime(deadline),
                "bytes": jsonable_encoder(bytes),
                "user": jsonable_encoder(user),
                "userList": jsonable_encoder(user_list),
                "optionalDeadline": serialize_datetime(optional_deadline) if optional_deadline is not None else None,
                "keyValue": jsonable_encoder(key_value),
                "optionalString": optional_string,
                "nestedUser": jsonable_encoder(nested_user),
                "optionalUser": jsonable_encoder(optional_user),
                "excludeUser": jsonable_encoder(exclude_user),
                "filter": filter,
            },
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(User, parse_obj_as(type_=User, object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncUserClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_username(
        self,
        *,
        limit: int,
        id: uuid.UUID,
        date: dt.date,
        deadline: dt.datetime,
        bytes: str,
        user: User,
        user_list: typing.Sequence[User],
        key_value: typing.Dict[str, str],
        nested_user: NestedUser,
        exclude_user: typing.Union[User, typing.Sequence[User]],
        filter: typing.Union[str, typing.Sequence[str]],
        optional_deadline: typing.Optional[dt.datetime] = None,
        optional_string: typing.Optional[str] = None,
        optional_user: typing.Optional[User] = None,
        request_options: typing.Optional[RequestOptions] = None
    ) -> User:
        """
        Parameters
        ----------
        limit : int

        id : uuid.UUID

        date : dt.date

        deadline : dt.datetime

        bytes : str

        user : User

        user_list : typing.Sequence[User]

        key_value : typing.Dict[str, str]

        nested_user : NestedUser

        exclude_user : typing.Union[User, typing.Sequence[User]]

        filter : typing.Union[str, typing.Sequence[str]]

        optional_deadline : typing.Optional[dt.datetime]

        optional_string : typing.Optional[str]

        optional_user : typing.Optional[User]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        User

        Examples
        --------
        import asyncio
        import datetime
        import uuid

        from seed import NestedUser, User
        from seed.client import AsyncSeedQueryParameters

        client = AsyncSeedQueryParameters(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.user.get_username(
                limit=1,
                id=uuid.UUID(
                    "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
                ),
                date=datetime.date.fromisoformat(
                    "2023-01-15",
                ),
                deadline=datetime.datetime.fromisoformat(
                    "2024-01-15 09:30:00+00:00",
                ),
                bytes="SGVsbG8gd29ybGQh",
                user=User(
                    name="string",
                    tags=["string"],
                ),
                user_list=[
                    User(
                        name="string",
                        tags=["string"],
                    )
                ],
                optional_deadline=datetime.datetime.fromisoformat(
                    "2024-01-15 09:30:00+00:00",
                ),
                key_value={"string": "string"},
                optional_string="string",
                nested_user=NestedUser(
                    name="string",
                    user=User(
                        name="string",
                        tags=["string"],
                    ),
                ),
                optional_user=User(
                    name="string",
                    tags=["string"],
                ),
                exclude_user=User(
                    name="string",
                    tags=["string"],
                ),
                filter="string",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "user",
            method="GET",
            params={
                "limit": limit,
                "id": jsonable_encoder(id),
                "date": str(date),
                "deadline": serialize_datetime(deadline),
                "bytes": jsonable_encoder(bytes),
                "user": jsonable_encoder(user),
                "userList": jsonable_encoder(user_list),
                "optionalDeadline": serialize_datetime(optional_deadline) if optional_deadline is not None else None,
                "keyValue": jsonable_encoder(key_value),
                "optionalString": optional_string,
                "nestedUser": jsonable_encoder(nested_user),
                "optionalUser": jsonable_encoder(optional_user),
                "excludeUser": jsonable_encoder(exclude_user),
                "filter": filter,
            },
            request_options=request_options,
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(User, parse_obj_as(type_=User, object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
