# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
from ....types.id import Id


class User(UniversalBaseModel):
    id: Id
    name: str
    age: int
