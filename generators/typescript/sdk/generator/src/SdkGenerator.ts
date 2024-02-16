import { AbsoluteFilePath } from "@fern-api/fs-utils";
import { FernGeneratorExec } from "@fern-fern/generator-exec-sdk";
import * as FernGeneratorExecSerializers from "@fern-fern/generator-exec-sdk/serialization";
import { ExampleEndpointCall, HttpEndpoint, HttpService, IntermediateRepresentation } from "@fern-fern/ir-sdk/api";
import {
    BundledTypescriptProject,
    convertExportedFilePathToFilePath,
    CoreUtilitiesManager,
    DependencyManager,
    DependencyType,
    ExportedDirectory,
    ExportedFilePath,
    ExportsManager,
    getTextOfTsNode,
    ImportsManager,
    JavaScriptRuntime,
    NpmPackage,
    PackageId,
    SimpleTypescriptProject,
    TypescriptProject
} from "@fern-typescript/commons";
import { GeneratorContext } from "@fern-typescript/contexts";
import { EndpointErrorUnionGenerator } from "@fern-typescript/endpoint-error-union-generator";
import { EnvironmentsGenerator } from "@fern-typescript/environments-generator";
import { GenericAPISdkErrorGenerator, TimeoutSdkErrorGenerator } from "@fern-typescript/generic-sdk-error-generators";
import { RequestWrapperGenerator } from "@fern-typescript/request-wrapper-generator";
import { ErrorResolver, PackageResolver, TypeResolver } from "@fern-typescript/resolvers";
import { SdkClientClassGenerator } from "@fern-typescript/sdk-client-class-generator";
import { SdkEndpointTypeSchemasGenerator } from "@fern-typescript/sdk-endpoint-type-schemas-generator";
import { SdkErrorGenerator } from "@fern-typescript/sdk-error-generator";
import { SdkErrorSchemaGenerator } from "@fern-typescript/sdk-error-schema-generator";
import { SdkInlinedRequestBodySchemaGenerator } from "@fern-typescript/sdk-inlined-request-schema-generator";
import { TypeGenerator } from "@fern-typescript/type-generator";
import { TypeReferenceExampleGenerator } from "@fern-typescript/type-reference-example-generator";
import { TypeSchemaGenerator } from "@fern-typescript/type-schema-generator";
import { writeFile } from "fs/promises";
import { Directory, Project, SourceFile, ts } from "ts-morph";
import urlJoin from "url-join";
import { SdkContextImpl } from "./contexts/SdkContextImpl";
import { EndpointDeclarationReferencer } from "./declaration-referencers/EndpointDeclarationReferencer";
import { EnvironmentsDeclarationReferencer } from "./declaration-referencers/EnvironmentsDeclarationReferencer";
import { GenericAPISdkErrorDeclarationReferencer } from "./declaration-referencers/GenericAPISdkErrorDeclarationReferencer";
import { RequestWrapperDeclarationReferencer } from "./declaration-referencers/RequestWrapperDeclarationReferencer";
import { SdkClientClassDeclarationReferencer } from "./declaration-referencers/SdkClientClassDeclarationReferencer";
import { SdkErrorDeclarationReferencer } from "./declaration-referencers/SdkErrorDeclarationReferencer";
import { SdkInlinedRequestBodyDeclarationReferencer } from "./declaration-referencers/SdkInlinedRequestBodyDeclarationReferencer";
import { TimeoutSdkErrorDeclarationReferencer } from "./declaration-referencers/TimeoutSdkErrorDeclarationReferencer";
import { TypeDeclarationReferencer } from "./declaration-referencers/TypeDeclarationReferencer";
import { ReferenceGenerator, ReferenceParameterDeclaration } from "./ReferenceGenerator";

const FILE_HEADER = `/**
 * This file was auto-generated by Fern from our API Definition.
 */
`;

const WHITELABEL_FILE_HEADER = `/**
 * This file was auto-generated from our API Definition.
 */
`;

export declare namespace SdkGenerator {
    export interface Init {
        namespaceExport: string;
        intermediateRepresentation: IntermediateRepresentation;
        context: GeneratorContext;
        npmPackage: NpmPackage | undefined;
        generateJestTests: boolean;
        config: Config;
    }

