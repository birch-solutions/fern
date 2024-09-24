# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel


class Actress(UniversalBaseModel):
    """
    Examples
    --------
    from seed.examples.resources import Actress

    Actress(
        name="Jennifer Lawrence",
        id="actor_456",
    )
    """

    name: str
    id: str
