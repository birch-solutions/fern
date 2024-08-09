import { FERN_PACKAGE_MARKER_FILENAME, generatorsYml } from "@fern-api/configuration";
import { isNonNullish } from "@fern-api/core-utils";
import { AbsoluteFilePath, RelativeFilePath } from "@fern-api/fs-utils";
import { convert } from "@fern-api/openapi-ir-to-fern";
import { OpenApiConvertedFernDefinition } from "@fern-api/openapi-ir-to-fern/src/convert";
import { parse, ParseOpenAPIOptions } from "@fern-api/openapi-parser";
import { TaskContext } from "@fern-api/task-context";
import { isRawProtobufSourceSchema, visitDefinitionFileYamlAst } from "@fern-api/yaml-schema";
import yaml from "js-yaml";
import { mapValues as mapValuesLodash } from "lodash-es";
import { APIChangelog, FernDefinition, Spec } from "../types/Workspace";
import { getAllOpenAPISpecs } from "../utils/getAllOpenAPISpecs";
import { AbstractAPIWorkspace } from "./AbstractAPIWorkspace";
import { FernWorkspace } from "./FernWorkspace";

export declare namespace OSSWorkspace {
    export interface Args {
        absoluteFilepath: AbsoluteFilePath;
        workspaceName: string | undefined;
        specs: Spec[];
        changelog: APIChangelog | undefined;
        generatorsConfiguration: generatorsYml.GeneratorsConfiguration | undefined;
    }

    export interface Settings {
        /*
         * Whether or not to parse unique errors for OpenAPI operation. This is
         * an option that is typically enabled for docs generation.
         */
        enableUniqueErrorsPerEndpoint?: boolean;
        /*
         * Whether or not to parse discriminated unions as undiscriminated unions with literals.
         * Typically enabled for duck typed languages like Python / TypeScript.
         */
        enableDiscriminatedUnionV2?: boolean;
        /*
         * Whether or not to extract frequently used headers out of the endpoints into a
         * global header. This is primarily used for generating SDKs, but disabled for docs
         * as it allows the documentation to more closely mirror the OpenAPI spec.
         */
        detectGlobalHeaders?: boolean;
    }
}

export class OSSWorkspace extends AbstractAPIWorkspace<OSSWorkspace.Settings> {
    public type: "fern" | "oss" = "oss";
    public absoluteFilepath: AbsoluteFilePath;
    public workspaceName: string | undefined;
    public specs: Spec[];
    public changelog: APIChangelog | undefined;
    public generatorsConfiguration: generatorsYml.GeneratorsConfiguration | undefined;

    constructor({ absoluteFilepath, workspaceName, specs, changelog, generatorsConfiguration }: OSSWorkspace.Args) {
        super();
        this.absoluteFilepath = absoluteFilepath;
        this.workspaceName = workspaceName;
        this.specs = specs;
        this.changelog = changelog;
        this.generatorsConfiguration = generatorsConfiguration;
    }

    public async getDefinition(
        {
            context,
            modifySourceFilepath
        }: {
            context: TaskContext;
            modifySourceFilepath?: (original: string) => string;
        },
        settings?: OSSWorkspace.Settings
    ): Promise<FernDefinition> {
        const openApiSpecs = await getAllOpenAPISpecs({ context, specs: this.specs });
        const openApiIr = await parse({
            absoluteFilePathToWorkspace: this.absoluteFilepath,
            specs: openApiSpecs,
            taskContext: context,
            optionOverrides: getOptionsOverridesFromSettings(settings)
        });

        const definition = convert({
            taskContext: context,
            ir: openApiIr,
            enableUniqueErrorsPerEndpoint: settings?.enableUniqueErrorsPerEndpoint ?? false,
            detectGlobalHeaders: settings?.detectGlobalHeaders ?? true
        });

        if (modifySourceFilepath != null) {
            doModifySourceFilepaths({ definition, modifySourceFilepath });
        }

        return {
            // these files doesn't live on disk, so there's no absolute filepath
            absoluteFilepath: AbsoluteFilePath.of("/DUMMY_PATH"),
            rootApiFile: {
                defaultUrl: definition.rootApiFile["default-url"],
                contents: definition.rootApiFile,
                rawContents: yaml.dump(definition.rootApiFile)
            },
            namedDefinitionFiles: {
                ...mapValues(definition.definitionFiles, (definitionFile) => ({
                    // these files doesn't live on disk, so there's no absolute filepath
                    absoluteFilepath: AbsoluteFilePath.of("/DUMMY_PATH"),
                    rawContents: yaml.dump(definitionFile),
                    contents: definitionFile
                })),
                [RelativeFilePath.of(FERN_PACKAGE_MARKER_FILENAME)]: {
                    // these files doesn't live on disk, so there's no absolute filepath
                    absoluteFilepath: AbsoluteFilePath.of("/DUMMY_PATH"),
                    rawContents: yaml.dump(definition.packageMarkerFile),
                    contents: definition.packageMarkerFile
                }
            },
            packageMarkers: {},
            importedDefinitions: {}
        };
    }