    export interface Config {
        whitelabel: boolean;
        snippetFilepath: AbsoluteFilePath | undefined;
        shouldBundle: boolean;
        shouldUseBrandedStringAliases: boolean;
        isPackagePrivate: boolean;
        neverThrowErrors: boolean;
        includeCredentialsOnCrossOriginRequests: boolean;
        outputEsm: boolean;
        allowCustomFetcher: boolean;
        includeUtilsOnUnionMembers: boolean;
        includeOtherInUnionTypes: boolean;
        requireDefaultEnvironment: boolean;
        defaultTimeoutInSeconds: number | "infinity" | undefined;
        skipResponseValidation: boolean;
        targetRuntime: JavaScriptRuntime;
        extraDependencies: Record<string, string>;
        extraDevDependencies: Record<string, string>;
        treatUnknownAsAny: boolean;
        includeContentHeadersOnFileDownloadResponse: boolean;
        includeSerdeLayer: boolean;
        noOptionalProperties: boolean;
        includeApiReference: boolean;
    }
}

export class SdkGenerator {
    private context: GeneratorContext;
    private intermediateRepresentation: IntermediateRepresentation;
    private config: SdkGenerator.Config;
    private npmPackage: NpmPackage | undefined;
    private generateJestTests: boolean;
    private extraFiles: Record<string, string> = {};
    private extraScripts: Record<string, string> = {};

    private endpointSnippets: FernGeneratorExec.Endpoint[] = [];

    private project: Project;
    private rootDirectory: Directory;
    private exportsManager: ExportsManager;
    private dependencyManager = new DependencyManager();
    private coreUtilitiesManager: CoreUtilitiesManager;
    private typeResolver: TypeResolver;
    private errorResolver: ErrorResolver;
    private packageResolver: PackageResolver;

    private typeDeclarationReferencer: TypeDeclarationReferencer;
    private typeSchemaDeclarationReferencer: TypeDeclarationReferencer;
    private errorDeclarationReferencer: SdkErrorDeclarationReferencer;
    private sdkErrorSchemaDeclarationReferencer: SdkErrorDeclarationReferencer;
    private sdkClientClassDeclarationReferencer: SdkClientClassDeclarationReferencer;
    private endpointErrorUnionDeclarationReferencer: EndpointDeclarationReferencer;
    private requestWrapperDeclarationReferencer: RequestWrapperDeclarationReferencer;
    private sdkInlinedRequestBodySchemaDeclarationReferencer: SdkInlinedRequestBodyDeclarationReferencer;
    private sdkEndpointSchemaDeclarationReferencer: EndpointDeclarationReferencer;
    private environmentsDeclarationReferencer: EnvironmentsDeclarationReferencer;
    private genericAPISdkErrorDeclarationReferencer: GenericAPISdkErrorDeclarationReferencer;
    private timeoutSdkErrorDeclarationReferencer: TimeoutSdkErrorDeclarationReferencer;

    private typeGenerator: TypeGenerator;
    private typeSchemaGenerator: TypeSchemaGenerator;
    private typeReferenceExampleGenerator: TypeReferenceExampleGenerator;
    private sdkErrorGenerator: SdkErrorGenerator;
    private sdkErrorSchemaGenerator: SdkErrorSchemaGenerator;
    private endpointErrorUnionGenerator: EndpointErrorUnionGenerator;
    private requestWrapperGenerator: RequestWrapperGenerator;
    private sdkInlinedRequestBodySchemaGenerator: SdkInlinedRequestBodySchemaGenerator;
    private sdkEndpointTypeSchemasGenerator: SdkEndpointTypeSchemasGenerator;
    private environmentsGenerator: EnvironmentsGenerator;
    private sdkClientClassGenerator: SdkClientClassGenerator;
    private genericAPISdkErrorGenerator: GenericAPISdkErrorGenerator;
    private timeoutSdkErrorGenerator: TimeoutSdkErrorGenerator;

