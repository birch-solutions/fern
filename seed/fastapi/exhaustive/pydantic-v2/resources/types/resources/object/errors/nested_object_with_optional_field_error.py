# This file was auto-generated by Fern from our API Definition.

from ......core.exceptions.fern_http_exception import FernHTTPException
from ..types.nested_object_with_optional_field import NestedObjectWithOptionalField


class NestedObjectWithOptionalFieldError(FernHTTPException):
    def __init__(self, error: NestedObjectWithOptionalField):
        super().__init__(status_code=400, name="NestedObjectWithOptionalFieldError", content=error)
