from dataclasses import dataclass
from typing import List, Optional

import fern.ir.resources as ir_types

from fern_python.codegen import AST, SourceFile
from fern_python.snippet import SnippetWriter

from ...context import PydanticGeneratorContext
from ..custom_config import PydanticModelCustomConfig
from ..fern_aware_pydantic_model import FernAwarePydanticModel
from .abstract_type_generator import AbstractTypeGenerator


@dataclass
class ObjectProperty:
    name: ir_types.NameAndWireValue
    value_type: ir_types.TypeReference
    docs: Optional[str]


class ObjectGenerator(AbstractTypeGenerator):
    def __init__(
        self,
        name: Optional[ir_types.DeclaredTypeName],
        class_name: str,
        extends: List[ir_types.DeclaredTypeName],
        properties: List[ObjectProperty],
        context: PydanticGeneratorContext,
        source_file: SourceFile,
        custom_config: PydanticModelCustomConfig,
        docs: Optional[str],
        snippet: Optional[str] = None,
    ):
        super().__init__(
            context=context, custom_config=custom_config, source_file=source_file, docs=docs, snippet=snippet
        )
        self._name = name
        self._class_name = class_name
        self._extends = extends
        self._properties = properties

    def generate(self) -> None:
        with FernAwarePydanticModel(
            class_name=self._class_name,
            type_name=self._name,
            extends=self._extends,
            context=self._context,
            custom_config=self._custom_config,
            source_file=self._source_file,
            docstring=self._docs,
            snippet=self._snippet,
        ) as pydantic_model:
            for property in self._properties:
                pydantic_model.add_field(
                    name=property.name.name.snake_case.safe_name,
                    pascal_case_field_name=property.name.name.pascal_case.safe_name,
                    type_reference=property.value_type,
                    json_field_name=property.name.wire_value,
                    description=property.docs,
                )


class ObjectSnippetGenerator:
    def __init__(
        self,
        snippet_writer: SnippetWriter,
        name: ir_types.DeclaredTypeName,
        example: ir_types.ExampleObjectType,
    ):
        self.name = name
        self.example = example
        self.snippet_writer = snippet_writer

    def generate_snippet(self) -> AST.Expression:
        return AST.Expression(
            AST.ClassInstantiation(
                class_=self.snippet_writer.get_class_reference_for_declared_type_name(
                    name=self.name,
                ),
                args=self.snippet_writer.get_snippet_for_object_properties(
                    example=self.example,
                ),
            ),
        )
