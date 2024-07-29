# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

import pydantic

from ....core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel, update_forward_refs
from .file import File


class Directory(UniversalBaseModel):
    """
    Examples
    --------
    from seed.examples.resources.types import Directory, File

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
    directories: typing.Optional[typing.List[Directory]] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="forbid")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid


update_forward_refs(Directory)
