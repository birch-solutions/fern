# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from ....core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel
from ...commons.types.language import Language
from ...v_2.resources.problem.types.files import Files


class WorkspaceStarterFilesResponseV2(UniversalBaseModel):
    files_by_language: typing.Dict[Language, Files] = pydantic.Field(alias="filesByLanguage")

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="forbid")  # type: ignore # Pydantic v2
    else:

        class Config:
            allow_population_by_field_name = True
            extra = pydantic.Extra.forbid
