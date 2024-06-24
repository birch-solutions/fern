import { docsYml, generatorsYml } from "@fern-api/configuration";
import { AbsoluteFilePath, RelativeFilePath } from "@fern-api/fs-utils";
import { DefinitionFileSchema, PackageMarkerFileSchema, RootApiFileSchema } from "@fern-api/yaml-schema";
import { FernWorkspace } from "../workspaces/FernWorkspace";
import { OSSWorkspace } from "../workspaces/OSSWorkspace";
import { ParsedFernFile } from "./FernFile";

export type Workspace = DocsWorkspace | FernWorkspace | OSSWorkspace;

export interface DocsWorkspace {
    type: "docs";
    workspaceName: string | undefined;
    absoluteFilepath: AbsoluteFilePath; // path to the fern folder (dirname(absoluteFilepathToDocsConfig))
    absoluteFilepathToDocsConfig: AbsoluteFilePath;
    config: docsYml.RawSchemas.DocsConfiguration;
}

export interface Spec {
    absoluteFilepath: AbsoluteFilePath;
    absoluteFilepathToOverrides: AbsoluteFilePath | undefined;
    settings?: SpecImportSettings;
}

export interface SpecImportSettings {
    audiences: string[];
    shouldUseTitleAsName: boolean;
    shouldUseUndiscriminatedUnionsWithLiterals: boolean;
}
export interface APIChangelog {
    files: ChangelogFile[];
}

export interface ChangelogFile {
    absoluteFilepath: AbsoluteFilePath;
    contents: string;
}

export interface OpenAPIFile {
    absoluteFilepath: AbsoluteFilePath;
    contents: string;
}

export interface AsyncAPIFile {
    absoluteFilepath: AbsoluteFilePath;
    contents: string;
}

export interface FernDefinition {
    absoluteFilepath: AbsoluteFilePath;
    rootApiFile: ParsedFernFile<RootApiFileSchema>;
    namedDefinitionFiles: Record<RelativeFilePath, OnDiskNamedDefinitionFile>;
    packageMarkers: Record<RelativeFilePath, ParsedFernFile<PackageMarkerFileSchema>>;
    importedDefinitions: Record<RelativeFilePath, FernDefinition>;
}

export interface OnDiskNamedDefinitionFile extends ParsedFernFile<DefinitionFileSchema> {
    absoluteFilepath: AbsoluteFilePath;
}

export interface FernWorkspaceMetadata {
    workspace: FernWorkspace;
    absolutePathToPreview: AbsoluteFilePath | undefined;
    group: generatorsYml.GeneratorGroup;
}
