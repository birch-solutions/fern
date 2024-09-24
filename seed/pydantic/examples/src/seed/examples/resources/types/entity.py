# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
from ...type import Type


class Entity(UniversalBaseModel):
    """
    Examples
    --------
    from seed.examples.resources import Entity

    Entity(
        type="unknown",
        name="unknown",
    )
    """

    type: Type
    name: str
