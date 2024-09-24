# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing
from .problem_description_board import ProblemDescriptionBoard
import pydantic


class ProblemDescription(UniversalBaseModel):
    boards: typing.List[ProblemDescriptionBoard]

    class Config:
        extra = pydantic.Extra.forbid