    constructor({
        namespaceExport,
        intermediateRepresentation,
        context,
        npmPackage,
        config,
        generateJestTests
    }: SdkGenerator.Init) {
        this.context = context;
        this.intermediateRepresentation = intermediateRepresentation;
        this.config = config;
        this.npmPackage = npmPackage;
        this.generateJestTests = generateJestTests;

        this.exportsManager = new ExportsManager();
        this.coreUtilitiesManager = new CoreUtilitiesManager();

        this.project = new Project({
            useInMemoryFileSystem: true
        });
        this.rootDirectory = this.project.createDirectory("/");
        this.typeResolver = new TypeResolver(intermediateRepresentation);
        this.errorResolver = new ErrorResolver(intermediateRepresentation);
        this.packageResolver = new PackageResolver(intermediateRepresentation);

        const apiDirectory: ExportedDirectory[] = [
            {
                nameOnDisk: "api",
                exportDeclaration: { namespaceExport }
            }
        ];

        const schemaDirectory: ExportedDirectory[] = [
            {
                nameOnDisk: "serialization"
            }
        ];

        this.typeDeclarationReferencer = new TypeDeclarationReferencer({
            containingDirectory: apiDirectory,
            namespaceExport
        });
        this.typeSchemaDeclarationReferencer = new TypeDeclarationReferencer({
            containingDirectory: schemaDirectory,
            namespaceExport
        });
        this.errorDeclarationReferencer = new SdkErrorDeclarationReferencer({
            containingDirectory: apiDirectory,
            namespaceExport
        });
        this.sdkErrorSchemaDeclarationReferencer = new SdkErrorDeclarationReferencer({
            containingDirectory: schemaDirectory,
            namespaceExport
        });
        this.sdkClientClassDeclarationReferencer = new SdkClientClassDeclarationReferencer({
            containingDirectory: apiDirectory,
            namespaceExport,
            packageResolver: this.packageResolver
        });
        this.endpointErrorUnionDeclarationReferencer = new EndpointDeclarationReferencer({
            containingDirectory: apiDirectory,
            namespaceExport,
            packageResolver: this.packageResolver
        });
        this.requestWrapperDeclarationReferencer = new RequestWrapperDeclarationReferencer({
            containingDirectory: apiDirectory,
            namespaceExport,
            packageResolver: this.packageResolver
        });
        this.sdkInlinedRequestBodySchemaDeclarationReferencer = new SdkInlinedRequestBodyDeclarationReferencer({
            containingDirectory: schemaDirectory,
            namespaceExport,
            packageResolver: this.packageResolver
        });
        this.sdkEndpointSchemaDeclarationReferencer = new EndpointDeclarationReferencer({
            containingDirectory: schemaDirectory,
            namespaceExport,
            packageResolver: this.packageResolver
        });
        this.environmentsDeclarationReferencer = new EnvironmentsDeclarationReferencer({
            containingDirectory: [],
            namespaceExport,
            environmentsConfig: intermediateRepresentation.environments ?? undefined
        });
        this.genericAPISdkErrorDeclarationReferencer = new GenericAPISdkErrorDeclarationReferencer({
            containingDirectory: [],
            namespaceExport
        });
        this.timeoutSdkErrorDeclarationReferencer = new TimeoutSdkErrorDeclarationReferencer({
            containingDirectory: [],
            namespaceExport
        });

        this.typeGenerator = new TypeGenerator({
            useBrandedStringAliases: config.shouldUseBrandedStringAliases,
            includeUtilsOnUnionMembers: config.includeUtilsOnUnionMembers,
            includeOtherInUnionTypes: config.includeOtherInUnionTypes,
            includeSerdeLayer: config.includeSerdeLayer,
            noOptionalProperties: config.noOptionalProperties
        });
        this.typeSchemaGenerator = new TypeSchemaGenerator({
            includeUtilsOnUnionMembers: config.includeUtilsOnUnionMembers,
            noOptionalProperties: config.noOptionalProperties
        });
        this.typeReferenceExampleGenerator = new TypeReferenceExampleGenerator();
        this.sdkErrorGenerator = new SdkErrorGenerator({
            neverThrowErrors: config.neverThrowErrors
        });
        this.sdkErrorSchemaGenerator = new SdkErrorSchemaGenerator({
            skipValidation: config.skipResponseValidation,
            includeSerdeLayer: config.includeSerdeLayer
        });
        this.endpointErrorUnionGenerator = new EndpointErrorUnionGenerator({
            errorResolver: this.errorResolver,
            intermediateRepresentation,
            includeSerdeLayer: config.includeSerdeLayer,
            noOptionalProperties: config.noOptionalProperties
        });
        this.sdkEndpointTypeSchemasGenerator = new SdkEndpointTypeSchemasGenerator({
            errorResolver: this.errorResolver,
            intermediateRepresentation,
            shouldGenerateErrors: config.neverThrowErrors,
            skipResponseValidation: config.skipResponseValidation,
            includeSerdeLayer: config.includeSerdeLayer
        });
        this.requestWrapperGenerator = new RequestWrapperGenerator();
        this.environmentsGenerator = new EnvironmentsGenerator();
        this.sdkClientClassGenerator = new SdkClientClassGenerator({
            intermediateRepresentation,
            errorResolver: this.errorResolver,
            packageResolver: this.packageResolver,
            neverThrowErrors: config.neverThrowErrors,
            includeCredentialsOnCrossOriginRequests: config.includeCredentialsOnCrossOriginRequests,
            allowCustomFetcher: config.allowCustomFetcher,
            requireDefaultEnvironment: config.requireDefaultEnvironment,
            defaultTimeoutInSeconds: config.defaultTimeoutInSeconds,
            npmPackage,
            targetRuntime: config.targetRuntime,
            includeContentHeadersOnFileDownloadResponse: config.includeContentHeadersOnFileDownloadResponse,
            includeSerdeLayer: config.includeSerdeLayer
        });
        this.genericAPISdkErrorGenerator = new GenericAPISdkErrorGenerator();
        this.timeoutSdkErrorGenerator = new TimeoutSdkErrorGenerator();
        this.sdkInlinedRequestBodySchemaGenerator = new SdkInlinedRequestBodySchemaGenerator({
            includeSerdeLayer: config.includeSerdeLayer
        });
    }

