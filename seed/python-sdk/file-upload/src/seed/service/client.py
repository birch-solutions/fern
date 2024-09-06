# This file was auto-generated by Fern from our API Definition.

import typing
from ..core.client_wrapper import SyncClientWrapper
from .. import core
from .types.my_object import MyObject
from ..core.request_options import RequestOptions
from json.decoder import JSONDecodeError
from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper

# this is used as the default value for optional parameters
OMIT = typing.cast(typing.Any, ...)


class ServiceClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def post(
        self,
        *,
        integer: int,
        file: core.File,
        file_list: typing.List[core.File],
        list_of_objects: typing.List[MyObject],
        maybe_string: typing.Optional[str] = None,
        maybe_file: typing.Optional[core.File] = None,
        maybe_file_list: typing.Optional[typing.List[core.File]] = None,
        maybe_integer: typing.Optional[int] = None,
        optional_list_of_strings: typing.Optional[typing.List[str]] = None,
        optional_metadata: typing.Optional[typing.Optional[typing.Any]] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> None:
        """
        Parameters
        ----------
        integer : int

        file : core.File
            See core.File for more documentation

        file_list : typing.List[core.File]
            See core.File for more documentation

        list_of_objects : typing.List[MyObject]

        maybe_string : typing.Optional[str]

        maybe_file : typing.Optional[core.File]
            See core.File for more documentation

        maybe_file_list : typing.Optional[typing.List[core.File]]
            See core.File for more documentation

        maybe_integer : typing.Optional[int]

        optional_list_of_strings : typing.Optional[typing.List[str]]

        optional_metadata : typing.Optional[typing.Optional[typing.Any]]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        from seed import SeedFileUpload

        client = SeedFileUpload(
            base_url="https://yourhost.com/path/to/api",
        )
        client.service.post()
        """
        _response = self._client_wrapper.httpx_client.request(
            method="POST",
            data={
                "maybeString": maybe_string,
                "integer": integer,
                "maybeInteger": maybe_integer,
                "optionalListOfStrings": optional_list_of_strings,
                "listOfObjects": list_of_objects,
                "optionalMetadata": optional_metadata,
            },
            files={
                "file": file,
                "fileList": file_list,
                "maybeFile": maybe_file,
                "maybeFileList": maybe_file_list,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def just_file(self, *, file: core.File, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Parameters
        ----------
        file : core.File
            See core.File for more documentation

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        from seed import SeedFileUpload

        client = SeedFileUpload(
            base_url="https://yourhost.com/path/to/api",
        )
        client.service.just_file()
        """
        _response = self._client_wrapper.httpx_client.request(
            "just-file",
            method="POST",
            data={},
            files={
                "file": file,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def just_file_with_query_params(
        self,
        *,
        integer: int,
        list_of_strings: typing.Union[str, typing.Sequence[str]],
        file: core.File,
        maybe_string: typing.Optional[str] = None,
        maybe_integer: typing.Optional[int] = None,
        optional_list_of_strings: typing.Optional[typing.Union[str, typing.Sequence[str]]] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> None:
        """
        Parameters
        ----------
        integer : int

        list_of_strings : typing.Union[str, typing.Sequence[str]]

        file : core.File
            See core.File for more documentation

        maybe_string : typing.Optional[str]

        maybe_integer : typing.Optional[int]

        optional_list_of_strings : typing.Optional[typing.Union[str, typing.Sequence[str]]]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        from seed import SeedFileUpload

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
            "just-file-with-query-params",
            method="POST",
            params={
                "maybeString": maybe_string,
                "integer": integer,
                "maybeInteger": maybe_integer,
                "listOfStrings": list_of_strings,
                "optionalListOfStrings": optional_list_of_strings,
            },
            data={},
            files={
                "file": file,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return
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
        integer: int,
        file: core.File,
        file_list: typing.List[core.File],
        list_of_objects: typing.List[MyObject],
        maybe_string: typing.Optional[str] = None,
        maybe_file: typing.Optional[core.File] = None,
        maybe_file_list: typing.Optional[typing.List[core.File]] = None,
        maybe_integer: typing.Optional[int] = None,
        optional_list_of_strings: typing.Optional[typing.List[str]] = None,
        optional_metadata: typing.Optional[typing.Optional[typing.Any]] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> None:
        """
        Parameters
        ----------
        integer : int

        file : core.File
            See core.File for more documentation

        file_list : typing.List[core.File]
            See core.File for more documentation

        list_of_objects : typing.List[MyObject]

        maybe_string : typing.Optional[str]

        maybe_file : typing.Optional[core.File]
            See core.File for more documentation

        maybe_file_list : typing.Optional[typing.List[core.File]]
            See core.File for more documentation

        maybe_integer : typing.Optional[int]

        optional_list_of_strings : typing.Optional[typing.List[str]]

        optional_metadata : typing.Optional[typing.Optional[typing.Any]]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        import asyncio

        from seed import AsyncSeedFileUpload

        client = AsyncSeedFileUpload(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.service.post()


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            method="POST",
            data={
                "maybeString": maybe_string,
                "integer": integer,
                "maybeInteger": maybe_integer,
                "optionalListOfStrings": optional_list_of_strings,
                "listOfObjects": list_of_objects,
                "optionalMetadata": optional_metadata,
            },
            files={
                "file": file,
                "fileList": file_list,
                "maybeFile": maybe_file,
                "maybeFileList": maybe_file_list,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def just_file(self, *, file: core.File, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Parameters
        ----------
        file : core.File
            See core.File for more documentation

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        import asyncio

        from seed import AsyncSeedFileUpload

        client = AsyncSeedFileUpload(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.service.just_file()


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "just-file",
            method="POST",
            data={},
            files={
                "file": file,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)

    async def just_file_with_query_params(
        self,
        *,
        integer: int,
        list_of_strings: typing.Union[str, typing.Sequence[str]],
        file: core.File,
        maybe_string: typing.Optional[str] = None,
        maybe_integer: typing.Optional[int] = None,
        optional_list_of_strings: typing.Optional[typing.Union[str, typing.Sequence[str]]] = None,
        request_options: typing.Optional[RequestOptions] = None,
    ) -> None:
        """
        Parameters
        ----------
        integer : int

        list_of_strings : typing.Union[str, typing.Sequence[str]]

        file : core.File
            See core.File for more documentation

        maybe_string : typing.Optional[str]

        maybe_integer : typing.Optional[int]

        optional_list_of_strings : typing.Optional[typing.Union[str, typing.Sequence[str]]]

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        import asyncio

        from seed import AsyncSeedFileUpload

        client = AsyncSeedFileUpload(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.service.just_file_with_query_params(
                maybe_string="string",
                integer=1,
                maybe_integer=1,
                list_of_strings="string",
                optional_list_of_strings="string",
            )


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            "just-file-with-query-params",
            method="POST",
            params={
                "maybeString": maybe_string,
                "integer": integer,
                "maybeInteger": maybe_integer,
                "listOfStrings": list_of_strings,
                "optionalListOfStrings": optional_list_of_strings,
            },
            data={},
            files={
                "file": file,
            },
            request_options=request_options,
            omit=OMIT,
        )
        try:
            if 200 <= _response.status_code < 300:
                return
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
