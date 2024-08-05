from core_utilities.sdk.http_client import get_request_body
from core_utilities.sdk.request_options import RequestOptions


def get_request_options() -> RequestOptions:
    return {"additional_body_parameters": {"see you": "later"}}


def test_get_json_request_body() -> None:
    json_body, data_body = get_request_body(
        json={"hello": "world"}, data=None, request_options=None, omit=None
    )
    assert json_body == {"hello": "world"}
    assert data_body is None

    json_body_extras, data_body_extras = get_request_body(
        json={"goodbye": "world"},
        data=None,
        request_options=get_request_options(),
        omit=None,
    )

    assert json_body_extras == {"goodbye": "world", "see you": "later"}
    assert data_body_extras is None


def test_get_files_request_body() -> None:
    json_body, data_body = get_request_body(
        json=None, data={"hello": "world"}, request_options=None, omit=None
    )
    assert data_body == {"hello": "world"}
    assert json_body is None

    json_body_extras, data_body_extras = get_request_body(
        json=None,
        data={"goodbye": "world"},
        request_options=get_request_options(),
        omit=None,
    )

    assert data_body_extras == {"goodbye": "world", "see you": "later"}
    assert json_body_extras is None


def test_get_none_request_body() -> None:
    json_body, data_body = get_request_body(
        json=None, data=None, request_options=None, omit=None
    )
    assert data_body is None
    assert json_body is None

    json_body_extras, data_body_extras = get_request_body(
        json=None, data=None, request_options=get_request_options(), omit=None
    )

    assert json_body_extras == {"see you": "later"}
    assert data_body_extras is None