    public async toFernWorkspace(
        { context }: { context: TaskContext },
        settings?: OSSWorkspace.Settings
    ): Promise<FernWorkspace> {
        const definition = await this.getDefinition({ context }, settings);
        return new FernWorkspace({
            absoluteFilepath: this.absoluteFilepath,
            workspaceName: this.workspaceName,
            generatorsConfiguration: this.generatorsConfiguration,
            dependenciesConfiguration: {
                dependencies: {}
            },
            definition,
            changelog: this.changelog
        });
    }

    public getAbsoluteFilepaths(): AbsoluteFilePath[] {
        return [
            this.absoluteFilepath,
            ...this.specs
                .flatMap((spec) => [
                    spec.type === "protobuf" ? spec.absoluteFilepathToProtobufTarget : spec.absoluteFilepath,
                    spec.absoluteFilepathToOverrides
                ])
                .filter(isNonNullish)
        ];
    }
}

export function getOSSWorkspaceSettingsFromGeneratorInvocation(
    generatorInvocation: generatorsYml.GeneratorInvocation
): OSSWorkspace.Settings | undefined {
    if (generatorInvocation.settings == null) {
        return undefined;
    }
    const result: OSSWorkspace.Settings = {
        detectGlobalHeaders: true
    };
    if (generatorInvocation.settings.unions === "v1") {
        result.enableDiscriminatedUnionV2 = true;
    }

    return result;
}

function doModifySourceFilepaths({
    definition,
    modifySourceFilepath
}: {
    definition: OpenApiConvertedFernDefinition;
    modifySourceFilepath: (original: string) => string;
}) {
    const definitionFiles = Object.values(definition.definitionFiles);
    definitionFiles.push(definition.packageMarkerFile);

    for (const definitionFile of definitionFiles) {
        visitDefinitionFileYamlAst(definitionFile, {
            typeDeclaration: ({ declaration }) => {
                if (typeof declaration === "string" || declaration.source == null) {
                    return;
                }
                if (isRawProtobufSourceSchema(declaration.source)) {
                    declaration.source.proto = modifySourceFilepath(declaration.source.proto);
                    return;
                }
                declaration.source.openapi = modifySourceFilepath(declaration.source.openapi);
            },
            httpService: (service) => {
                if (service.source == null) {
                    return;
                }
                if (isRawProtobufSourceSchema(service.source)) {
                    service.source.proto = modifySourceFilepath(service.source.proto);
                    return;
                }
                service.source.openapi = modifySourceFilepath(service.source.openapi);
            }
        });
    }
}

function getOptionsOverridesFromSettings(settings?: OSSWorkspace.Settings): Partial<ParseOpenAPIOptions> | undefined {
    if (settings == null) {
        return undefined;
    }
    const result: Partial<ParseOpenAPIOptions> = {};
    if (settings.enableDiscriminatedUnionV2) {
        result.discriminatedUnionV2 = true;
    }
    return result;
}

function mapValues<T extends object, U>(items: T, mapper: (item: T[keyof T]) => U): Record<keyof T, U> {
    return mapValuesLodash(items, mapper) as Record<keyof T, U>;
}
