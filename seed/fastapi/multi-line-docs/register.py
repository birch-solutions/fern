# This file was auto-generated by Fern from our API Definition.

import fastapi
from .resources.user.service.service import AbstractUserService
import typing
from fastapi import params
from .core.exceptions.fern_http_exception import FernHTTPException
from .core.exceptions import fern_http_exception_handler
import starlette.exceptions
from .core.exceptions import http_exception_handler
from .core.exceptions import default_exception_handler
from .core.abstract_fern_service import AbstractFernService
import types
import os
import glob
import importlib


def register(
    _app: fastapi.FastAPI,
    *,
    user: AbstractUserService,
    dependencies: typing.Optional[typing.Sequence[params.Depends]] = None,
) -> None:
    _app.include_router(__register_service(user), dependencies=dependencies)

    _app.add_exception_handler(FernHTTPException, fern_http_exception_handler)  # type: ignore
    _app.add_exception_handler(
        starlette.exceptions.HTTPException, http_exception_handler
    )  # type: ignore
    _app.add_exception_handler(Exception, default_exception_handler)  # type: ignore


def __register_service(service: AbstractFernService) -> fastapi.APIRouter:
    router = fastapi.APIRouter()
    type(service)._init_fern(router)
    return router


def register_validators(module: types.ModuleType) -> None:
    validators_directory: str = os.path.dirname(module.__file__)  # type: ignore
    for path in glob.glob(
        os.path.join(validators_directory, "**/*.py"), recursive=True
    ):
        if os.path.isfile(path):
            relative_path = os.path.relpath(path, start=validators_directory)
            module_path = ".".join([module.__name__] + relative_path[:-3].split("/"))
            importlib.import_module(module_path)
