# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ...core.pydantic_utilities import UniversalBaseModel
import typing
from .file import File
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic
from ...core.pydantic_utilities import update_forward_refs


class Directory(UniversalBaseModel):
    """
    Examples
    --------
    from seed.types import Directory, File

    Directory(
        name="root",
        files=[
            File(
                name="file.txt",
                contents="...",
            )
        ],
        directories=[
            Directory(
                name="tmp",
                files=[
                    File(
                        name="another_file.txt",
                        contents="...",
                    )
                ],
            )
        ],
    )
    """

    name: str
    files: typing.Optional[typing.List[File]] = None
    directories: typing.Optional[typing.List["Directory"]] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow


update_forward_refs(Directory)
