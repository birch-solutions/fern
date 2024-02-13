# This file was auto-generated by Fern from our API Definition.

import typing

try:
    import typing

    import NotRequired  # type: ignore
except ImportError:
    import NotRequired  # type: ignore
    import typing_extensions


class RequestOptions(typing.TypedDict):
    timeout_in_seconds: NotRequired[int]
    max_retries: NotRequired[int]
    additional_headers: NotRequired[typing.Dict[str, typing.Any]]
    additional_query_parameters: NotRequired[typing.Dict[str, typing.Any]]
    additional_body_parameters: NotRequired[typing.Dict[str, typing.Any]]