    public async generate(): Promise<TypescriptProject> {
        this.generateTypeDeclarations();
        this.context.logger.debug("Generated types");
        this.generateErrorDeclarations();
        this.context.logger.debug("Generated errors");
        this.generateServiceDeclarations();
        this.context.logger.debug("Generated services");
        this.generateEnvironments();
        this.context.logger.debug("Generated environments");
        this.generateRequestWrappers();
        this.context.logger.debug("Generated request wrappers");

        if (this.config.neverThrowErrors) {
            this.generateEndpointErrorUnion();
        } else {
            this.generateGenericAPISdkError();
            this.generateTimeoutSdkError();
            if (this.config.includeSerdeLayer) {
                this.generateSdkErrorSchemas();
            }
        }

        if (this.config.includeSerdeLayer) {
            this.generateTypeSchemas();
            this.generateEndpointTypeSchemas();
            this.generateInlinedRequestBodySchemas();
            this.context.logger.debug("Generated serde layer.");
        }
        this.coreUtilitiesManager.finalize(this.exportsManager, this.dependencyManager);
        this.exportsManager.writeExportsToProject(this.rootDirectory);
        this.context.logger.debug("Generated exports");

        if (this.generateJestTests) {
            this.dependencyManager.addDependency("jest", "^29.7.0", { type: DependencyType.DEV });
            this.dependencyManager.addDependency("@types/jest", "^29.5.5", { type: DependencyType.DEV });
            this.dependencyManager.addDependency("ts-jest", "^29.1.1", { type: DependencyType.DEV });

            this.extraFiles["tests/client.test.ts"] = `/**
* This is a test file for the SDK.
* 
* Add any tests here and make sure to mark this file
* in \`.fernignore\`. 
*/
describe("test", () => {
    it("default", () => {
        expect(true).toBe(true);
    });
});`;
            this.extraFiles["jest.config.js"] = `/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
};`;
            this.extraScripts.test = "jest";
        }

        if (this.config.snippetFilepath != null) {
            let refGenerator: ReferenceGenerator | undefined;
            if (this.config.includeApiReference) {
                refGenerator = new ReferenceGenerator({
                    clientName: this.intermediateRepresentation.apiName.camelCase.safeName,
                    apiName: this.intermediateRepresentation.apiName.pascalCase.safeName
                });
            }
            this.generateSnippets(refGenerator);
            const snippets: FernGeneratorExec.Snippets = {
                endpoints: this.endpointSnippets,
                types: {}
            };
            await writeFile(
                this.config.snippetFilepath,
                JSON.stringify(await FernGeneratorExecSerializers.Snippets.jsonOrThrow(snippets), undefined, 4)
            );
            if (this.config.includeApiReference && refGenerator !== undefined) {
                this.extraFiles["reference.md"] = refGenerator.write();
            }
            this.context.logger.debug("Generated snippets");
        }
        return this.config.shouldBundle
            ? new BundledTypescriptProject({
                  npmPackage: this.npmPackage,
                  dependencies: this.dependencyManager.getDependencies(),
                  tsMorphProject: this.project,
                  extraDependencies: this.config.extraDependencies,
                  extraDevDependencies: this.config.extraDevDependencies,
                  extraFiles: this.extraFiles,
                  extraScripts: this.extraScripts
              })
            : new SimpleTypescriptProject({
                  npmPackage: this.npmPackage,
                  dependencies: this.dependencyManager.getDependencies(),
                  tsMorphProject: this.project,
                  outputEsm: this.config.outputEsm,
                  extraDependencies: this.config.extraDependencies,
                  extraDevDependencies: this.config.extraDevDependencies,
                  extraFiles: this.extraFiles,
                  extraScripts: this.extraScripts
              });
    }

