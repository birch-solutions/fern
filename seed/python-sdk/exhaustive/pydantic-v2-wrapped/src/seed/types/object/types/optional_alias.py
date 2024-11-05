# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from ....pydantic import RootModel
import typing


class OptionalAlias(RootModel):
    root: typing.Optional[str]

    def get_as_str(self) -> typing.Optional[str]:
        return self.root

    @staticmethod
    def from_str(value: typing.Optional[str]) -> OptionalAlias:
        return OptionalAlias(root=value)
