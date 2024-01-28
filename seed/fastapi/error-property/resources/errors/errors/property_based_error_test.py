# This file was auto-generated by Fern from our API Definition.

from ....core.exceptions.fern_http_exception import FernHTTPException
from ..types.property_based_error_test_body import PropertyBasedErrorTestBody


class PropertyBasedErrorTest(FernHTTPException):
    def __init__(self, error: PropertyBasedErrorTestBody):
        super().__init__(status_code=400, name="PropertyBasedErrorTest", content=error)
