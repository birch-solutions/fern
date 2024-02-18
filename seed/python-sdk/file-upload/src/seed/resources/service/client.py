# This file was auto-generated by Fern from our API Definition.

import typing
import urllib.parse
from json.decoder import JSONDecodeError

from ...core.api_error import ApiError
from ...core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ...core.file_types import FileTypes, convert_file_dict_to_httpx_tuples
from ...core.jsonable_encoder import jsonable_encoder
from ...core.remove_none_from_dict import remove_none_from_dict
from ...core.request_options import RequestOptions
from .types.maybe_list import MaybeList
from .types.maybe_list_or_set import MaybeListOrSet
from .types.my_object import MyObject

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class ServiceClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def post(
        self,
        *,
        maybe_string: typing.Optional[str] = None,
        integer: int,
        file: FileTypes,
        file_list: typing.List[FileTypes],
        maybe_file: typing.Optional[FileTypes] = None,
        maybe_file_list: typing.Optional[typing.List[FileTypes]] = None,
        maybe_integer: typing.Optional[int] = None,
        list_of_strings: typing.List[str],
        set_of_strings: typing.Set[str],
        optional_list_of_strings: typing.Optional[typing.List[str]] = None,
        optional_set_of_strings: typing.Optional[typing.Set[str]] = None,
        maybe_list: MaybeList,
        optional_maybe_list: typing.Optional[MaybeList] = None,
        maybe_list_or_set: MaybeListOrSet,
        optional_maybe_list_or_set: typing.Optional[MaybeListOrSet] = None,
        list_of_objects: typing.List[MyObject],
        request_options: typing.Optional[RequestOptions] = None,
    ) -> None:
        """
        Parameters:
            - maybe_string: typing.Optional[str].

            - integer: int.

            - file: FileTypes.

            - file_list: typing.List[FileTypes].

            - maybe_file: typing.Optional[FileTypes].

            - maybe_file_list: typing.Optional[typing.List[FileTypes]].

            - maybe_integer: typing.Optional[int].

            - list_of_strings: typing.List[str].

            - set_of_strings: typing.Set[str].

            - optional_list_of_strings: typing.Optional[typing.List[str]].

            - optional_set_of_strings: typing.Optional[typing.Set[str]].

            - maybe_list: MaybeList.

            - optional_maybe_list: typing.Optional[MaybeList].

            - maybe_list_or_set: MaybeListOrSet.

            - optional_maybe_list_or_set: typing.Optional[MaybeListOrSet].

            - list_of_objects: typing.List[MyObject].

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        """
        _response = self._client_wrapper.httpx_client.request(
            "POST",
            self._client_wrapper.get_base_url(),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            data=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "maybeString": maybe_string,
                        "integer": integer,
                        "maybeInteger": maybe_integer,
                        "listOfStrings": list_of_strings,
                        "setOfStrings": set_of_strings,
                        "optionalListOfStrings": optional_list_of_strings,
                        "optionalSetOfStrings": optional_set_of_strings,
                        "maybeList": maybe_list,
                        "optionalMaybeList": optional_maybe_list,
                        "maybeListOrSet": maybe_list_or_set,
                        "optionalMaybeListOrSet": optional_maybe_list_or_set,
                        "listOfObjects": list_of_objects,
                    }
                )
            )
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder(
                    remove_none_from_dict(
                        {
                            "maybeString": maybe_string,
                            "integer": integer,
                            "maybeInteger": maybe_integer,
                            "listOfStrings": list_of_strings,
                            "setOfStrings": set_of_strings,
                            "optionalListOfStrings": optional_list_of_strings,
                            "optionalSetOfStrings": optional_set_of_strings,
                            "maybeList": maybe_list,
                            "optionalMaybeList": optional_maybe_list,
                            "maybeListOrSet": maybe_list_or_set,
                            "optionalMaybeListOrSet": optional_maybe_list_or_set,
                            "listOfObjects": list_of_objects,
                        }
                    )
                ),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
            files=convert_file_dict_to_httpx_tuples(
                remove_none_from_dict(
                    {"file": file, "fileList": file_list, "maybeFile": maybe_file, "maybeFileList": maybe_file_list}
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
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def just_file(self, *, file: FileTypes, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Parameters:
            - file: FileTypes.

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        """
        _response = self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "just-file"),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            data=jsonable_encoder(remove_none_from_dict({}))
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder(remove_none_from_dict({})),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
            files=convert_file_dict_to_httpx_tuples(remove_none_from_dict({"file": file})),
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
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def just_file_with_query_params(
        self,
        *,
        maybe_string: typing.Optional[str] = None,
        integer: int,
        maybe_integer: typing.Optional[int] = None,
        list_of_strings: typing.Union[str, typing.List[str]],
        optional_list_of_strings: typing.Optional[typing.Union[str, typing.List[str]]] = None,
        file: FileTypes,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> None:
        """
        Parameters:
            - maybe_string: typing.Optional[str].

            - integer: int.

            - maybe_integer: typing.Optional[int].

            - list_of_strings: typing.Union[str, typing.List[str]].

            - optional_list_of_strings: typing.Optional[typing.Union[str, typing.List[str]]].

            - file: FileTypes.

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        """
        _response = self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "just-file-with-query-params"),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "maybeString": maybe_string,
                        "integer": integer,
                        "maybeInteger": maybe_integer,
                        "listOfStrings": list_of_strings,
                        "optionalListOfStrings": optional_list_of_strings,
                        **(
                            request_options.get("additional_query_parameters", {})
                            if request_options is not None
                            else {}
                        ),
                    }
                )
            ),
            data=jsonable_encoder(remove_none_from_dict({}))
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder(remove_none_from_dict({})),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
            files=convert_file_dict_to_httpx_tuples(remove_none_from_dict({"file": file})),
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
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncServiceClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def post(
        self,
        *,
        maybe_string: typing.Optional[str] = None,
        integer: int,
        file: FileTypes,
        file_list: typing.List[FileTypes],
        maybe_file: typing.Optional[FileTypes] = None,
        maybe_file_list: typing.Optional[typing.List[FileTypes]] = None,
        maybe_integer: typing.Optional[int] = None,
        list_of_strings: typing.List[str],
        set_of_strings: typing.Set[str],
        optional_list_of_strings: typing.Optional[typing.List[str]] = None,
        optional_set_of_strings: typing.Optional[typing.Set[str]] = None,
        maybe_list: MaybeList,
        optional_maybe_list: typing.Optional[MaybeList] = None,
        maybe_list_or_set: MaybeListOrSet,
        optional_maybe_list_or_set: typing.Optional[MaybeListOrSet] = None,
        list_of_objects: typing.List[MyObject],
        request_options: typing.Optional[RequestOptions] = None,
    ) -> None:
        """
        Parameters:
            - maybe_string: typing.Optional[str].

            - integer: int.

            - file: FileTypes.

            - file_list: typing.List[FileTypes].

            - maybe_file: typing.Optional[FileTypes].

            - maybe_file_list: typing.Optional[typing.List[FileTypes]].

            - maybe_integer: typing.Optional[int].

            - list_of_strings: typing.List[str].

            - set_of_strings: typing.Set[str].

            - optional_list_of_strings: typing.Optional[typing.List[str]].

            - optional_set_of_strings: typing.Optional[typing.Set[str]].

            - maybe_list: MaybeList.

            - optional_maybe_list: typing.Optional[MaybeList].

            - maybe_list_or_set: MaybeListOrSet.

            - optional_maybe_list_or_set: typing.Optional[MaybeListOrSet].

            - list_of_objects: typing.List[MyObject].

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        """
        _response = await self._client_wrapper.httpx_client.request(
            "POST",
            self._client_wrapper.get_base_url(),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            data=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "maybeString": maybe_string,
                        "integer": integer,
                        "maybeInteger": maybe_integer,
                        "listOfStrings": list_of_strings,
                        "setOfStrings": set_of_strings,
                        "optionalListOfStrings": optional_list_of_strings,
                        "optionalSetOfStrings": optional_set_of_strings,
                        "maybeList": maybe_list,
                        "optionalMaybeList": optional_maybe_list,
                        "maybeListOrSet": maybe_list_or_set,
                        "optionalMaybeListOrSet": optional_maybe_list_or_set,
                        "listOfObjects": list_of_objects,
                    }
                )
            )
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder(
                    remove_none_from_dict(
                        {
                            "maybeString": maybe_string,
                            "integer": integer,
                            "maybeInteger": maybe_integer,
                            "listOfStrings": list_of_strings,
                            "setOfStrings": set_of_strings,
                            "optionalListOfStrings": optional_list_of_strings,
                            "optionalSetOfStrings": optional_set_of_strings,
                            "maybeList": maybe_list,
                            "optionalMaybeList": optional_maybe_list,
                            "maybeListOrSet": maybe_list_or_set,
                            "optionalMaybeListOrSet": optional_maybe_list_or_set,
                            "listOfObjects": list_of_objects,
                        }
                    )
                ),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
            files=convert_file_dict_to_httpx_tuples(
                remove_none_from_dict(
                    {"file": file, "fileList": file_list, "maybeFile": maybe_file, "maybeFileList": maybe_file_list}
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
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def just_file(self, *, file: FileTypes, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Parameters:
            - file: FileTypes.

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        """
        _response = await self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "just-file"),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            data=jsonable_encoder(remove_none_from_dict({}))
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder(remove_none_from_dict({})),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
            files=convert_file_dict_to_httpx_tuples(remove_none_from_dict({"file": file})),
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
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def just_file_with_query_params(
        self,
        *,
        maybe_string: typing.Optional[str] = None,
        integer: int,
        maybe_integer: typing.Optional[int] = None,
        list_of_strings: typing.Union[str, typing.List[str]],
        optional_list_of_strings: typing.Optional[typing.Union[str, typing.List[str]]] = None,
        file: FileTypes,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> None:
        """
        Parameters:
            - maybe_string: typing.Optional[str].

            - integer: int.

            - maybe_integer: typing.Optional[int].

            - list_of_strings: typing.Union[str, typing.List[str]].

            - optional_list_of_strings: typing.Optional[typing.Union[str, typing.List[str]]].

            - file: FileTypes.

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        """
        _response = await self._client_wrapper.httpx_client.request(
            "POST",
            urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "just-file-with-query-params"),
            params=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "maybeString": maybe_string,
                        "integer": integer,
                        "maybeInteger": maybe_integer,
                        "listOfStrings": list_of_strings,
                        "optionalListOfStrings": optional_list_of_strings,
                        **(
                            request_options.get("additional_query_parameters", {})
                            if request_options is not None
                            else {}
                        ),
                    }
                )
            ),
            data=jsonable_encoder(remove_none_from_dict({}))
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder(remove_none_from_dict({})),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
            files=convert_file_dict_to_httpx_tuples(remove_none_from_dict({"file": file})),
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
            else 60,
        )
        if 200 <= _response.status_code < 300:
            return
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
