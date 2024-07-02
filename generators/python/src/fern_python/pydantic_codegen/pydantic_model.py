from __future__ import annotations

import dataclasses
from types import TracebackType
from typing import (
    Callable,
    Iterable,
    List,
    Literal,
    Optional,
    Sequence,
    Tuple,
    Type,
    Union,
)

from fern_python.codegen import AST, ClassParent, LocalClassReference, SourceFile
from fern_python.external_dependencies import Pydantic, PydanticVersionCompatibility
from pydantic import BaseModel

from .pydantic_field import PydanticField

# these are the properties that BaseModel already has
BASE_MODEL_PROPERTIES = set(dir(BaseModel))


class PydanticModel:
    VALIDATOR_FIELD_VALUE_PARAMETER_NAME = "v"
    VALIDATOR_VALUES_PARAMETER_NAME = "values"

    _PARTIAL_CLASS_NAME = "Partial"

    def __init__(
        self,
        source_file: SourceFile,
        name: str,
        frozen: bool,
        orm_mode: bool,
        smart_union: bool,
        version: PydanticVersionCompatibility,
        is_pydantic_v2: AST.Expression,
        universal_root_validator: Callable[[bool], AST.FunctionInvocation],
        universal_field_validator: Callable[[str, bool], AST.FunctionInvocation],
        require_optional_fields: bool,
        should_export: bool = True,
        base_models: Sequence[AST.ClassReference] = [],
        parent: Optional[ClassParent] = None,
        docstring: Optional[str] = None,
        snippet: Optional[str] = None,
        extra_fields: Optional[Literal["allow", "forbid"]] = None,
        pydantic_base_model: Optional[AST.ClassReference] = None,
        include_model_config: Optional[bool] = True,
    ):
        self._source_file = source_file

        pydantic_base_model = pydantic_base_model or Pydantic.BaseModel()
        self._class_declaration = AST.ClassDeclaration(
            name=name,
            extends=base_models or [pydantic_base_model],
            docstring=AST.Docstring(docstring) if docstring is not None else None,
            snippet=snippet,
        )

        self._base_models = base_models or []
        self._local_class_reference = (parent or source_file).add_class_declaration(
            declaration=self._class_declaration, should_export=should_export
        )
        self._has_aliases = False
        self._version = version
        self._fields: List[PydanticField] = []
        self._extra_fields = extra_fields
        self._frozen = frozen
        self._orm_mode = orm_mode
        self._smart_union = smart_union
        self.name = name
        self._require_optional_fields = require_optional_fields
        self._is_pydantic_v2 = is_pydantic_v2

        self._universal_root_validator = universal_root_validator
        self._universal_field_validator = universal_field_validator

        self._include_model_config = include_model_config

    def to_reference(self) -> LocalClassReference:
        return self._local_class_reference

    def add_field(self, unsanitized_field: PydanticField) -> None:
        field = (
            dataclasses.replace(unsanitized_field, name=f"{unsanitized_field.name}_")
            if unsanitized_field.name in BASE_MODEL_PROPERTIES
            else unsanitized_field
        )

        is_aliased = field.json_field_name != field.name
        self._has_aliases |= is_aliased

        default_value = (
            (
                AST.Expression("None")
                if unsanitized_field.type_hint.is_optional and self._require_optional_fields is False
                else None
            )
            if field.default_value is None
            else field.default_value
        )

        initializer = get_field_name_initializer(
            alias=field.json_field_name if is_aliased else None,
            default_factory=field.default_factory,
            description=field.description,
            default=default_value,
            version=self._version,
        )

        self._class_declaration.add_class_var(
            AST.VariableDeclaration(name=field.name, type_hint=field.type_hint, initializer=initializer)
        )

        self._fields.append(field)

    def get_public_fields(self) -> List[PydanticField]:
        return self._fields

    def add_private_instance_field(
        self, name: str, type_hint: AST.TypeHint, default_factory: Optional[AST.Expression] = None
    ) -> None:
        if not name.startswith("_"):
            raise RuntimeError(
                f"Private pydantic field {name} in {self._class_declaration.name} does not start with an underscore"
            )
        self._class_declaration.add_class_var(
            AST.VariableDeclaration(
                name=name,
                type_hint=type_hint,
                initializer=AST.Expression(
                    AST.ClassInstantiation(
                        Pydantic.PrivateAttr(self._version),
                        kwargs=[("default_factory", default_factory)] if default_factory is not None else [],
                    )
                ),
            )
        )

    def add_class_var(self, name: str, type_hint: AST.TypeHint, initializer: Optional[AST.Expression] = None) -> None:
        self._class_declaration.add_class_var(
            AST.VariableDeclaration(
                name=name,
                type_hint=AST.TypeHint.class_var(class_var_type=type_hint),
                initializer=initializer,
            )
        )

    def add_method(
        self,
        declaration: AST.FunctionDeclaration,
        decorator: Optional[AST.ClassMethodDecorator] = None,
    ) -> AST.FunctionDeclaration:
        return self._class_declaration.add_method(
            declaration=declaration,
            decorator=decorator,
        )

    def add_ghost_reference(self, reference: AST.Reference) -> None:
        self._class_declaration.add_ghost_reference(reference)

    def add_field_validator(
        self,
        validator_name: str,
        field_name: str,
        field_type: AST.TypeHint,
        body: AST.CodeWriter,
        pre: bool = False,
    ) -> None:
        self._class_declaration.add_method(
            decorator=AST.ClassMethodDecorator.CLASS_METHOD,
            no_implicit_decorator=True,
            declaration=AST.FunctionDeclaration(
                name=validator_name,
                signature=AST.FunctionSignature(
                    parameters=[
                        AST.FunctionParameter(
                            name=PydanticModel.VALIDATOR_FIELD_VALUE_PARAMETER_NAME,
                            type_hint=field_type,
                        ),
                        AST.FunctionParameter(
                            name=PydanticModel.VALIDATOR_VALUES_PARAMETER_NAME,
                            type_hint=AST.TypeHint(type=self.get_reference_to_partial_class()),
                        ),
                    ],
                    return_type=field_type,
                ),
                body=body,
                decorators=[self._universal_field_validator(field_name, pre)],
            ),
        )

    def add_root_validator(
        self, *, validator_name: str, body: AST.CodeWriter, should_use_partial_type: bool = False, pre: bool = False
    ) -> None:
        value_type = (
            AST.TypeHint(type=self.get_reference_to_partial_class())
            if should_use_partial_type
            else AST.TypeHint.dict(AST.TypeHint.str_(), AST.TypeHint.any())
        )
        self._class_declaration.add_method(
            decorator=AST.ClassMethodDecorator.CLASS_METHOD,
            no_implicit_decorator=True,
            declaration=AST.FunctionDeclaration(
                name=validator_name,
                signature=AST.FunctionSignature(
                    parameters=[
                        AST.FunctionParameter(name=PydanticModel.VALIDATOR_VALUES_PARAMETER_NAME, type_hint=value_type)
                    ],
                    return_type=value_type,
                ),
                body=body,
                decorators=[self._universal_root_validator(pre)],
            ),
        )

    def add_inner_class(self, inner_class: AST.ClassDeclaration) -> None:
        self._class_declaration.add_class(declaration=inner_class)

    def finish(self) -> None:
        self._maybe_model_config()

    def add_partial_class(self) -> None:
        partial_class = AST.ClassDeclaration(
            name=PydanticModel._PARTIAL_CLASS_NAME,
            extends=[
                dataclasses.replace(
                    base_model,
                    qualified_name_excluding_import=base_model.qualified_name_excluding_import
                    + (PydanticModel._PARTIAL_CLASS_NAME,),
                )
                for base_model in self._base_models
            ]
            if len(self._base_models) > 0
            else [
                AST.ClassReference(
                    import_=AST.ReferenceImport(module=AST.Module.built_in(("typing",))),
                    qualified_name_excluding_import=("TypedDict",),
                )
            ],
        )

        for field in self.get_public_fields():
            partial_class.add_class_var(
                variable_declaration=AST.VariableDeclaration(
                    name=field.name,
                    type_hint=AST.TypeHint.not_required(field.type_hint),
                ),
            )

        self.add_inner_class(inner_class=partial_class)

    def get_reference_to_partial_class(self) -> AST.ClassReference:
        return AST.ClassReference(
            qualified_name_excluding_import=(self.name, PydanticModel._PARTIAL_CLASS_NAME),
            is_forward_reference=True,
        )

    def _maybe_model_config(self) -> Optional[AST.Expression]:
        extra_fields = self._extra_fields
        config_kwargs: List[Tuple[str, AST.Expression]] = [("populate_by_name", AST.Expression("True"))]
        v1_config_kwargs: List[Tuple[str, AST.Expression]] = [
            ("allow_population_by_field_name", AST.Expression("True"))
        ]
        if extra_fields == "allow" or extra_fields == "forbid":
            config_kwargs.append(("extra", AST.Expression(f'"{extra_fields}"')))
            if self._extra_fields == "forbid":
                v1_config_kwargs.append(("extra", Pydantic.Extra.forbid()))
            elif self._extra_fields == "allow":
                v1_config_kwargs.append(("extra", Pydantic.Extra.allow()))

        if self._frozen:
            config_kwargs.append(("frozen", AST.Expression("True")))
            v1_config_kwargs.append(("frozen", AST.Expression("True")))
        if self._orm_mode:
            config_kwargs.append(("from_attributes", AST.Expression("True")))
            v1_config_kwargs.append(("from_orm", AST.Expression("True")))
        if self._smart_union:
            v1_config_kwargs.append(("smart_union", AST.Expression("True")))

        def write_extras(writer: AST.NodeWriter) -> None:
            writer.write("if ")
            # TODO: this class needs a context, then we can call get_is_pydantic_v2
            writer.write_node(self._is_pydantic_v2)
            writer.write_line(":")
            with writer.indent():
                writer.write("model_config: ")
                writer.write_node(AST.TypeHint.class_var(AST.TypeHint(type=Pydantic.ConfigDict())))
                writer.write(" = ")
                writer.write_node(AST.Expression(AST.ClassInstantiation(Pydantic.ConfigDict(), kwargs=config_kwargs)))
            writer.write_newline_if_last_line_not()
            writer.write_line("else:")
            with writer.indent():
                writer.write("model_config: ")
                writer.write_node(AST.TypeHint.class_var(AST.TypeHint(type=Pydantic.ConfigDict())))
                writer.write(" = ")
                writer.write_node(
                    AST.Expression(AST.ClassInstantiation(Pydantic.ConfigDict(), kwargs=v1_config_kwargs))
                )
        if self._include_model_config:
            self._class_declaration.add_expression(AST.Expression(AST.CodeWriter(write_extras)))

    def update_forward_refs(self, localns: Iterable[AST.ClassReference] = []) -> None:
        self._source_file.add_footer_expression(
            AST.Expression(
                AST.FunctionInvocation(
                    function_definition=dataclasses.replace(
                        self._local_class_reference,
                        qualified_name_excluding_import=(
                            *self._local_class_reference.qualified_name_excluding_import,
                            "update_forward_refs",
                        ),
                    ),
                    kwargs=sorted(
                        [(get_named_import_or_throw(reference), AST.Expression(reference)) for reference in localns],
                        # sort by name for consistency
                        key=lambda kwarg: kwarg[0],
                    ),
                )
            )
        )

    def __enter__(self) -> PydanticModel:
        return self

    def __exit__(
        self,
        exctype: Optional[Type[BaseException]],
        excinst: Optional[BaseException],
        exctb: Optional[TracebackType],
    ) -> None:
        self.finish()


