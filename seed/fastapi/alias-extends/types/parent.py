# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel


class Parent(UniversalBaseModel):
    """
    Examples
    --------
    from seed.alias_extends import Parent

    Parent(
        parent="Property from the parent",
    )
    """

    parent: str
