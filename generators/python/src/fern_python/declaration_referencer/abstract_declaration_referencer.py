from abc import ABC, abstractmethod
from typing import Callable, Generic, Optional, Tuple, TypeVar

import fern.ir.resources as ir_types

from fern_python.codegen import AST, ExportStrategy, Filepath

T = TypeVar("T")


class AbstractDeclarationReferencer(ABC, Generic[T]):
    def get_class_reference(
        self,
        *,
        name: T,
        must_import_after_current_declaration: Optional[Callable[[T], bool]] = None,
    ) -> AST.ClassReference:
        filepath = self.get_filepath(name=name)
        return AST.ClassReference(
            import_=AST.ReferenceImport(
                module=filepath.to_module(),
                named_import=self.get_class_name(name=name),
            ),
            qualified_name_excluding_import=(),
            must_import_after_current_declaration=must_import_after_current_declaration(name)
            if must_import_after_current_declaration is not None
            else False,
        )

    @abstractmethod
    def get_filepath(self, *, name: T) -> Filepath:
        ...

    @abstractmethod
    def get_class_name(self, *, name: T) -> str:
        ...

    def _get_directories_for_fern_filepath(
        self,
        *,
        fern_filepath: ir_types.FernFilepath,
    ) -> Tuple[Filepath.DirectoryFilepathPart, ...]:
        parts: Tuple[Filepath.DirectoryFilepathPart, ...] = ()
        for fern_filepath_part in fern_filepath.package_path:
            parts += self._get_directories_for_fern_filepath_part(
                fern_filepath_part=fern_filepath_part,
                export_strategy=ExportStrategy(export_as_namespace=True),
            )
        if fern_filepath.file is not None:
            parts += self._get_directories_for_fern_filepath_part(
                fern_filepath_part=fern_filepath.file,
                export_strategy=ExportStrategy(export_as_namespace=True, export_all=True),
            )
        return parts

    def _get_directories_for_fern_filepath_part(
        self,
        *,
        fern_filepath_part: ir_types.Name,
        export_strategy: ExportStrategy,
    ) -> Tuple[Filepath.DirectoryFilepathPart, ...]:
        return (
            Filepath.DirectoryFilepathPart(
                module_name=fern_filepath_part.snake_case.unsafe_name,
                export_strategy=export_strategy,
            ),
        )