def get_field_name_initializer(
    *,
    version: PydanticVersionCompatibility,
    alias: Optional[str],
    default: Optional[AST.Expression],
    default_factory: Optional[AST.Expression],
    description: Optional[str],
) -> Union[AST.Expression, None]:
    if alias is None and default_factory is None and description is None:
        return default

    def write(writer: AST.NodeWriter) -> None:
        writer.write_reference(Pydantic.Field())
        writer.write("(")
        arg_present = False
        if alias is not None:
            arg_present = True
            writer.write(f'alias="{alias}"')
        if default is not None:
            if arg_present:
                writer.write(", ")
            arg_present = True
            writer.write("default=")
            writer.write_node(default)
        if default_factory is not None:
            if arg_present:
                writer.write(", ")
            arg_present = True
            writer.write("default_factory=")
            writer.write_node(default_factory)
        writer.write(")")
        if description is not None:
            writer.write_newline_if_last_line_not()
            writer.write_line('"""')
            writer.write_line(description)
            writer.write_line('"""')

    return AST.Expression(AST.CodeWriter(write))


def get_named_import_or_throw(reference: AST.Reference) -> str:
    if reference.import_ is None or reference.import_.named_import is None:
        raise RuntimeError("No named import defined on reference")
    return reference.import_.named_import
