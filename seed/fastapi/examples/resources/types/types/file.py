# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel


class File(UniversalBaseModel):
    """
    Examples
    --------
    from seed.examples.resources.types import File

    File(
        name="file.txt",
        contents="...",
    )
    """

    name: str
    contents: str
