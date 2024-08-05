# This file was auto-generated by Fern from our API Definition.

import abc
import typing

import fastapi


class FernHTTPException(abc.ABC, fastapi.HTTPException):
    def __init__(
        self,
        status_code: int,
        name: typing.Optional[str] = None,
        content: typing.Optional[typing.Any] = None,
    ):
        super().__init__(status_code=status_code)
        self.name = name
        self.status_code = status_code
        self.content = content

    def to_json_response(self) -> fastapi.responses.JSONResponse:
        content = fastapi.encoders.jsonable_encoder(self.content, exclude_none=True)
        return fastapi.responses.JSONResponse(
            content=content, status_code=self.status_code
        )
