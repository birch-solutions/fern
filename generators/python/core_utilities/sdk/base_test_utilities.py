import typing

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore


def validate_response(response: typing.Any, json_expectation: typing.Any) -> None:
    if not issubclass(type(response), pydantic.BaseModel):
        assert response == json_expectation, "Primitives found, expected: {0}, Actual: {1}".format(json_expectation, response)
    
    response_dict = response.__dict__
    for key, value in json_expectation.items():
        assert key in response
        if isinstance(value, dict):
            validate_response(response_dict[key], value)
        else:
            assert response[key] == value
        
        # Ensure there are no additional fields here either
        del response[key]
    assert len(response) == 0, "Additional fields found, expected None: {0}".format(response)