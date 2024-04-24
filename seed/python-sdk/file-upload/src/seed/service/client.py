# This file was auto-generated by Fern from our API Definition.

import typing
import urllib.parse
from json.decoder import JSONDecodeError

from .. import core
from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.jsonable_encoder import jsonable_encoder
from ..core.remove_none_from_dict import remove_none_from_dict
from ..core.request_options import RequestOptions
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
        file: core.File,
        file_list: typing.List[core.File],
        maybe_file: typing.Optional[core.File] = None,
        maybe_file_list: typing.Optional[typing.List[core.File]] = None,
        maybe_integer: typing.Optional[int] = None,
        optional_list_of_strings: typing.Optional[typing.List[str]] = None,
        list_of_objects: typing.List[MyObject],
        request_options: typing.Optional[RequestOptions] = None,
    ) -> None:
        """
        Parameters:
            - maybe_string: typing.Optional[str].

            - integer: int.

            - file: core.File. See core.File for more documentation

            - file_list: typing.List[core.File]. See core.File for more documentation

            - maybe_file: typing.Optional[core.File]. See core.File for more documentation

            - maybe_file_list: typing.Optional[typing.List[core.File]]. See core.File for more documentation

            - maybe_integer: typing.Optional[int].

            - optional_list_of_strings: typing.Optional[typing.List[str]].

            - list_of_objects: typing.List[MyObject].

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import SeedFileUpload

        client = SeedFileUpload(
            base_url="https://yourhost.com/path/to/api",
        )
        client.service.post()
        """
        _response = self._client_wrapper.httpx_client.request(
            method="POST",
            url=self._client_wrapper.get_base_url(),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            data=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "maybeString": maybe_string,
                        "integer": integer,
                        "maybeInteger": maybe_integer,
                        "optionalListOfStrings": optional_list_of_strings,
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
                            "optionalListOfStrings": optional_list_of_strings,
                            "listOfObjects": list_of_objects,
                        }
                    )
                ),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
            files=core.convert_file_dict_to_httpx_tuples(
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
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        if 200 <= _response.status_code < 300:
            return
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def just_file(self, *, file: core.File, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Parameters:
            - file: core.File. See core.File for more documentation

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import SeedFileUpload

        client = SeedFileUpload(
            base_url="https://yourhost.com/path/to/api",
        )
        client.service.just_file()
        """
        _response = self._client_wrapper.httpx_client.request(
            method="POST",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "just-file"),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            data=jsonable_encoder(remove_none_from_dict({}))
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder(remove_none_from_dict({})),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
            files=core.convert_file_dict_to_httpx_tuples(remove_none_from_dict({"file": file})),
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
        list_of_strings: typing.Union[str, typing.Sequence[str]],
        optional_list_of_strings: typing.Optional[typing.Union[str, typing.Sequence[str]]] = None,
        file: core.File,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> None:
        """
        Parameters:
            - maybe_string: typing.Optional[str].

            - integer: int.

            - maybe_integer: typing.Optional[int].

            - list_of_strings: typing.Union[str, typing.Sequence[str]].

            - optional_list_of_strings: typing.Optional[typing.Union[str, typing.Sequence[str]]].

            - file: core.File. See core.File for more documentation

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import SeedFileUpload

        client = SeedFileUpload(
            base_url="https://yourhost.com/path/to/api",
        )
        client.service.just_file_with_query_params(
            maybe_string="string",
            integer=1,
            maybe_integer=1,
            list_of_strings="string",
            optional_list_of_strings="string",
        )
        """
        _response = self._client_wrapper.httpx_client.request(
            method="POST",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "just-file-with-query-params"),
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
            files=core.convert_file_dict_to_httpx_tuples(remove_none_from_dict({"file": file})),
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
        file: core.File,
        file_list: typing.List[core.File],
        maybe_file: typing.Optional[core.File] = None,
        maybe_file_list: typing.Optional[typing.List[core.File]] = None,
        maybe_integer: typing.Optional[int] = None,
        optional_list_of_strings: typing.Optional[typing.List[str]] = None,
        list_of_objects: typing.List[MyObject],
        request_options: typing.Optional[RequestOptions] = None,
    ) -> None:
        """
        Parameters:
            - maybe_string: typing.Optional[str].

            - integer: int.

            - file: core.File. See core.File for more documentation

            - file_list: typing.List[core.File]. See core.File for more documentation

            - maybe_file: typing.Optional[core.File]. See core.File for more documentation

            - maybe_file_list: typing.Optional[typing.List[core.File]]. See core.File for more documentation

            - maybe_integer: typing.Optional[int].

            - optional_list_of_strings: typing.Optional[typing.List[str]].

            - list_of_objects: typing.List[MyObject].

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import AsyncSeedFileUpload

        client = AsyncSeedFileUpload(
            base_url="https://yourhost.com/path/to/api",
        )
        await client.service.post()
        """
        _response = await self._client_wrapper.httpx_client.request(
            method="POST",
            url=self._client_wrapper.get_base_url(),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            data=jsonable_encoder(
                remove_none_from_dict(
                    {
                        "maybeString": maybe_string,
                        "integer": integer,
                        "maybeInteger": maybe_integer,
                        "optionalListOfStrings": optional_list_of_strings,
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
                            "optionalListOfStrings": optional_list_of_strings,
                            "listOfObjects": list_of_objects,
                        }
                    )
                ),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
            files=core.convert_file_dict_to_httpx_tuples(
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
            else self._client_wrapper.get_timeout(),
            retries=0,
            max_retries=request_options.get("max_retries") if request_options is not None else 0,  # type: ignore
        )
        if 200 <= _response.status_code < 300:
            return
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def just_file(self, *, file: core.File, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Parameters:
            - file: core.File. See core.File for more documentation

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import AsyncSeedFileUpload

        client = AsyncSeedFileUpload(
            base_url="https://yourhost.com/path/to/api",
        )
        await client.service.just_file()
        """
        _response = await self._client_wrapper.httpx_client.request(
            method="POST",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "just-file"),
            params=jsonable_encoder(
                request_options.get("additional_query_parameters") if request_options is not None else None
            ),
            data=jsonable_encoder(remove_none_from_dict({}))
            if request_options is None or request_options.get("additional_body_parameters") is None
            else {
                **jsonable_encoder(remove_none_from_dict({})),
                **(jsonable_encoder(remove_none_from_dict(request_options.get("additional_body_parameters", {})))),
            },
            files=core.convert_file_dict_to_httpx_tuples(remove_none_from_dict({"file": file})),
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
        list_of_strings: typing.Union[str, typing.Sequence[str]],
        optional_list_of_strings: typing.Optional[typing.Union[str, typing.Sequence[str]]] = None,
        file: core.File,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> None:
        """
        Parameters:
            - maybe_string: typing.Optional[str].

            - integer: int.

            - maybe_integer: typing.Optional[int].

            - list_of_strings: typing.Union[str, typing.Sequence[str]].

            - optional_list_of_strings: typing.Optional[typing.Union[str, typing.Sequence[str]]].

            - file: core.File. See core.File for more documentation

            - request_options: typing.Optional[RequestOptions]. Request-specific configuration.
        ---
        from seed.client import AsyncSeedFileUpload

        client = AsyncSeedFileUpload(
            base_url="https://yourhost.com/path/to/api",
        )
        await client.service.just_file_with_query_params(
            maybe_string="string",
            integer=1,
            maybe_integer=1,
            list_of_strings="string",
            optional_list_of_strings="string",
        )
        """
        _response = await self._client_wrapper.httpx_client.request(
            method="POST",
            url=urllib.parse.urljoin(f"{self._client_wrapper.get_base_url()}/", "just-file-with-query-params"),
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
            files=core.convert_file_dict_to_httpx_tuples(remove_none_from_dict({"file": file})),
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
            return
        try:
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
