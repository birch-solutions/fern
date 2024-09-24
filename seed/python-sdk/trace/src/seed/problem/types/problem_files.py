# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
import typing_extensions
from ...commons.types.file_info import FileInfo
from ...core.serialization import FieldMetadata
import typing
from ...core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class ProblemFiles(UniversalBaseModel):
    solution_file: typing_extensions.Annotated[FileInfo, FieldMetadata(alias="solutionFile")]
    read_only_files: typing_extensions.Annotated[typing.List[FileInfo], FieldMetadata(alias="readOnlyFiles")]

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
