import { Values } from "@fern-api/core-utils";
import { RawSchemas } from "@fern-api/fern-definition-schema";
import { AbsoluteFilePath } from "@fern-api/fs-utils";
import { FernFiddle } from "@fern-fern/fiddle-sdk";
import { Audiences } from "../commons";
import { APIDefinitionSettingsSchema } from "./schemas/APIConfigurationSchema";
import { GeneratorInvocationSchema } from "./schemas/GeneratorInvocationSchema";
import { GeneratorsConfigurationSchema } from "./schemas/GeneratorsConfigurationSchema";
import { ReadmeSchema } from "./schemas/ReadmeSchema";

export interface GeneratorsConfiguration {
    api?: APIDefinition;
    apiWideSettings: APIWideSettings | undefined;
    defaultGroup: string | undefined;
    reviewers: Reviewers | undefined;
    groups: GeneratorGroup[];
    whitelabel: FernFiddle.WhitelabelConfig | undefined;

    rawConfiguration: GeneratorsConfigurationSchema;
    absolutePathToConfiguration: AbsoluteFilePath;
}

export interface APIWideSettings {
    shouldInlineTypes: boolean | undefined;
}

export type APIDefinition = SingleNamespaceAPIDefinition | MultiNamespaceAPIDefinition | ConjureAPIDefinition;

export interface SingleNamespaceAPIDefinition
    extends RawSchemas.WithEnvironmentsSchema,
        RawSchemas.WithAuthSchema,
        RawSchemas.WithHeadersSchema {
    type: "singleNamespace";
    definitions: APIDefinitionLocation[];
}

export interface MultiNamespaceAPIDefinition
    extends RawSchemas.WithEnvironmentsSchema,
        RawSchemas.WithAuthSchema,
        RawSchemas.WithHeadersSchema {
    type: "multiNamespace";
    rootDefinitions: APIDefinitionLocation[] | undefined;
    definitions: Record<string, APIDefinitionLocation[]>;
}

export interface ConjureAPIDefinition
    extends RawSchemas.WithEnvironmentsSchema,
        RawSchemas.WithAuthSchema,
        RawSchemas.WithHeadersSchema {
    type: "conjure";
    pathToConjureDefinition: string;
}

export interface APIDefinitionSettings {
    shouldUseTitleAsName: boolean | undefined;
    shouldUseUndiscriminatedUnionsWithLiterals: boolean | undefined;
    asyncApiMessageNaming: "v1" | "v2" | undefined;
    shouldUseOptionalAdditionalProperties: boolean | undefined;
    coerceEnumsToLiterals: boolean | undefined;
}

export interface APIDefinitionLocation {
    schema: APIDefinitionSchema;
    origin: string | undefined;
    overrides: string | undefined;
    audiences: string[] | undefined;
    settings: APIDefinitionSettings | undefined;
}

export type APIDefinitionSchema = ProtoAPIDefinitionSchema | OSSAPIDefinitionSchema;

export interface ProtoAPIDefinitionSchema {
    type: "protobuf";
    root: string;
    target: string;
    localGeneration: boolean;
}

export interface OSSAPIDefinitionSchema {
    type: "oss";
    path: string;
}

export interface GeneratorGroup {
    groupName: string;
    audiences: Audiences;
    generators: GeneratorInvocation[];
    reviewers: Reviewers | undefined;
}

export interface Reviewer {
    name: string;
}

export interface Reviewers {
    teams?: Reviewer[] | undefined;
    users?: Reviewer[] | undefined;
}

export interface GeneratorInvocation {
    raw?: GeneratorInvocationSchema;

    name: string;
    irVersionOverride: string | undefined;
    version: string;
    config: unknown;
    // Note this also includes a reviewers block for PR mode, it's from fiddle
    // and the same schema
    outputMode: FernFiddle.remoteGen.OutputMode;
    absolutePathToLocalOutput: AbsoluteFilePath | undefined;
    absolutePathToLocalSnippets: AbsoluteFilePath | undefined;
    keywords: string[] | undefined;
    smartCasing: boolean;
    disableExamples: boolean;
    language: GenerationLanguage | undefined;
    publishMetadata: FernFiddle.remoteGen.PublishingMetadata | undefined;
    readme: ReadmeSchema | undefined;
    settings: APIDefinitionSettingsSchema | undefined;
}

export const GenerationLanguage = {
    TYPESCRIPT: "typescript",
    JAVA: "java",
    PYTHON: "python",
    GO: "go",
    RUBY: "ruby",
    CSHARP: "csharp",
    SWIFT: "swift",
    PHP: "php"
} as const;

export type GenerationLanguage = Values<typeof GenerationLanguage>;

export function getPackageName({
    generatorInvocation
}: {
    generatorInvocation: GeneratorInvocation;
}): string | undefined {
    return generatorInvocation.outputMode._visit<string | undefined>({
        downloadFiles: () => undefined,
        github: (val) =>
            val.publishInfo?._visit<string | undefined>({
                maven: (val) => val.coordinate,
                npm: (val) => val.packageName,
                pypi: (val) => val.packageName,
                postman: () => undefined,
                rubygems: (val) => val.packageName,
                nuget: (val) => val.packageName,
                _other: () => undefined
            }),
        githubV2: (val) =>
            val.publishInfo?._visit<string | undefined>({
                maven: (val) => val.coordinate,
                npm: (val) => val.packageName,
                pypi: (val) => val.packageName,
                postman: () => undefined,
                rubygems: (val) => val.packageName,
                nuget: (val) => val.packageName,
                _other: () => undefined
            }),
        publish: () => undefined,
        publishV2: () => undefined,
        _other: () => undefined
    });
}