    public async copyCoreUtilities({ pathToSrc }: { pathToSrc: AbsoluteFilePath }): Promise<void> {
        await this.coreUtilitiesManager.copyCoreUtilities({ pathToSrc });
    }

    private generateTypeDeclarations() {
        for (const typeDeclaration of Object.values(this.intermediateRepresentation.types)) {
            this.withSourceFile({
                filepath: this.typeDeclarationReferencer.getExportedFilepath(typeDeclaration.name),
                run: ({ sourceFile, importsManager }) => {
                    const context = this.generateSdkContext({ sourceFile, importsManager });
                    context.type.getGeneratedType(typeDeclaration.name).writeToFile(context);
                }
            });
        }
    }

    private generateTypeSchemas() {
        for (const typeDeclaration of Object.values(this.intermediateRepresentation.types)) {
            this.withSourceFile({
                filepath: this.typeSchemaDeclarationReferencer.getExportedFilepath(typeDeclaration.name),
                run: ({ sourceFile, importsManager }) => {
                    const context = this.generateSdkContext({ sourceFile, importsManager });
                    context.typeSchema.getGeneratedTypeSchema(typeDeclaration.name).writeToFile(context);
                }
            });
        }
    }

    private generateErrorDeclarations() {
        for (const errorDeclaration of Object.values(this.intermediateRepresentation.errors)) {
            this.withSourceFile({
                filepath: this.errorDeclarationReferencer.getExportedFilepath(errorDeclaration.name),
                run: ({ sourceFile, importsManager }) => {
                    const context = this.generateSdkContext({ sourceFile, importsManager });
                    context.sdkError.getGeneratedSdkError(errorDeclaration.name)?.writeToFile(context);
                }
            });
        }
    }

    private generateSdkErrorSchemas() {
        for (const errorDeclaration of Object.values(this.intermediateRepresentation.errors)) {
            this.withSourceFile({
                filepath: this.sdkErrorSchemaDeclarationReferencer.getExportedFilepath(errorDeclaration.name),
                run: ({ sourceFile, importsManager }) => {
                    const context = this.generateSdkContext({ sourceFile, importsManager });
                    context.sdkErrorSchema.getGeneratedSdkErrorSchema(errorDeclaration.name)?.writeToFile(context);
                }
            });
        }
    }

    private generateEndpointErrorUnion() {
        this.forEachService((service, packageId) => {
            for (const endpoint of service.endpoints) {
                this.withSourceFile({
                    filepath: this.endpointErrorUnionDeclarationReferencer.getExportedFilepath({
                        packageId,
                        endpoint
                    }),
                    run: ({ sourceFile, importsManager }) => {
                        const context = this.generateSdkContext({ sourceFile, importsManager });
                        context.endpointErrorUnion
                            .getGeneratedEndpointErrorUnion(packageId, endpoint.name)
                            .writeToFile(context);
                    }
                });
            }
        });
    }

    private generateEndpointTypeSchemas() {
        this.forEachService((service, packageId) => {
            for (const endpoint of service.endpoints) {
                this.withSourceFile({
                    filepath: this.sdkEndpointSchemaDeclarationReferencer.getExportedFilepath({
                        packageId,
                        endpoint
                    }),
                    run: ({ sourceFile, importsManager }) => {
                        const context = this.generateSdkContext({ sourceFile, importsManager });
                        context.sdkEndpointTypeSchemas
                            .getGeneratedEndpointTypeSchemas(packageId, endpoint.name)
                            .writeToFile(context);
                    }
                });
            }
        });
    }

    private generateRequestWrappers() {
        this.forEachService((service, packageId) => {
            for (const endpoint of service.endpoints) {
                if (endpoint.sdkRequest?.shape.type === "wrapper") {
                    this.withSourceFile({
                        filepath: this.requestWrapperDeclarationReferencer.getExportedFilepath({
                            packageId,
                            endpoint
                        }),
                        run: ({ sourceFile, importsManager }) => {
                            const context = this.generateSdkContext({ sourceFile, importsManager });
                            context.requestWrapper
                                .getGeneratedRequestWrapper(packageId, endpoint.name)
                                .writeToFile(context);
                        }
                    });
                }
            }
        });
    }

