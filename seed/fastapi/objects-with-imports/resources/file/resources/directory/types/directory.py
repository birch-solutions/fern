# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ......core.pydantic_utilities import UniversalBaseModel
import typing
from ....types.file import File
import pydantic
from ......core.pydantic_utilities import update_forward_refs


class Directory(UniversalBaseModel):
    """
    Examples
    --------
    from seed.objects_with_imports.resources.file import File, FileInfo
    from seed.objects_with_imports.resources.file.resources.directory import (
        Directory,
    )

    Directory(
        name="root",
        files=[
            File(
                name="file.txt",
                contents="...",
                info=FileInfo.REGULAR,
            )
        ],
        directories=[
            Directory(
                name="tmp",
                files=[
                    File(
                        name="another_file.txt",
                        contents="...",
                        info=FileInfo.REGULAR,
                    )
                ],
            )
        ],
    )
    """

    name: str
    files: typing.Optional[typing.List[File]] = None
    directories: typing.Optional[typing.List["Directory"]] = None

    class Config:
        extra = pydantic.Extra.forbid


update_forward_refs(Directory)
