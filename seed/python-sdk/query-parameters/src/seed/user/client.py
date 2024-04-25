# This file was auto-generated by Fern from our API Definition.

import datetime as dt
import typing
import urllib.parse
import uuid
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.datetime_utils import serialize_datetime
from ..core.jsonable_encoder import jsonable_encoder
from ..core.pydantic_utilities import pydantic_v1
from ..core.remove_none_from_dict import remove_none_from_dict
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
        key_value: typing.Dict[str, str],
        optional_string: typing.Optional[str] = None,
        nested_user: NestedUser,
        optional_user: typing.Optional[User] = None,
        exclude_user: typing.Union[User, typing.Sequence[User]],
        filter: typing.Union[str, typing.Sequence[str]],
        request_options: typing.Optional[RequestOptions] = None,
    ) -> User:
        """
        Parameters:
            - limit: int.

            - id: uuid.UUID.

            - date: dt.date.

            - deadline: dt.datetime.

            - bytes: str.

            - user: User.

            - key_value: typing.Dict[str, str].

            - optional_string: typing.Optional[str].

            - nested_user: NestedUser.

            - optional_user: typing.Optional[User].

            - exclude_user: typing.Union[User, typing.Sequence[User]].

            - filter: typing.Union[str, typing.Sequence[str]].

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
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
            method="GET",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "user"),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "limit": limit,
                        "id": jsonable_encoder(id),
                        "date": str(date),
                        "deadline": serialize_datetime(deadline),
                        "bytes": jsonable_encoder(bytes),
                        "user": jsonable_encoder(user),
                        "keyValue": jsonable_encoder(key_value),
                        "optionalString": optional_string,
                        "nestedUser": jsonable_encoder(nested_user),
                        "optionalUser": jsonable_encoder(optional_user),
                        "excludeUser": jsonable_encoder(exclude_user),
                        "filter": filter,
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
            return pydantic_v1.parse_obj_as(User, _response.json())  # type: ignore
        try:
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
        key_value: typing.Dict[str, str],
        optional_string: typing.Optional[str] = None,
        nested_user: NestedUser,
        optional_user: typing.Optional[User] = None,
        exclude_user: typing.Union[User, typing.Sequence[User]],
        filter: typing.Union[str, typing.Sequence[str]],
        request_options: typing.Optional[RequestOptions] = None,
    ) -> User:
        """
        Parameters:
            - limit: int.

            - id: uuid.UUID.

            - date: dt.date.

            - deadline: dt.datetime.

            - bytes: str.

            - user: User.

            - key_value: typing.Dict[str, str].

            - optional_string: typing.Optional[str].

            - nested_user: NestedUser.

            - optional_user: typing.Optional[User].

            - exclude_user: typing.Union[User, typing.Sequence[User]].

            - filter: typing.Union[str, typing.Sequence[str]].

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        import datetime
        import uuid

        from seed import NestedUser, User
        from seed.client import AsyncSeedQueryParameters

        client = AsyncSeedQueryParameters(
            base_url="https://yourhost.com/path/to/api",
        )
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
        _response = await self._client_wrapper.httpx_client.request(
            method="GET",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "user"),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "limit": limit,
                        "id": jsonable_encoder(id),
                        "date": str(date),
                        "deadline": serialize_datetime(deadline),
                        "bytes": jsonable_encoder(bytes),
                        "user": jsonable_encoder(user),
                        "keyValue": jsonable_encoder(key_value),
                        "optionalString": optional_string,
                        "nestedUser": jsonable_encoder(nested_user),
                        "optionalUser": jsonable_encoder(optional_user),
                        "excludeUser": jsonable_encoder(exclude_user),
                        "filter": filter,
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
            return pydantic_v1.parse_obj_as(User, _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