    private generateInlinedRequestBodySchemas() {
        this.forEachService((service, packageId) => {
            for (const endpoint of service.endpoints) {
                if (endpoint.requestBody?.type === "inlinedRequestBody") {
                    this.withSourceFile({
                        filepath: this.sdkInlinedRequestBodySchemaDeclarationReferencer.getExportedFilepath({
                            packageId,
                            endpoint
                        }),
                        run: ({ sourceFile, importsManager }) => {
                            const context = this.generateSdkContext({ sourceFile, importsManager });
                            context.sdkInlinedRequestBodySchema
                                .getGeneratedInlinedRequestBodySchema(packageId, endpoint.name)
                                .writeToFile(context);
                        }
                    });
                }
            }
        });
    }

    private generateServiceDeclarations() {
        this.context.logger.debug("Generating service declarations...");
        for (const packageId of this.getAllPackageIds()) {
            const package_ = this.packageResolver.resolvePackage(packageId);
            if (!package_.hasEndpointsInTree) {
                continue;
            }
            this.withSourceFile({
                filepath: this.sdkClientClassDeclarationReferencer.getExportedFilepath(packageId),
                run: ({ sourceFile, importsManager }) => {
                    const context = this.generateSdkContext({ sourceFile, importsManager });
                    context.sdkClientClass.getGeneratedSdkClientClass(packageId).writeToFile(context);
                }
            });
        }
    }

    private runWithSnippet({
        sourceFile,
        importsManager,
        rootPackage,
        packageId,
        endpoint,
        example,
        includeImports
    }: {
        sourceFile: SourceFile;
        importsManager: ImportsManager;
        rootPackage: PackageId;
        packageId: PackageId;
        endpoint: HttpEndpoint;
        example: ExampleEndpointCall;
        includeImports: boolean;
    }): ts.Node[] | undefined {
        const context = this.generateSdkContext({ sourceFile, importsManager }, { isForSnippet: true });
        const clientInstantiation = context.sdkClientClass
            .getGeneratedSdkClientClass(rootPackage)
            .instantiateAsRoot({ context, npmPackage: this.npmPackage });
        const clientAssignment = ts.factory.createVariableStatement(
            undefined,
            ts.factory.createVariableDeclarationList(
                [
                    ts.factory.createVariableDeclaration(
                        context.sdkInstanceReferenceForSnippet,
                        undefined,
                        undefined,
                        clientInstantiation
                    )
                ],
                ts.NodeFlags.Const
            )
        );
        const endpointInvocation = context.sdkClientClass.getGeneratedSdkClientClass(packageId).invokeEndpoint({
            context,
            endpointId: endpoint.id,
            example,
            clientReference: context.sdkInstanceReferenceForSnippet
        });
        if (endpointInvocation == null) {
            return undefined;
        }
        if (includeImports) {
            return [clientAssignment, ts.factory.createExpressionStatement(endpointInvocation)];
        }
        return [ts.factory.createExpressionStatement(endpointInvocation)];
    }

    private generateSnippets(refGenerator: ReferenceGenerator | undefined) {
        const rootPackage: PackageId = { isRoot: true };
        this.forEachService((service, packageId) => {
            if (service.endpoints.length === 0) {
                return;
            }
            let serviceReference = refGenerator?.addSection(
                service.displayName ??
                    service.name.fernFilepath.allParts.map((part) => part.pascalCase.unsafeName).join(" ")
            );

            const exportedFilepath = this.sdkClientClassDeclarationReferencer.getExportedFilepath(packageId);
            const serviceFilepath = convertExportedFilePathToFilePath(exportedFilepath);

            for (const endpoint of service.endpoints) {
                if (packageId.isRoot) {
                    serviceReference = refGenerator?.addSection(
                        endpoint.displayName ?? endpoint.name.pascalCase.unsafeName
                    );
                }
                const example = endpoint.examples[0];
                if (example != null) {
                    const snippet = this.withSnippet({
                        run: ({ sourceFile, importsManager }): ts.Node[] | undefined => {
                            return this.runWithSnippet({
                                sourceFile,
                                importsManager,
                                rootPackage,
                                packageId,
                                endpoint,
                                example,
                                includeImports: true
                            });
                        },
                        includeImports: true
                    });
                    if (snippet != null) {
                        this.endpointSnippets.push({
                            id: {
                                path: FernGeneratorExec.EndpointPath(this.getFullPathForEndpoint(endpoint)),
                                method: endpoint.method
                            },
                            snippet: FernGeneratorExec.EndpointSnippet.typescript({
                                client: snippet
                            })
                        });
                    }

                    if (serviceReference !== undefined) {
                        let returnType = undefined;
                        const parameters: ReferenceParameterDeclaration[] = [];
                        const referenceSnippet = this.withSnippet({
                            run: ({ sourceFile, importsManager }): ts.Node[] | undefined => {
                                const context = this.generateSdkContext(
                                    { sourceFile, importsManager },
                                    { isForSnippet: true }
                                );
                                const clientClass = context.sdkClientClass.getGeneratedSdkClientClass(packageId);
                                const endpointDetailed = clientClass.getEndpoint({ context, endpointId: endpoint.id });
                                const returnTypeNode = endpointDetailed?.getSignature(context).returnTypeWithoutPromise;
                                returnType =
                                    returnTypeNode !== undefined ? getTextOfTsNode(returnTypeNode) : returnTypeNode;
                                parameters.push(
                                    ...(endpointDetailed?.getSignature(context).parameters.map((param) => {
                                        return {
                                            name: param.name,
                                            type: param.type?.toString() ?? "unknown",
                                            description: param.docs
                                        };
                                    }) ?? [])
                                );

                                return this.runWithSnippet({
                                    sourceFile,
                                    importsManager,
                                    rootPackage,
                                    packageId,
                                    endpoint,
                                    example,
                                    includeImports: false
                                });
                            },
                            includeImports: false
                        });

                        serviceReference.addEndpoint({
                            link: serviceFilepath,
                            functionName: endpoint.name.camelCase.unsafeName,
                            returnType,
                            parameters,
                            codeSnippet: referenceSnippet,
                            description: endpoint.docs
                        });
                    }
                }
            }
        });
    }

