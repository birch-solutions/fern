from typing import List, Optional, Set, Union

import fern.ir.resources as ir_types

from fern_python.codegen import AST, LocalClassReference, SourceFile
from fern_python.codegen.ast.references.class_reference import ClassReference
from fern_python.generators.pydantic_model.fern_aware_pydantic_model import (
    FernAwarePydanticModel,
)
from fern_python.pydantic_codegen import PydanticField, PydanticModel
from fern_python.snippet import SnippetWriter

from ....context import PydanticGeneratorContext
from ...custom_config import PydanticModelCustomConfig
from ..abstract_type_generator import AbstractTypeGenerator


class SimpleDiscriminatedUnionGenerator(AbstractTypeGenerator):
    BASE_CLASS_NAME = "Base"
    BASE_CLASS_NAME_WITH_UNDERSCORE = "_Base"

    def __init__(
        self,
        name: ir_types.DeclaredTypeName,
        union: ir_types.UnionTypeDeclaration,
        context: PydanticGeneratorContext,
        source_file: SourceFile,
        custom_config: PydanticModelCustomConfig,
        docs: Optional[str],
        snippet: Optional[str],
    ):
        super().__init__(
            context=context, custom_config=custom_config, source_file=source_file, docs=docs, snippet=snippet
        )
        self._context = context
        self._name = name
        self._union = union
        self._extended_types = self.get_all_extended_types()
        self._property_type_ids = self.get_direct_references_for_union()

    def get_type_id(self, tr: ir_types.TypeReference) -> List[Union[ir_types.TypeId, None]]:
        if tr.get_as_union().type == "named":
            return [tr.get_as_union().type_id]
        elif tr.get_as_union().type == "container":
            return tr.get_as_union().container.visit(
                list_=lambda lt: self.get_type_id(lt),
                map_=lambda mt: self.get_type_id(mt.key_type) + self.get_type_id(mt.value_type),
                optional=lambda ot: self.get_type_id(ot),
                set_=lambda st: self.get_type_id(st),
                literal=lambda _: [],
            )
        return []

    def get_direct_references_for_union(self) -> Set[ir_types.TypeId]:
        property_references = []
        for single_union_type in self._union.types:
            shape = single_union_type.shape.get_as_union()
            if shape.properties_type == "samePropertiesAsObject":
                type_ids = list(
                    map(lambda p: p.value_type, self._context.get_all_properties_including_extensions(shape.type_id))
                )

                property_references += type_ids

        property_type_ids = set()
        for tr in property_references:
            for ti in self.get_type_id(tr):
                if ti is not None:
                    property_type_ids.add(ti)

        return property_type_ids

    def get_all_extended_types(self) -> Set[ir_types.TypeId]:
        extended_types = set()
        for single_union_type in self._union.types:
            shape = single_union_type.shape.get_as_union()
            if shape.properties_type == "samePropertiesAsObject":
                extended_types.add(shape.type_id)
        return extended_types

    def generate(self) -> None:
        single_union_type_references: List[LocalClassReference] = []
        all_referenced_types: List[ir_types.TypeReference] = []

        class_reference_for_base = None
        if len(self._union.base_properties) > 0:
            is_base_class_name_present = False
            for single_union_type in self._union.types:
                type_union = single_union_type.shape.get_as_union()
                if (
                    type_union.properties_type == "samePropertiesAsObject"
                    and type_union.name.pascal_case == SimpleDiscriminatedUnionGenerator.BASE_CLASS_NAME
                ):
                    is_base_class_name_present = True

            base_class_name = (
                SimpleDiscriminatedUnionGenerator.BASE_CLASS_NAME_WITH_UNDERSCORE
                if is_base_class_name_present
                else SimpleDiscriminatedUnionGenerator.BASE_CLASS_NAME
            )
            with FernAwarePydanticModel(
                class_name=base_class_name,
                type_name=self._name,
                extends=[],
                context=self._context,
                custom_config=self._custom_config,
                source_file=self._source_file,
                docstring=None,
                snippet=self._snippet,
                should_export=False,
            ) as base_union_pydantic_model:
                for property in self._union.base_properties:
                    base_union_pydantic_model.add_field(
                        name=property.name.name.snake_case.safe_name,
                        pascal_case_field_name=property.name.name.pascal_case.safe_name,
                        type_reference=property.value_type,
                        json_field_name=property.name.wire_value,
                        description=property.docs,
                    )
                    all_referenced_types.append(property.value_type)
                class_reference_for_base = ClassReference(
                    qualified_name_excluding_import=(base_class_name,),
                )

        for single_union_type in self._union.types:
            base_models = []
            if class_reference_for_base is not None:
                base_models.append(class_reference_for_base)
            shape = single_union_type.shape.get_as_union()
            discriminant_value = self._get_discriminant_value_for_single_union_type(single_union_type)
            if shape.properties_type == "singleProperty":
                with PydanticModel(
                    version=self._custom_config.version,
                    name=get_single_union_type_class_name(self._name, single_union_type.discriminant_value),
                    source_file=self._source_file,
                    base_models=base_models,
                    frozen=self._custom_config.frozen,
                    orm_mode=self._custom_config.orm_mode,
                    smart_union=self._custom_config.smart_union,
                    pydantic_base_model=self._context.core_utilities.get_unchecked_pydantic_base_model(
                        self._custom_config.version
                    ),
                    require_optional_fields=self._custom_config.require_optional_fields,
                ) as internal_pydantic_model_for_single_union_type:
                    internal_pydantic_model_for_single_union_type.add_field(
                        PydanticField(
                            name=shape.name.name.snake_case.safe_name,
                            pascal_case_field_name=shape.name.name.pascal_case.safe_name,
                            json_field_name=shape.name.wire_value,
                            type_hint=self._context.get_type_hint_for_type_reference(type_reference=shape.type),
                        )
                    )

                    internal_pydantic_model_for_single_union_type.add_field(
                        PydanticField(
                            name=get_discriminant_parameter_name(self._union.discriminant),
                            pascal_case_field_name=self._union.discriminant.name.pascal_case.safe_name,
                            type_hint=AST.TypeHint.literal(discriminant_value),
                            json_field_name=self._union.discriminant.wire_value,
                            default_value=discriminant_value,
                        )
                    )
                    all_referenced_types.append(shape.type)
                    internal_single_union_type = internal_pydantic_model_for_single_union_type.to_reference()
                    single_union_type_references.append(internal_single_union_type)

                    self._update_forward_refs(
                        internal_pydantic_model_for_single_union_type=internal_pydantic_model_for_single_union_type,
                        single_union_type=single_union_type,
                    )

            elif shape.properties_type == "samePropertiesAsObject":
                with FernAwarePydanticModel(
                    type_name=None,
                    class_name=get_single_union_type_class_name(self._name, single_union_type.discriminant_value),
                    context=self._context,
                    custom_config=self._custom_config,
                    source_file=self._source_file,
                    docstring=self._docs,
                    snippet=self._snippet,
                    base_models=base_models,
                ) as internal_pydantic_model_for_single_union_type:
                    object_properties = self._context.get_all_properties_including_extensions(shape.type_id)
                    for object_property in object_properties:
                        internal_pydantic_model_for_single_union_type.add_field(
                            name=object_property.name.name.snake_case.safe_name,
                            pascal_case_field_name=object_property.name.name.pascal_case.safe_name,
                            json_field_name=object_property.name.wire_value,
                            type_reference=object_property.value_type,
                        )
                    internal_pydantic_model_for_single_union_type.add_field(
                        name=get_discriminant_parameter_name(self._union.discriminant),
                        pascal_case_field_name=self._union.discriminant.name.pascal_case.safe_name,
                        type_reference=ir_types.TypeReference.factory.container(
                            ir_types.ContainerType.factory.literal(
                                ir_types.Literal.factory.string(single_union_type.discriminant_value.wire_value)
                            )
                        ),
                        json_field_name=self._union.discriminant.wire_value,
                        default_value=discriminant_value,
                    )

                    internal_single_union_type = internal_pydantic_model_for_single_union_type.to_reference()
                    single_union_type_references.append(internal_single_union_type)

            elif shape.properties_type == "noProperties":
                with FernAwarePydanticModel(
                    type_name=None,
                    class_name=get_single_union_type_class_name(self._name, single_union_type.discriminant_value),
                    context=self._context,
                    custom_config=self._custom_config,
                    source_file=self._source_file,
                    docstring=self._docs,
                    snippet=self._snippet,
                    base_models=base_models,
                ) as internal_pydantic_model_for_single_union_type:
                    internal_pydantic_model_for_single_union_type.add_field(
                        name=get_discriminant_parameter_name(self._union.discriminant),
                        pascal_case_field_name=self._union.discriminant.name.pascal_case.safe_name,
                        type_reference=ir_types.TypeReference.factory.container(
                            ir_types.ContainerType.factory.literal(
                                ir_types.Literal.factory.string(single_union_type.discriminant_value.wire_value)
                            )
                        ),
                        json_field_name=self._union.discriminant.wire_value,
                        default_value=discriminant_value,
                    )

                    internal_single_union_type = internal_pydantic_model_for_single_union_type.to_reference()
                    single_union_type_references.append(internal_single_union_type)

            type_hint = (
                AST.TypeHint.union(*(AST.TypeHint(ref) for ref in single_union_type_references))
                if len(single_union_type_references) > 1
                else AST.TypeHint(single_union_type_references[0])
            )
            if self._custom_config.skip_validation:
                type_hint = AST.TypeHint.annotated(
                    type=type_hint,
                    annotation=AST.Expression(
                        AST.ClassInstantiation(
                            class_=self._context.core_utilities.get_union_metadata(),
                            kwargs=[
                                (
                                    "discriminant",
                                    AST.Expression(f'"{self._union.discriminant.wire_value}"'),
                                )
                            ],
                        )
                    ),
                )

        type_alias_declaration = AST.TypeAliasDeclaration(
            type_hint=type_hint,
            name=self._name.name.pascal_case.safe_name,
            snippet=self._snippet,
        )

        for referenced_type in all_referenced_types:
            for type_id in self._context.get_type_names_in_type_reference(referenced_type):
                type_alias_declaration.add_ghost_reference(
                    self._context.get_class_reference_for_type_id(
                        type_id,
                        must_import_after_current_declaration=lambda other_type_name: self._context.does_type_reference_other_type(
                            other_type_name.type_id, type_id
                        ),
                    ),
                )

        self._source_file.add_declaration(
            type_alias_declaration,
            should_export=True,
        )

    def _update_forward_refs(
        self,
        internal_pydantic_model_for_single_union_type: PydanticModel,
        single_union_type: ir_types.SingleUnionType,
    ) -> None:
        # if any of our fields are forward refs, we need to call
        # update_forwards_refs()

        # we assume that the forward-refed types are the ones
        # that circularly reference this union type
        referenced_type_ids: Set[ir_types.TypeId] = single_union_type.shape.visit(
            same_properties_as_object=lambda type_name: self._context.get_referenced_types(type_name.type_id),
            single_property=lambda single_property: self._context.get_referenced_types_of_type_reference(
                single_property.type
            ),
            no_properties=lambda: set(),
        )
        forward_refed_types = [
            referenced_type_id
            for referenced_type_id in referenced_type_ids
            if (
                referenced_type_id not in self._extended_types
                or (referenced_type_id in self._extended_types and referenced_type_id in self._property_type_ids)
            )
            and referenced_type_id != self._name.type_id
            and self._context.does_type_reference_other_type(referenced_type_id, self._name.type_id)
        ]
        if len(forward_refed_types) > 0:
            # when calling update_forward_refs, Pydantic will throw
            # if an inherited field's type is not defined in this
            # file. https://github.com/pydantic/pydantic/issues/4902.
            # as a workaround, we explicitly pass references to update_forward_refs
            # so they are in scope
            internal_pydantic_model_for_single_union_type.update_forward_refs(
                {self._context.get_class_reference_for_type_id(type_id) for type_id in forward_refed_types}
            )

    def _get_discriminant_value_for_single_union_type(
        self,
        single_union_type: ir_types.SingleUnionType,
    ) -> AST.Expression:
        return AST.Expression(f'"{single_union_type.discriminant_value.wire_value}"')


