# This file was auto-generated by Fern from our API Definition.

import typing
import urllib.parse
from json.decoder import JSONDecodeError

from .....core.api_error import ApiError
from .....core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from .....core.jsonable_encoder import jsonable_encoder
from .....core.remove_none_from_dict import remove_none_from_dict
from .....core.request_options import RequestOptions
from ....types.resources.object.types.object_with_required_field import ObjectWithRequiredField

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class ContainerClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def get_and_return_list_of_primitives(
        self, *, request: typing.List[str], request_options: typing.Optional[RequestOptions] = None
    ) -> typing.List[str]:
        """
        Parameters:
            - request: typing.List[str].

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        """
        _response = self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "container/list-of-primitives"),
            params=jsonable_encoder(request_options.additional_query_parameters if request_options is not None else {}),
            json=jsonable_encoder(request)
            if request_options is None or request_options.additional_body_parameters is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.additional_body_parameters))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.additional_headers if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.timeout_in_seconds
            if request_options is not None and request_options.timeout_in_seconds is not None
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(typing.List[str], _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_and_return_list_of_objects(
        self, *, request: typing.List[ObjectWithRequiredField], request_options: typing.Optional[RequestOptions] = None
    ) -> typing.List[ObjectWithRequiredField]:
        """
        Parameters:
            - request: typing.List[ObjectWithRequiredField].

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        """
        _response = self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "container/list-of-objects"),
            params=jsonable_encoder(request_options.additional_query_parameters if request_options is not None else {}),
            json=jsonable_encoder(request)
            if request_options is None or request_options.additional_body_parameters is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.additional_body_parameters))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.additional_headers if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.timeout_in_seconds
            if request_options is not None and request_options.timeout_in_seconds is not None
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(typing.List[ObjectWithRequiredField], _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_and_return_set_of_primitives(
        self, *, request: typing.Set[str], request_options: typing.Optional[RequestOptions] = None
    ) -> typing.Set[str]:
        """
        Parameters:
            - request: typing.Set[str].

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        """
        _response = self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "container/set-of-primitives"),
            params=jsonable_encoder(request_options.additional_query_parameters if request_options is not None else {}),
            json=jsonable_encoder(request)
            if request_options is None or request_options.additional_body_parameters is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.additional_body_parameters))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.additional_headers if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.timeout_in_seconds
            if request_options is not None and request_options.timeout_in_seconds is not None
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(typing.Set[str], _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_and_return_set_of_objects(
        self, *, request: typing.List[ObjectWithRequiredField], request_options: typing.Optional[RequestOptions] = None
    ) -> typing.List[ObjectWithRequiredField]:
        """
        Parameters:
            - request: typing.List[ObjectWithRequiredField].

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        """
        _response = self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "container/set-of-objects"),
            params=jsonable_encoder(request_options.additional_query_parameters if request_options is not None else {}),
            json=jsonable_encoder(request)
            if request_options is None or request_options.additional_body_parameters is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.additional_body_parameters))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.additional_headers if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.timeout_in_seconds
            if request_options is not None and request_options.timeout_in_seconds is not None
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(typing.List[ObjectWithRequiredField], _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_and_return_map_prim_to_prim(
        self, *, request: typing.Dict[str, str], request_options: typing.Optional[RequestOptions] = None
    ) -> typing.Dict[str, str]:
        """
        Parameters:
            - request: typing.Dict[str, str].

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        """
        _response = self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "container/map-prim-to-prim"),
            params=jsonable_encoder(request_options.additional_query_parameters if request_options is not None else {}),
            json=jsonable_encoder(request)
            if request_options is None or request_options.additional_body_parameters is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.additional_body_parameters))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.additional_headers if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.timeout_in_seconds
            if request_options is not None and request_options.timeout_in_seconds is not None
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(typing.Dict[str, str], _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_and_return_map_of_prim_to_object(
        self,
        *,
        request: typing.Dict[str, ObjectWithRequiredField],
        request_options: typing.Optional[RequestOptions] = None,
    ) -> typing.Dict[str, ObjectWithRequiredField]:
        """
        Parameters:
            - request: typing.Dict[str, ObjectWithRequiredField].

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        """
        _response = self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "container/map-prim-to-object"),
            params=jsonable_encoder(request_options.additional_query_parameters if request_options is not None else {}),
            json=jsonable_encoder(request)
            if request_options is None or request_options.additional_body_parameters is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.additional_body_parameters))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.additional_headers if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.timeout_in_seconds
            if request_options is not None and request_options.timeout_in_seconds is not None
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(typing.Dict[str, ObjectWithRequiredField], _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def get_and_return_optional(
        self,
        *,
        request: typing.Optional[ObjectWithRequiredField] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> typing.Optional[ObjectWithRequiredField]:
        """
        Parameters:
            - request: typing.Optional[ObjectWithRequiredField].

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        """
        _response = self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "container/opt-objects"),
            params=jsonable_encoder(request_options.additional_query_parameters if request_options is not None else {}),
            json=jsonable_encoder(request)
            if request_options is None or request_options.additional_body_parameters is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.additional_body_parameters))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.additional_headers if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.timeout_in_seconds
            if request_options is not None and request_options.timeout_in_seconds is not None
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(typing.Optional[ObjectWithRequiredField], _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncContainerClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def get_and_return_list_of_primitives(
        self, *, request: typing.List[str], request_options: typing.Optional[RequestOptions] = None
    ) -> typing.List[str]:
        """
        Parameters:
            - request: typing.List[str].

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        """
        _response = await self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "container/list-of-primitives"),
            params=jsonable_encoder(request_options.additional_query_parameters if request_options is not None else {}),
            json=jsonable_encoder(request)
            if request_options is None or request_options.additional_body_parameters is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.additional_body_parameters))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.additional_headers if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.timeout_in_seconds
            if request_options is not None and request_options.timeout_in_seconds is not None
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(typing.List[str], _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_and_return_list_of_objects(
        self, *, request: typing.List[ObjectWithRequiredField], request_options: typing.Optional[RequestOptions] = None
    ) -> typing.List[ObjectWithRequiredField]:
        """
        Parameters:
            - request: typing.List[ObjectWithRequiredField].

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        """
        _response = await self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "container/list-of-objects"),
            params=jsonable_encoder(request_options.additional_query_parameters if request_options is not None else {}),
            json=jsonable_encoder(request)
            if request_options is None or request_options.additional_body_parameters is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.additional_body_parameters))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.additional_headers if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.timeout_in_seconds
            if request_options is not None and request_options.timeout_in_seconds is not None
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(typing.List[ObjectWithRequiredField], _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_and_return_set_of_primitives(
        self, *, request: typing.Set[str], request_options: typing.Optional[RequestOptions] = None
    ) -> typing.Set[str]:
        """
        Parameters:
            - request: typing.Set[str].

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        """
        _response = await self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "container/set-of-primitives"),
            params=jsonable_encoder(request_options.additional_query_parameters if request_options is not None else {}),
            json=jsonable_encoder(request)
            if request_options is None or request_options.additional_body_parameters is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.additional_body_parameters))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.additional_headers if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.timeout_in_seconds
            if request_options is not None and request_options.timeout_in_seconds is not None
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(typing.Set[str], _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_and_return_set_of_objects(
        self, *, request: typing.List[ObjectWithRequiredField], request_options: typing.Optional[RequestOptions] = None
    ) -> typing.List[ObjectWithRequiredField]:
        """
        Parameters:
            - request: typing.List[ObjectWithRequiredField].

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        """
        _response = await self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "container/set-of-objects"),
            params=jsonable_encoder(request_options.additional_query_parameters if request_options is not None else {}),
            json=jsonable_encoder(request)
            if request_options is None or request_options.additional_body_parameters is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.additional_body_parameters))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.additional_headers if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.timeout_in_seconds
            if request_options is not None and request_options.timeout_in_seconds is not None
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(typing.List[ObjectWithRequiredField], _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_and_return_map_prim_to_prim(
        self, *, request: typing.Dict[str, str], request_options: typing.Optional[RequestOptions] = None
    ) -> typing.Dict[str, str]:
        """
        Parameters:
            - request: typing.Dict[str, str].

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        """
        _response = await self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "container/map-prim-to-prim"),
            params=jsonable_encoder(request_options.additional_query_parameters if request_options is not None else {}),
            json=jsonable_encoder(request)
            if request_options is None or request_options.additional_body_parameters is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.additional_body_parameters))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.additional_headers if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.timeout_in_seconds
            if request_options is not None and request_options.timeout_in_seconds is not None
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(typing.Dict[str, str], _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_and_return_map_of_prim_to_object(
        self,
        *,
        request: typing.Dict[str, ObjectWithRequiredField],
        request_options: typing.Optional[RequestOptions] = None,
    ) -> typing.Dict[str, ObjectWithRequiredField]:
        """
        Parameters:
            - request: typing.Dict[str, ObjectWithRequiredField].

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        """
        _response = await self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "container/map-prim-to-object"),
            params=jsonable_encoder(request_options.additional_query_parameters if request_options is not None else {}),
            json=jsonable_encoder(request)
            if request_options is None or request_options.additional_body_parameters is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.additional_body_parameters))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.additional_headers if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.timeout_in_seconds
            if request_options is not None and request_options.timeout_in_seconds is not None
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(typing.Dict[str, ObjectWithRequiredField], _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def get_and_return_optional(
        self,
        *,
        request: typing.Optional[ObjectWithRequiredField] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> typing.Optional[ObjectWithRequiredField]:
        """
        Parameters:
            - request: typing.Optional[ObjectWithRequiredField].

            - request_options: typing.Optional[RequestOptions]. Additional options for request-specific configuration when calling APIs via the SDK.
        """
        _response = await self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "container/opt-objects"),
            params=jsonable_encoder(request_options.additional_query_parameters if request_options is not None else {}),
            json=jsonable_encoder(request)
            if request_options is None or request_options.additional_body_parameters is None
            else {
                **jsonable_encoder(request),
                **(jsonable_encoder(remove_none_from_dict(request_options.additional_body_parameters))),
            },
            headers=jsonable_encoder(
                remove_none_from_dict(
                    {
                        **self._client_wrapper.get_headers(),
                        **(request_options.additional_headers if request_options is not None else {}),
                    }
                )
            ),
            timeout=request_options.timeout_in_seconds
            if request_options is not None and request_options.timeout_in_seconds is not None
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return pydantic.parse_obj_as(typing.Optional[ObjectWithRequiredField], _response.json())  # type: ignore
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