    // TODO(dsinghvi): HACKHACK Move this to IR
    private getFullPathForEndpoint(endpoint: HttpEndpoint): string {
        let url = "";
        if (endpoint.fullPath.head.length > 0) {
            url = urlJoin(url, endpoint.fullPath.head);
        }
        for (const part of endpoint.fullPath.parts) {
            url = urlJoin(url, "{" + part.pathParameter + "}");
            if (part.tail.length > 0) {
                url = urlJoin(url, part.tail);
            }
        }
        return url.startsWith("/") ? url : `/${url}`;
    }

    private generateEnvironments(): void {
        this.withSourceFile({
            filepath: this.environmentsDeclarationReferencer.getExportedFilepath(),
            run: ({ sourceFile, importsManager }) => {
                const context = this.generateSdkContext({ sourceFile, importsManager });
                context.environments.getGeneratedEnvironments().writeToFile(context);
            }
        });
    }

    private generateGenericAPISdkError(): void {
        this.withSourceFile({
            filepath: this.genericAPISdkErrorDeclarationReferencer.getExportedFilepath(),
            run: ({ sourceFile, importsManager }) => {
                const context = this.generateSdkContext({ sourceFile, importsManager });
                this.genericAPISdkErrorGenerator
                    .generateGenericAPISdkError({
                        errorClassName: this.genericAPISdkErrorDeclarationReferencer.getExportedName()
                    })
                    .writeToFile(context);
            }
        });
    }

    private generateTimeoutSdkError(): void {
        this.withSourceFile({
            filepath: this.timeoutSdkErrorDeclarationReferencer.getExportedFilepath(),
            run: ({ sourceFile, importsManager }) => {
                const context = this.generateSdkContext({ sourceFile, importsManager });
                this.timeoutSdkErrorGenerator
                    .generateTimeoutSdkError({
                        errorClassName: this.timeoutSdkErrorDeclarationReferencer.getExportedName()
                    })
                    .writeToFile(context);
            }
        });
    }

    private withSnippet({
        run,
        includeImports = false
    }: {
        run: (args: { sourceFile: SourceFile; importsManager: ImportsManager }) => ts.Node[] | undefined;
        includeImports: boolean;
    }): string | undefined {
        const project = new Project({
            useInMemoryFileSystem: true
        });
        const sourceFile = project.createSourceFile("snippet");
        const importsManager = new ImportsManager();
        const statements = run({ sourceFile, importsManager });
        if (statements != null) {
            sourceFile.addStatements(statements.map((expression) => getTextOfTsNode(expression)));
            if (includeImports) {
                importsManager.writeImportsToSourceFile(sourceFile);
            }
            return sourceFile.getText();
        }
        return undefined;
    }

