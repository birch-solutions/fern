# This file was auto-generated by Fern from our API Definition.

from ...core.pydantic_utilities import UniversalBaseModel
from ..commons.imported import Imported


class ImportingType(UniversalBaseModel):
    imported: Imported