class DiscriminatedUnionSnippetGenerator:
    def __init__(
        self,
        snippet_writer: SnippetWriter,
        name: ir_types.DeclaredTypeName,
        example: Optional[ir_types.ExampleUnionType],
        example_expression: Optional[AST.Expression] = None,
        single_union_type: Optional[ir_types.SingleUnionType] = None,
    ):
        self.snippet_writer = snippet_writer
        self.name = name
        self.example = example
        self.example_expression = example_expression
        self.sut = single_union_type

    def generate_snippet_template(self) -> Union[AST.Expression, None]:
        sut = self.sut
        ex = self.example_expression
        if sut is None or ex is None:
            raise ValueError("Example must be be present to generate snippet.")
        else:
            return sut.shape.visit(
                same_properties_as_object=lambda _: self._get_snippet_for_union_with_same_properties_as_object(
                    name=self.name,
                    wire_discriminant_value=sut.discriminant_value,  # type: ignore
                    example=ex,  # type: ignore
                ),
                single_property=lambda _: self._get_snippet_for_union_with_single_property(
                    name=self.name,
                    wire_discriminant_value=sut.discriminant_value,  # type: ignore
                    example=ex,  # type: ignore
                ),
                no_properties=lambda: self._get_snippet_for_union_with_no_properties(
                    name=self.name,
                ),
            )

    def generate_snippet(self) -> AST.Expression:
        ex = self.example
        if ex is None:
            raise ValueError("Example must be be present to generate snippet.")
        else:
            return ex.single_union_type.shape.visit(
                same_properties_as_object=lambda object: self._get_snippet_for_union_with_same_properties_as_object(
                    name=self.name,
                    wire_discriminant_value=ex.single_union_type.wire_discriminant_value,  # type: ignore
                    example=object,
                ),
                single_property=lambda example_type_reference: self._get_snippet_for_union_with_single_property(
                    name=self.name,
                    wire_discriminant_value=ex.single_union_type.wire_discriminant_value,  # type: ignore
                    example=example_type_reference,
                ),
                no_properties=lambda: self._get_snippet_for_union_with_no_properties(
                    name=self.name,
                ),
            )

    def _get_snippet_for_union_with_same_properties_as_object(
        self,
        name: ir_types.DeclaredTypeName,
        wire_discriminant_value: ir_types.NameAndWireValue,
        example: Union[ir_types.ExampleObjectTypeWithTypeId, AST.Expression],
    ) -> AST.Expression:
        args: List[AST.Expression] = []
        if isinstance(example, ir_types.ExampleObjectTypeWithTypeId):
            args.extend(
                self.snippet_writer.get_snippet_for_object_properties(
                    example=example.object, request_parameter_names={}
                ),
            )
        else:
            args.append(example)

        union_class_reference = self._get_union_class_reference(
            name=name,
            wire_discriminant_value=wire_discriminant_value,
        )

        return AST.Expression(
            AST.ClassInstantiation(
                class_=union_class_reference,
                args=args,
            ),
        )

    def _get_snippet_for_union_with_single_property(
        self,
        name: ir_types.DeclaredTypeName,
        wire_discriminant_value: ir_types.NameAndWireValue,
        example: Union[ir_types.ExampleTypeReference, AST.Expression],
    ) -> AST.Expression:
        union_class_reference = self._get_union_class_reference(
            name=name,
            wire_discriminant_value=wire_discriminant_value,
        )
        union_value = (
            self.snippet_writer.get_snippet_for_example_type_reference(
                example_type_reference=example,
            )
            if isinstance(example, ir_types.ExampleTypeReference)
            else example
        )

        def write_union(writer: AST.NodeWriter) -> None:
            if union_value is not None:
                writer.write_node(AST.Expression(union_class_reference))
                writer.write("(")
                writer.write("value=")
                writer.write_node(union_value)
                writer.write(")")
            else:
                writer.write_node(AST.Expression(union_class_reference))
                writer.write("(")
                writer.write(")")

        return AST.Expression(AST.CodeWriter(write_union))

    def _get_snippet_for_union_with_no_properties(
        self,
        name: ir_types.DeclaredTypeName,
    ) -> AST.Expression:
        union_class_reference = self.snippet_writer.get_class_reference_for_declared_type_name(
            name=name,
        )

        def write_union(writer: AST.NodeWriter) -> None:
            writer.write_node(AST.Expression(union_class_reference))
            writer.write("()")

        return AST.Expression(AST.CodeWriter(write_union))

    def _get_union_class_reference(
        self,
        name: ir_types.DeclaredTypeName,
        wire_discriminant_value: ir_types.NameAndWireValue,
    ) -> AST.ClassReference:
        return AST.ClassReference(
            qualified_name_excluding_import=(),
            import_=AST.ReferenceImport(
                module=AST.Module.snippet(
                    module_path=self.snippet_writer.get_module_path_for_declared_type_name(
                        name=name,
                    ),
                ),
                named_import=get_single_union_type_class_name(
                    name=name, wire_discriminant_value=wire_discriminant_value
                ),
            ),
        )


def get_single_union_type_class_name(
    name: ir_types.DeclaredTypeName, wire_discriminant_value: ir_types.NameAndWireValue
) -> str:
    return f"{get_union_class_name(name)}_{wire_discriminant_value.name.pascal_case.unsafe_name}"


def get_union_class_name(name: ir_types.DeclaredTypeName) -> str:
    return name.name.pascal_case.safe_name


def get_discriminant_parameter_name(discriminant: ir_types.NameAndWireValue) -> str:
    return discriminant.name.snake_case.safe_name


def get_field_name_for_single_property(property: ir_types.SingleUnionTypeProperty) -> str:
    return property.name.name.snake_case.safe_name
