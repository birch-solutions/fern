# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from ....core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from ...commons.types.file_info import FileInfo


class ProblemFiles(UniversalBaseModel):
    solution_file: FileInfo = pydantic.Field(alias="solutionFile")
    read_only_files: typing.List[FileInfo] = pydantic.Field(alias="readOnlyFiles")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="forbid")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.forbid
