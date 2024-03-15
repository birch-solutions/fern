import typing
import uuid

from dateutil import parser

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


def cast_field(json_expectation: typing.Any, type_expectation: typing.Any) -> typing.Any:
    # Cast these specific types which come through as string and expect our
    # models to cast to the correct type.
    if type_expectation == "uuid":
        return uuid.UUID(json_expectation)
    elif type_expectation == "date":
        return parser.parse(json_expectation).date()
    elif type_expectation == "datetime":
        return parser.parse(json_expectation)

    return json_expectation


def validate_field(
    response: typing.Any, json_expectation: typing.Any, type_expectation: typing.Any
) -> None:
    # Parse types in containers, note that dicts are handled within `validate_response`
    if isinstance(json_expectation, list):
        json_expectation = [
            cast_field(ex, type_expectation.get(idx) if isinstance(type_expectation, dict) else None)
            for idx, ex in enumerate(json_expectation)
        ]
    elif isinstance(json_expectation, set):
        json_expectation = set(
            [
                cast_field(ex, type_expectation.get(idx) if isinstance(type_expectation, dict) else None)
                for idx, ex in enumerate(json_expectation)
            ]
        )
    elif type_expectation is not None:
        json_expectation = cast_field(json_expectation, type_expectation)

    assert json_expectation == response, "Primitives found, expected: {0}, Actual: {1}".format(
        json_expectation, response
    )


# type_expectations is a deeply nested structure that matches the response, but with the values replaced with the expected types
def validate_response(response: typing.Any, json_expectation: typing.Any, type_expectations: typing.Any) -> None:
    # if isinstance(json_expectation, list):
    #     map(lambda idx, ex: validate_response(response[idx], ex, type_expectations[idx] if isinstance(type_expectations, list) and idx < len(type_expectations) else None), response)
    if not isinstance(response, dict) and not issubclass(type(response), pydantic.BaseModel):
        validate_field(response=response, json_expectation=json_expectation, type_expectation=type_expectations)
        return

    response_json = response
    if issubclass(type(response), pydantic.BaseModel):
        response_json = response.dict(by_alias=True)

    for idx, (key, value) in enumerate(json_expectation.items()):
        assert key in response_json, "Field {0} not found within the response object: {1}".format(key, response_json)

        # TODO: actually use type_expectations for dict keys, we just validate values right now
        type_expectation = None
        if type_expectations is not None and isinstance(type_expectations, dict):
            # For pydantic objects we use the item key, but for loose dicts, we have the index
            if issubclass(type(response), pydantic.BaseModel):
                type_expectation = type_expectations.get(key)
            else:
                key_value_type_expectation = type_expectations.get(idx)
                if key_value_type_expectation is not None:
                    type_expectation = key_value_type_expectation[1]

        if isinstance(value, dict):
            validate_response(response=response_json[key], json_expectation=value, type_expectations=type_expectation)
        else:
            validate_field(response=response_json[key], json_expectation=value, type_expectation=type_expectation)

        # Ensure there are no additional fields here either
        del response_json[key]
    assert len(response_json) == 0, "Additional fields found, expected None: {0}".format(response_json)
