# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from ...core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel


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

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