    private withSourceFile({
        run,
        filepath
    }: {
        run: (args: { sourceFile: SourceFile; importsManager: ImportsManager }) => void;
        filepath: ExportedFilePath;
    }) {
        const filepathStr = convertExportedFilePathToFilePath(filepath);
        this.context.logger.debug(`Generating ${filepathStr}`);

        const sourceFile = this.rootDirectory.createSourceFile(filepathStr);
        const importsManager = new ImportsManager();

        run({ sourceFile, importsManager });

        if (sourceFile.getStatements().length === 0) {
            sourceFile.delete();
            this.context.logger.debug(`Skipping ${filepathStr} (no content)`);
        } else {
            importsManager.writeImportsToSourceFile(sourceFile);
            this.exportsManager.addExportsForFilepath(filepath);

            // this needs to be last.
            // https://github.com/dsherret/ts-morph/issues/189#issuecomment-414174283
            sourceFile.insertText(0, (writer) => {
                if (this.config.whitelabel) {
                    writer.writeLine(WHITELABEL_FILE_HEADER);
                } else {
                    writer.writeLine(FILE_HEADER);
                }
            });

            this.context.logger.debug(`Generated ${filepathStr}`);
        }
    }

    private getAllPackageIds(): PackageId[] {
        return [
            { isRoot: true },
            ...Object.keys(this.intermediateRepresentation.subpackages).map(
                (subpackageId): PackageId => ({ isRoot: false, subpackageId })
            )
        ];
    }

    private forEachService(run: (service: HttpService, packageId: PackageId) => void): void {
        for (const packageId of this.getAllPackageIds()) {
            const service = this.packageResolver.getServiceDeclaration(packageId);
            if (service != null) {
                run(service, packageId);
            }
        }
    }

    private generateSdkContext(
        {
            sourceFile,
            importsManager
        }: {
            sourceFile: SourceFile;
            importsManager: ImportsManager;
        },
        { isForSnippet }: { isForSnippet?: boolean } = {}
    ): SdkContextImpl {
        return new SdkContextImpl({
            npmPackage: this.npmPackage,
            isForSnippet: isForSnippet ?? false,
            intermediateRepresentation: this.intermediateRepresentation,
            sourceFile,
            coreUtilitiesManager: this.coreUtilitiesManager,
            dependencyManager: this.dependencyManager,
            fernConstants: this.intermediateRepresentation.constants,
            importsManager,
            typeResolver: this.typeResolver,
            typeDeclarationReferencer: this.typeDeclarationReferencer,
            typeSchemaDeclarationReferencer: this.typeSchemaDeclarationReferencer,
            typeReferenceExampleGenerator: this.typeReferenceExampleGenerator,
            errorDeclarationReferencer: this.errorDeclarationReferencer,
            sdkErrorSchemaDeclarationReferencer: this.sdkErrorSchemaDeclarationReferencer,
            endpointErrorUnionDeclarationReferencer: this.endpointErrorUnionDeclarationReferencer,
            sdkEndpointSchemaDeclarationReferencer: this.sdkEndpointSchemaDeclarationReferencer,
            endpointErrorUnionGenerator: this.endpointErrorUnionGenerator,
            requestWrapperDeclarationReferencer: this.requestWrapperDeclarationReferencer,
            requestWrapperGenerator: this.requestWrapperGenerator,
            sdkInlinedRequestBodySchemaDeclarationReferencer: this.sdkInlinedRequestBodySchemaDeclarationReferencer,
            sdkInlinedRequestBodySchemaGenerator: this.sdkInlinedRequestBodySchemaGenerator,
            typeGenerator: this.typeGenerator,
            sdkErrorGenerator: this.sdkErrorGenerator,
            errorResolver: this.errorResolver,
            packageResolver: this.packageResolver,
            sdkEndpointTypeSchemasGenerator: this.sdkEndpointTypeSchemasGenerator,
            typeSchemaGenerator: this.typeSchemaGenerator,
            sdkErrorSchemaGenerator: this.sdkErrorSchemaGenerator,
            environmentsGenerator: this.environmentsGenerator,
            environmentsDeclarationReferencer: this.environmentsDeclarationReferencer,
            sdkClientClassDeclarationReferencer: this.sdkClientClassDeclarationReferencer,
            sdkClientClassGenerator: this.sdkClientClassGenerator,
            genericAPISdkErrorDeclarationReferencer: this.genericAPISdkErrorDeclarationReferencer,
            genericAPISdkErrorGenerator: this.genericAPISdkErrorGenerator,
            timeoutSdkErrorDeclarationReferencer: this.timeoutSdkErrorDeclarationReferencer,
            timeoutSdkErrorGenerator: this.timeoutSdkErrorGenerator,
            treatUnknownAsAny: this.config.treatUnknownAsAny,
            includeSerdeLayer: this.config.includeSerdeLayer,
            targetRuntime: this.config.targetRuntime
        });
    }
}
