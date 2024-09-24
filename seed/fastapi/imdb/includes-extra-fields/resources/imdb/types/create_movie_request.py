# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import pydantic


class CreateMovieRequest(UniversalBaseModel):
    title: str
    rating: float

    class Config:
        extra = pydantic.Extra.allow
