import json
from typing import Optional, Sequence, Tuple, Union, cast
from uuid import uuid4

import fern.ir.resources as ir_types
from fern.generator_exec.resources import GeneratorUpdate, LogLevel, LogUpdate
from fern.generator_exec.resources.config import GeneratorConfig
from fern.generator_exec.resources.readme import BadgeType, GenerateReadmeRequest

from fern_python.cli.abstract_generator import AbstractGenerator
from fern_python.codegen import AST, Project
from fern_python.codegen.filepath import Filepath
from fern_python.generator_exec_wrapper import GeneratorExecWrapper
from fern_python.generators.pydantic_model import PydanticModelGenerator
from fern_python.generators.sdk.context.sdk_generator_context import SdkGeneratorContext
from fern_python.generators.sdk.context.sdk_generator_context_impl import (
    SdkGeneratorContextImpl,
)
from fern_python.generators.sdk.core_utilities.client_wrapper_generator import (
    ClientWrapperGenerator,
)
from fern_python.snippet import SnippetRegistry, SnippetWriter
from fern_python.snippet.snippet_template_factory import SnippetTemplateFactory
from fern_python.snippet.snippet_test_factory import SnippetTestFactory
from fern_python.source_file_factory import SourceFileFactory
from fern_python.utils import build_snippet_writer

from .client_generator.client_generator import ClientGenerator
from .client_generator.generated_root_client import GeneratedRootClient
from .client_generator.oauth_token_provider_generator import OAuthTokenProviderGenerator
from .client_generator.root_client_generator import RootClientGenerator
from .custom_config import SDKCustomConfig
from .environment_generators import (
    GeneratedEnvironment,
    MultipleBaseUrlsEnvironmentGenerator,
    SingleBaseUrlEnvironmentGenerator,
)
from .error_generator.error_generator import ErrorGenerator


