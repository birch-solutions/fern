# This file was auto-generated by Fern from our API Definition.

from ....core.pydantic_utilities import UniversalBaseModel
import typing
from ...commons.types.language import Language
from .workspace_files import WorkspaceFiles
import pydantic


class WorkspaceStarterFilesResponse(UniversalBaseModel):
    files: typing.Dict[Language, WorkspaceFiles]

    class Config:
        extra = pydantic.Extra.forbid
