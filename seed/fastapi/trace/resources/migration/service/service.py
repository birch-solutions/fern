# This file was auto-generated by Fern from our API Definition.

from ....core.abstract_fern_service import AbstractFernService
import typing
from ..types.migration import Migration
import abc
import fastapi
import inspect
from ....core.exceptions.fern_http_exception import FernHTTPException
import logging
import functools
from ....core.route_args import get_route_args


class AbstractMigrationService(AbstractFernService):
    """
    AbstractMigrationService is an abstract class containing the methods that you should implement.

    Each method is associated with an API route, which will be registered
    with FastAPI when you register your implementation using Fern's register()
    function.
    """

    @abc.abstractmethod
    def get_attempted_migrations(
        self, *, admin_key_header: str, x_random_header: typing.Optional[str] = None
    ) -> typing.Sequence[Migration]: ...

    """
    Below are internal methods used by Fern to register your implementation.
    You can ignore them.
    """

    @classmethod
    def _init_fern(cls, router: fastapi.APIRouter) -> None:
        cls.__init_get_attempted_migrations(router=router)

    @classmethod
    def __init_get_attempted_migrations(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.get_attempted_migrations)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(
            endpoint_function.parameters.items()
        ):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "admin_key_header":
                new_parameters.append(
                    parameter.replace(default=fastapi.Header(alias="admin-key-header"))
                )
            elif parameter_name == "x_random_header":
                new_parameters.append(
                    parameter.replace(
                        default=fastapi.Header(default=None, alias="X-Random-Header")
                    )
                )
            else:
                new_parameters.append(parameter)
        setattr(
            cls.get_attempted_migrations,
            "__signature__",
            endpoint_function.replace(parameters=new_parameters),
        )

        @functools.wraps(cls.get_attempted_migrations)
        def wrapper(
            *args: typing.Any, **kwargs: typing.Any
        ) -> typing.Sequence[Migration]:
            try:
                return cls.get_attempted_migrations(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'get_attempted_migrations' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.get_attempted_migrations.__globals__)

        router.get(
            path="/migration-info/all",
            response_model=typing.Sequence[Migration],
            description=AbstractMigrationService.get_attempted_migrations.__doc__,
            **get_route_args(cls.get_attempted_migrations, default_tag="migration"),
        )(wrapper)
