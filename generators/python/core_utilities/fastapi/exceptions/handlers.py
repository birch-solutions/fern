import logging

import starlette
import starlette.exceptions

import fastapi

from .fern_http_exception import FernHTTPException


def fern_http_exception_handler(
    request: fastapi.requests.Request,
    exc: FernHTTPException,
    skip_log: bool = False,
) -> fastapi.responses.JSONResponse:
    if not skip_log:
        logging.getLogger(__name__).error(
            f"{exc.__class__.__name__} in {request.url.path}", exc_info=exc
        )
    return exc.to_json_response()


def http_exception_handler(
    request: fastapi.requests.Request,
    exc: starlette.exceptions.HTTPException,
    skip_log: bool = False,
) -> fastapi.responses.JSONResponse:
    if not skip_log:
        logging.getLogger(__name__).error(
            f"{exc.__class__.__name__} in {request.url.path}", exc_info=exc
        )
    return FernHTTPException(
        status_code=exc.status_code, content=exc.detail
    ).to_json_response()


def default_exception_handler(
    request: fastapi.requests.Request,
    exc: Exception,
    skip_log: bool = False,
) -> fastapi.responses.JSONResponse:
    if not skip_log:
        logging.getLogger(__name__).error(
            f"{exc.__class__.__name__} in {request.url.path}", exc_info=exc
        )
    return FernHTTPException(
        status_code=500, content="Internal Server Error"
    ).to_json_response()
