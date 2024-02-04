import typing

from .fern_http_exception import FernHTTPException


class UnauthorizedException(FernHTTPException):
    """
    This is the exception that is thrown by Fern when auth is not present on a
    request.
    """

    def __init__(self, content: typing.Optional[str] = None) -> None:
        super().__init__(status_code=401, content=content)
