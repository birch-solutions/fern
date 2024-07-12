# This file was auto-generated by Fern from our API Definition.

import enum
import typing

T_Result = typing.TypeVar("T_Result")


class MigrationStatus(str, enum.Enum):
    """
    Examples
    --------
    from seed.examples import MigrationStatus

    MigrationStatus.RUNNING
    """

    RUNNING = "RUNNING"
    """
    The migration is running.
    """

    FAILED = "FAILED"
    """
    The migration failed.
    """

    FINISHED = "FINISHED"

    def visit(
        self,
        running: typing.Callable[[], T_Result],
        failed: typing.Callable[[], T_Result],
        finished: typing.Callable[[], T_Result],
    ) -> T_Result:
        if self is MigrationStatus.RUNNING:
            return running()
        if self is MigrationStatus.FAILED:
            return failed()
        if self is MigrationStatus.FINISHED:
            return finished()
