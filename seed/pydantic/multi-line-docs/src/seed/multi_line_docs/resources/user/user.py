# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import pydantic
import typing


class User(UniversalBaseModel):
    """
    A user object. This type is used throughout the following APIs:

    - createUser
    - getUser
    """

    id: str
    name: str = pydantic.Field()
    """
    The user's name. This name is unique to each user. A few examples are included below:
    
    - Alice
    - Bob
    - Charlie
    """

    age: typing.Optional[int] = pydantic.Field(default=None)
    """
    The user's age.
    """

    class Config:
        extra = pydantic.Extra.allow