class SdkGenerator(AbstractGenerator):
    def should_format_files(
        self,
        *,
        generator_config: GeneratorConfig,
    ) -> bool:
        custom_config = SDKCustomConfig.parse_obj(generator_config.custom_config or {})
        return not custom_config.skip_formatting

    def get_relative_path_to_project_for_publish(
        self,
        *,
        generator_config: GeneratorConfig,
        ir: ir_types.IntermediateRepresentation,
    ) -> Tuple[str, ...]:
        custom_config = SDKCustomConfig.parse_obj(generator_config.custom_config or {})
        if custom_config.package_name is not None:
            return (custom_config.package_name,)
        return (
            (
                generator_config.organization,
                ir.api_name.snake_case.unsafe_name,
            )
            if custom_config.use_api_name_in_package
            else (generator_config.organization,)
        )

    def run(
        self,
        *,
        generator_exec_wrapper: GeneratorExecWrapper,
        ir: ir_types.IntermediateRepresentation,
        generator_config: GeneratorConfig,
        project: Project,
    ) -> None:
        custom_config = SDKCustomConfig.parse_obj(generator_config.custom_config or {})

        if custom_config.client_filename is not None and not custom_config.client_filename.endswith(".py"):
            raise RuntimeError("client_filename must end in .py")

        if not custom_config.client.filename.endswith(".py"):
            raise RuntimeError("client_location.filename must end in .py")

        if not custom_config.client.exported_filename.endswith(".py"):
            raise RuntimeError("client_location.exported_filename must end in .py")

        for dep, version in custom_config.extra_dependencies.items():
            project.add_dependency(dependency=AST.Dependency(name=dep, version=version))

        # Export from root init
        if custom_config.additional_init_exports is not None:
            project.add_init_exports(path=(), exports=custom_config.additional_init_exports)

        self._pydantic_model_custom_config = custom_config.pydantic_config

        context = SdkGeneratorContextImpl(
            ir=ir,
            generator_config=generator_config,
            custom_config=custom_config,
            project_module_path=self.get_relative_path_to_project_for_publish(
                generator_config=generator_config,
                ir=ir,
            ),
        )
        snippet_registry = SnippetRegistry()
        snippet_writer = build_snippet_writer(
            context=context.pydantic_generator_context,
            improved_imports=custom_config.improved_imports,
            use_str_enums=custom_config.pydantic_config.use_str_enums,
        )
        PydanticModelGenerator().generate_types(
            generator_exec_wrapper=generator_exec_wrapper,
            custom_config=self._pydantic_model_custom_config,
            ir=ir,
            project=project,
            context=context.pydantic_generator_context,
            snippet_registry=snippet_registry,
            snippet_writer=snippet_writer,
        )

        generated_environment: Optional[GeneratedEnvironment] = None
        base_environment: Optional[
            Union[SingleBaseUrlEnvironmentGenerator, MultipleBaseUrlsEnvironmentGenerator]
        ] = None
        if ir.environments is not None:
            base_environment = self._generate_environments_base(
                context=context, environments=ir.environments.environments
            )
            generated_environment = self._generate_environments(
                context=context,
                environments=base_environment,
                generator_exec_wrapper=generator_exec_wrapper,
                project=project,
            )

        maybe_oauth_scheme = next(
            (scheme for scheme in context.ir.auth.schemes if scheme.get_as_union().type == "oauth"), None
        )
        oauth_scheme = (
            maybe_oauth_scheme.visit(
                bearer=lambda _: None,
                basic=lambda _: None,
                header=lambda _: None,
                oauth=lambda oauth: oauth,
            )
            if maybe_oauth_scheme is not None and generator_config.generate_oauth_clients
            else None
        )
        if oauth_scheme is not None:
            self._generate_oauth_token_provider(
                context=context,
                ir=ir,
                generator_exec_wrapper=generator_exec_wrapper,
                project=project,
                oauth_scheme=oauth_scheme,
            )

        self._generate_client_wrapper(
            context=context,
            generated_environment=generated_environment,
            generator_exec_wrapper=generator_exec_wrapper,
            project=project,
        )

        self._generate_version(project=project)

        generated_root_client = self._generate_root_client(
            context=context,
            ir=ir,
            generated_environment=generated_environment,
            generator_exec_wrapper=generator_exec_wrapper,
            project=project,
            snippet_registry=snippet_registry,
            snippet_writer=snippet_writer,
            oauth_scheme=oauth_scheme,
        )

        for subpackage_id in ir.subpackages.keys():
            subpackage = ir.subpackages[subpackage_id]
            if subpackage.has_endpoints_in_tree:
                self._generate_subpackage_client(
                    context=context,
                    generator_exec_wrapper=generator_exec_wrapper,
                    subpackage_id=subpackage_id,
                    subpackage=subpackage,
                    project=project,
                    generated_root_client=generated_root_client,
                    snippet_registry=snippet_registry,
                    snippet_writer=snippet_writer,
                )

        for error in ir.errors.values():
            self._generate_error(
                context=context,
                generator_exec_wrapper=generator_exec_wrapper,
                error=error,
                project=project,
            )

        context.core_utilities.copy_to_project(project=project)

        self._maybe_write_snippets(
            context=context,
            snippet_registry=snippet_registry,
            project=project,
        )

        snippet_template_source_file = SourceFileFactory.create_snippet()
        self._maybe_write_snippet_templates(
            context=context,
            snippet_template_factory=SnippetTemplateFactory(
                project=project,
                context=context,
                snippet_writer=snippet_writer,
                imports_manager=snippet_template_source_file.get_imports_manager(),
                ir=ir,
                generated_root_client=generated_root_client,
                generator_exec_wrapper=generator_exec_wrapper,
            ),
            project=project,
            generator_exec_wrapper=generator_exec_wrapper,
            generator_config=generator_config,
            ir=ir,
        )

        test_fac = SnippetTestFactory(
            project=project,
            context=context,
            generator_exec_wrapper=generator_exec_wrapper,
            generated_root_client=generated_root_client,
            generated_environment=base_environment,
        )

        # Only write unit tests if specified in config
        if generator_config.write_unit_tests:
            self._write_snippet_tests(
                snippet_test_factory=test_fac,
                snippet_writer=snippet_writer,
                ir=ir,
            )

        output_mode = generator_config.output.mode.get_as_union()
        if output_mode.type == "github":
            request_sent = self._generate_readme(
                generator_exec_wrapper=generator_exec_wrapper,
                generated_root_client=generated_root_client,
                capitalized_org_name=generator_config.organization.capitalize(),
                project=project,
            )
            if request_sent:
                project.set_generate_readme(False)

    def _generate_environments_base(
        self,
        context: SdkGeneratorContext,
        environments: ir_types.Environments,
    ) -> Union[SingleBaseUrlEnvironmentGenerator, MultipleBaseUrlsEnvironmentGenerator]:
        return cast(
            Union[SingleBaseUrlEnvironmentGenerator, MultipleBaseUrlsEnvironmentGenerator],
            environments.visit(
                single_base_url=lambda single_base_url_environments: SingleBaseUrlEnvironmentGenerator(
                    context=context, environments=single_base_url_environments
                ),
                multiple_base_urls=lambda multiple_base_urls_environments: MultipleBaseUrlsEnvironmentGenerator(
                    context=context, environments=multiple_base_urls_environments
                ),
            ),
        )

    def _generate_environments(
        self,
        context: SdkGeneratorContext,
        environments: Union[SingleBaseUrlEnvironmentGenerator, MultipleBaseUrlsEnvironmentGenerator],
        generator_exec_wrapper: GeneratorExecWrapper,
        project: Project,
    ) -> GeneratedEnvironment:
        filepath = context.get_filepath_for_environments_enum()
        source_file = SourceFileFactory.create(
            project=project, filepath=filepath, generator_exec_wrapper=generator_exec_wrapper
        )
        generated_environment = environments.generate(source_file=source_file)
        project.write_source_file(source_file=source_file, filepath=filepath)
        return generated_environment

    def _generate_client_wrapper(
        self,
        context: SdkGeneratorContext,
        generated_environment: Optional[GeneratedEnvironment],
        generator_exec_wrapper: GeneratorExecWrapper,
        project: Project,
    ) -> None:
        filepath = Filepath(
            directories=context.core_utilities.filepath,
            file=Filepath.FilepathPart(module_name="client_wrapper"),
        )
        source_file = SourceFileFactory.create(
            project=project, filepath=filepath, generator_exec_wrapper=generator_exec_wrapper
        )
        ClientWrapperGenerator(
            context=context,
            generated_environment=generated_environment,
        ).generate(source_file=source_file, project=project)
        project.write_source_file(source_file=source_file, filepath=filepath)

    def _generate_oauth_token_provider(
        self,
        context: SdkGeneratorContext,
        ir: ir_types.IntermediateRepresentation,
        generator_exec_wrapper: GeneratorExecWrapper,
        project: Project,
        oauth_scheme: ir_types.OAuthScheme,
    ) -> None:
        filepath = context.get_filepath_for_generated_oauth_token_provider()
        source_file = SourceFileFactory.create(
            project=project, filepath=filepath, generator_exec_wrapper=generator_exec_wrapper
        )
        OAuthTokenProviderGenerator(
            context=context,
            oauth_scheme=oauth_scheme,
        ).generate(source_file=source_file)
        project.write_source_file(source_file=source_file, filepath=filepath)

    def _generate_root_client(
        self,
        context: SdkGeneratorContext,
        ir: ir_types.IntermediateRepresentation,
        generated_environment: Optional[GeneratedEnvironment],
        generator_exec_wrapper: GeneratorExecWrapper,
        project: Project,
        snippet_registry: SnippetRegistry,
        snippet_writer: SnippetWriter,
        oauth_scheme: Optional[ir_types.OAuthScheme] = None,
    ) -> GeneratedRootClient:
        filepath = context.get_filepath_for_generated_root_client()
        source_file = SourceFileFactory.create(
            project=project, filepath=filepath, generator_exec_wrapper=generator_exec_wrapper
        )
        generated_root_client = RootClientGenerator(
            context=context,
            package=ir.root_package,
            generated_environment=generated_environment,
            class_name=context.get_class_name_for_generated_root_client(),
            async_class_name="Async" + context.get_class_name_for_generated_root_client(),
            snippet_registry=snippet_registry,
            snippet_writer=snippet_writer,
            oauth_scheme=oauth_scheme,
        ).generate(source_file=source_file)
        project.write_source_file(source_file=source_file, filepath=filepath)
        return generated_root_client

    def _generate_subpackage_client(
        self,
        context: SdkGeneratorContext,
        generator_exec_wrapper: GeneratorExecWrapper,
        subpackage_id: ir_types.SubpackageId,
        subpackage: ir_types.Subpackage,
        project: Project,
        generated_root_client: GeneratedRootClient,
        snippet_registry: SnippetRegistry,
        snippet_writer: SnippetWriter,
    ) -> None:
        filepath = context.get_filepath_for_subpackage_service(subpackage_id)
        source_file = SourceFileFactory.create(
            project=project, filepath=filepath, generator_exec_wrapper=generator_exec_wrapper
        )
        ClientGenerator(
            context=context,
            package=subpackage,
            class_name=context.get_class_name_of_subpackage_service(subpackage_id),
            async_class_name=context.get_class_name_of_async_subpackage_service(subpackage_id),
            generated_root_client=generated_root_client,
            snippet_registry=snippet_registry,
            snippet_writer=snippet_writer,
        ).generate(source_file=source_file)
        project.write_source_file(source_file=source_file, filepath=filepath)

    def _generate_error(
        self,
        context: SdkGeneratorContext,
        generator_exec_wrapper: GeneratorExecWrapper,
        error: ir_types.ErrorDeclaration,
        project: Project,
    ) -> None:
        filepath = context.get_filepath_for_error(error.name)
        source_file = SourceFileFactory.create(
            project=project, filepath=filepath, generator_exec_wrapper=generator_exec_wrapper
        )
        ErrorGenerator(context=context, error=error).generate(source_file=source_file)
        project.write_source_file(source_file=source_file, filepath=filepath)

    def _generate_version(
        self,
        project: Project,
    ) -> None:
        if project._project_config is not None:
            filepath = Filepath(
                directories=(),
                file=Filepath.FilepathPart(module_name="version"),
            )
            filepath_nested = project.get_source_file_filepath(filepath, include_src_root=True)
            contents = f"""
from importlib import metadata

__version__ = metadata.version("{project._project_config.package_name}")
"""
            project.add_file(filepath_nested, contents)
            project.register_export_in_project(
                filepath_in_project=filepath,
                exports={"__version__"},
            )

    def _generate_readme(
        self,
        generator_exec_wrapper: GeneratorExecWrapper,
        generated_root_client: GeneratedRootClient,
        capitalized_org_name: str,
        project: Project,
    ) -> bool:
        return generator_exec_wrapper.generate_readme(
            self._new_generate_readme_request(
                generated_root_client=generated_root_client,
                capitalized_org_name=capitalized_org_name,
                project=project,
            ),
        )

    def _new_generate_readme_request(
        self,
        generated_root_client: GeneratedRootClient,
        capitalized_org_name: str,
        project: Project,
    ) -> GenerateReadmeRequest:
        installation: Optional[str] = None
        if project._project_config is not None:
            installation = f"""```sh
pip install --upgrade {project._project_config.package_name}
```"""

        usage_snippet = SourceFileFactory.create_snippet()
        usage_snippet.add_expression(generated_root_client.sync_instantiation)
        usage = "```python\n" + usage_snippet.to_str() + "```\n"

        async_usage_snippet = SourceFileFactory.create_snippet()
        async_usage_snippet.add_expression(generated_root_client.async_instantiation)
        async_usage = "```python\n" + async_usage_snippet.to_str() + "```\n"

        return GenerateReadmeRequest(
            title=f"{capitalized_org_name} Python Library",
            badge=BadgeType.PYPI,
            summary=f"The {capitalized_org_name} Python Library provides convenient access to the {capitalized_org_name} API from applications written in Python.",
            installation=installation,
            usage=usage,
            async_usage=async_usage,
            requirements=[],
        )

    def _maybe_write_snippet_templates(
        self,
        context: SdkGeneratorContext,
        snippet_template_factory: SnippetTemplateFactory,
        project: Project,
        generator_config: GeneratorConfig,
        ir: ir_types.IntermediateRepresentation,
        generator_exec_wrapper: GeneratorExecWrapper,
    ) -> None:
        if context.generator_config.output.snippet_template_filepath is not None:
            org_id = generator_config.organization
            api_name = ir.api_name.original_name
            generator_exec_wrapper.send_update(
                GeneratorUpdate.factory.log(
                    LogUpdate(
                        level=LogLevel.DEBUG,
                        message=f"Generating snippet templates for Org: {org_id}, API: {api_name} for package {project._project_config.package_name if project._project_config is not None else 'package_unknown'} at version: {project._project_config.package_version if project._project_config is not None else '0.0.0'}.",
                    )
                )
            )

            snippets = snippet_template_factory.generate_templates()
            if snippets is None:
                return

            # Send snippets to FDR
            fdr_client = generator_exec_wrapper.fdr_client
            if fdr_client is not None:
                # API Definition ID doesn't matter right now
                try:
                    fdr_client.templates.register_batch(
                        org_id=org_id, api_id=api_name, api_definition_id=uuid4(), snippets=snippets
                    )
                    generator_exec_wrapper.send_update(
                        GeneratorUpdate.factory.log(
                            LogUpdate(level=LogLevel.DEBUG, message=f"Uploaded snippet templates to FDR.")
                        )
                    )
                except Exception as e:
                    # Don't fail hard here, but issue a warning to the user.
                    generator_exec_wrapper.send_update(
                        GeneratorUpdate.factory.log(
                            LogUpdate(
                                level=LogLevel.WARN,
                                message=f"Failed to upload snippet templates to FDR, this is ok: {str(e)}",
                            )
                        )
                    )
            else:
                # Otherwise write them for local
                project.add_file(
                    context.generator_config.output.snippet_template_filepath,
                    json.dumps(list(map(lambda template: template.dict(by_alias=True), snippets)), indent=4),
                )
                generator_exec_wrapper.send_update(
                    GeneratorUpdate.factory.log(
                        LogUpdate(level=LogLevel.DEBUG, message=f"Wrote snippet templates to disk.")
                    )
                )

    def _maybe_write_snippets(
        self,
        context: SdkGeneratorContext,
        snippet_registry: SnippetRegistry,
        project: Project,
    ) -> None:
        if context.generator_config.output.snippet_filepath is not None:
            snippets = snippet_registry.snippets()
            if snippets is None:
                return
            project.add_file(context.generator_config.output.snippet_filepath, snippets.json(indent=4))

    def _write_snippet_tests(
        self,
        snippet_test_factory: SnippetTestFactory,
        snippet_writer: SnippetWriter,
        ir: ir_types.IntermediateRepresentation,
    ) -> None:
        # Write tests
        #
        # TODO(FER-1142): Re-enable this feature as soon as we can.
        # snippet_test_factory.tests(ir, snippet_writer)
        pass

    def get_sorted_modules(self) -> Sequence[str]:
        # always import types/errors before resources (nested packages)
        # to avoid issues with circular imports
        return [".types", ".errors", ".resources"]

    def is_flat_layout(
        self,
        *,
        generator_config: GeneratorConfig,
    ) -> bool:
        custom_config = SDKCustomConfig.parse_obj(generator_config.custom_config or {})
        return custom_config.flat_layout
