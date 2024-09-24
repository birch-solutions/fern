# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
from .file_info import FileInfo


class File(UniversalBaseModel):
    """
    Examples
    --------
    from seed.objects_with_imports.resources import File

    File(
        name="file.txt",
        contents="...",
        info="REGULAR",
    )
    """

    name: str
    contents: str
    info: FileInfo
