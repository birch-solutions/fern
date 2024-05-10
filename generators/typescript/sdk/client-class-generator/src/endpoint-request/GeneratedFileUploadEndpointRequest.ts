import {
    ExampleEndpointCall,
    FileProperty,
    HttpEndpoint,
    HttpRequestBody,
    HttpService,
    IntermediateRepresentation
} from "@fern-fern/ir-sdk/api";
import {
    Fetcher,
    GetReferenceOpts,
    getTextOfTsNode,
    ImportsManager,
    JavaScriptRuntime,
    PackageId,
    visitJavaScriptRuntime
} from "@fern-typescript/commons";
import { SdkContext } from "@fern-typescript/contexts";
import { OptionalKind, ParameterDeclarationStructure, ts } from "ts-morph";
import { appendPropertyToFormData } from "../endpoints/utils/appendPropertyToFormData";
import { GeneratedQueryParams } from "../endpoints/utils/GeneratedQueryParams";
import { generateHeaders } from "../endpoints/utils/generateHeaders";
import { getParameterNameForFile } from "../endpoints/utils/getParameterNameForFile";
import { getParameterNameForPathParameter } from "../endpoints/utils/getParameterNameForPathParameter";
import { getPathParametersForEndpointSignature } from "../endpoints/utils/getPathParametersForEndpointSignature";
import { GeneratedSdkClientClassImpl } from "../GeneratedSdkClientClassImpl";
import { FileUploadRequestParameter } from "../request-parameter/FileUploadRequestParameter";
import { GeneratedEndpointRequest } from "./GeneratedEndpointRequest";

export declare namespace GeneratedFileUploadEndpointRequest {
    export interface Init {
        ir: IntermediateRepresentation;
        packageId: PackageId;
        service: HttpService;
        endpoint: HttpEndpoint;
        requestBody: HttpRequestBody.FileUpload;
        generatedSdkClientClass: GeneratedSdkClientClassImpl;
        targetRuntime: JavaScriptRuntime;
        retainOriginalCasing: boolean;
        importsManager: ImportsManager;
    }
}

export class GeneratedFileUploadEndpointRequest implements GeneratedEndpointRequest {
    private static FORM_DATA_VARIABLE_NAME = "_request";
    private static FORM_DATA_REQUEST_OPTIONS_VARIABLE_NAME = "_maybeEncodedRequest";

    private importsManager: ImportsManager;
    private ir: IntermediateRepresentation;
    private requestParameter: FileUploadRequestParameter | undefined;
    private queryParams: GeneratedQueryParams | undefined;
    private service: HttpService;
    private endpoint: HttpEndpoint;
    private requestBody: HttpRequestBody.FileUpload;
    private generatedSdkClientClass: GeneratedSdkClientClassImpl;
    private targetRuntime: JavaScriptRuntime;
    private retainOriginalCasing: boolean;

    constructor({
        ir,
        packageId,
        service,
        endpoint,
        requestBody,
        generatedSdkClientClass,
        targetRuntime,
        retainOriginalCasing,
        importsManager
    }: GeneratedFileUploadEndpointRequest.Init) {
        this.ir = ir;
        this.service = service;
        this.endpoint = endpoint;
        this.requestBody = requestBody;
        this.generatedSdkClientClass = generatedSdkClientClass;
        this.targetRuntime = targetRuntime;
        this.retainOriginalCasing = retainOriginalCasing;
        this.importsManager = importsManager;
        if (
            requestBody.properties.some((property) => property.type === "bodyProperty") ||
            endpoint.queryParameters.length > 0
        ) {
            if (this.endpoint.sdkRequest == null) {
                throw new Error("SdkRequest is not defined for file upload endpoint");
            }
            if (this.endpoint.sdkRequest.shape.type !== "wrapper") {
                throw new Error("SdkRequest is not a wrapper for file upload endpoint");
            }
            this.requestParameter = new FileUploadRequestParameter({
                packageId,
                service,
                endpoint,
                sdkRequest: this.endpoint.sdkRequest
            });

            this.queryParams = new GeneratedQueryParams({
                requestParameter: this.requestParameter
            });
        }
    }

    public getExampleEndpointParameters({
        context,
        example,
        opts
    }: {
        context: SdkContext;
        example: ExampleEndpointCall;
        opts: GetReferenceOpts;
    }): ts.Expression[] | undefined {
        const exampleParameters = [...example.servicePathParameters, ...example.endpointPathParameters];
        const result: ts.Expression[] = [];
        for (const property of this.requestBody.properties) {
            if (property.type === "file") {
                const createReadStream = context.externalDependencies.fs.createReadStream(
                    ts.factory.createStringLiteral("/path/to/your/file")
                );
                if (property.value.type === "fileArray") {
                    result.push(ts.factory.createArrayLiteralExpression([createReadStream]));
                } else {
                    result.push(createReadStream);
                }
            }
        }
        for (const pathParameter of getPathParametersForEndpointSignature(this.service, this.endpoint)) {
            const exampleParameter = exampleParameters.find(
                (param) => param.name.originalName === pathParameter.name.originalName
            );
            if (exampleParameter == null) {
                result.push(ts.factory.createIdentifier("undefined"));
            } else {
                const generatedExample = context.type.getGeneratedExample(exampleParameter.value);
                result.push(generatedExample.build(context, opts));
            }
        }
        if (this.requestParameter != null) {
            const requestParameterExample = this.requestParameter.generateExample({ context, example, opts });
            if (
                requestParameterExample != null &&
                getTextOfTsNode(requestParameterExample) === "{}" &&
                this.requestParameter.isOptional({ context })
            ) {
                // pass
            } else if (requestParameterExample != null) {
                result.push(requestParameterExample);
            } else if (!this.requestParameter.isOptional({ context })) {
                return undefined;
            }
        }
        return result;
    }

    public getEndpointParameters(context: SdkContext): OptionalKind<ParameterDeclarationStructure>[] {
        const parameters: OptionalKind<ParameterDeclarationStructure>[] = [];
        for (const property of this.requestBody.properties) {
            if (property.type === "file") {
                parameters.push({
                    name: getParameterNameForFile({
                        property: property.value,
                        retainOriginalCasing: context.retainOriginalCasing
                    }),
                    type: getTextOfTsNode(this.getFileParameterType(property.value, context))
                });
            }
        }
        for (const pathParameter of getPathParametersForEndpointSignature(this.service, this.endpoint)) {
            parameters.push({
                name: getParameterNameForPathParameter({
                    pathParameter,
                    retainOriginalCasing: this.retainOriginalCasing
                }),
                type: getTextOfTsNode(context.type.getReferenceToType(pathParameter.valueType).typeNode)
            });
        }

        if (this.requestParameter != null) {
            parameters.push(this.requestParameter.getParameterDeclaration(context));
        }
        return parameters;
    }

    private getFileParameterType(property: FileProperty, context: SdkContext): ts.TypeNode {
        const types: ts.TypeNode[] = [
            this.maybeWrapFileArray({
                property,
                value: ts.factory.createTypeReferenceNode("File")
            })
        ];

        visitJavaScriptRuntime(this.targetRuntime, {
            node: () => {
                types.push(
                    this.maybeWrapFileArray({
                        property,
                        value: context.externalDependencies.fs.ReadStream._getReferenceToType()
                    })
                );
            },
            browser: () => {
                types.push(
                    this.maybeWrapFileArray({
                        property,
                        value: ts.factory.createTypeReferenceNode("Blob")
                    })
                );
            }
        });

        if (property.isOptional) {
            types.push(ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword));
        }

        return ts.factory.createUnionTypeNode(types);
    }

    private maybeWrapFileArray({ property, value }: { property: FileProperty; value: ts.TypeNode }): ts.TypeNode {
        return property.type === "fileArray" ? ts.factory.createArrayTypeNode(value) : value;
    }

    public getBuildRequestStatements(context: SdkContext): ts.Statement[] {
        const statements: ts.Statement[] = [];

        if (this.requestParameter != null) {
            statements.push(...this.requestParameter.getInitialStatements());
        }

        if (this.queryParams != null) {
            statements.push(...this.queryParams.getBuildStatements(context));
        }

        statements.push(
            ts.factory.createVariableStatement(
                undefined,
                ts.factory.createVariableDeclarationList(
                    [
                        ts.factory.createVariableDeclaration(
                            GeneratedFileUploadEndpointRequest.FORM_DATA_VARIABLE_NAME,
                            undefined,
                            undefined,
                            context.coreUtilities.formDataUtils._instantiate()
                        )
                    ],
                    ts.NodeFlags.Const
                )
            )
        );
        for (const property of this.requestBody.properties) {
            statements.push(
                appendPropertyToFormData({
                    property,
                    context,
                    referenceToFormData: ts.factory.createIdentifier(
                        GeneratedFileUploadEndpointRequest.FORM_DATA_VARIABLE_NAME
                    ),
                    requestParameter: this.requestParameter
                })
            );
        }

        statements.push(
            ts.factory.createVariableStatement(
                undefined,
                ts.factory.createVariableDeclarationList(
                    [
                        ts.factory.createVariableDeclaration(
                            GeneratedFileUploadEndpointRequest.FORM_DATA_REQUEST_OPTIONS_VARIABLE_NAME,
                            undefined,
                            undefined,
                            context.coreUtilities.formDataUtils.getRequest({
                                referencetoFormData: ts.factory.createIdentifier(
                                    GeneratedFileUploadEndpointRequest.FORM_DATA_VARIABLE_NAME
                                )
                            })
                        )
                    ],
                    ts.NodeFlags.Const
                )
            )
        );

        return statements;
    }

    public getFetcherRequestArgs(
        context: SdkContext
    ): Pick<Fetcher.Args, "headers" | "queryParameters" | "body" | "contentType"> {
        return {
            headers: this.getHeaders(context),
            queryParameters: this.queryParams != null ? this.queryParams.getReferenceTo(context) : undefined,
            body: context.coreUtilities.formDataUtils.getBody({
                referencetoFormDataRequest: ts.factory.createIdentifier(
                    GeneratedFileUploadEndpointRequest.FORM_DATA_REQUEST_OPTIONS_VARIABLE_NAME
                )
            })
        };
    }

    private getHeaders(context: SdkContext): ts.ObjectLiteralElementLike[] {
        return generateHeaders({
            context,
            requestParameter: this.requestParameter,
            idempotencyHeaders: this.ir.idempotencyHeaders,
            generatedSdkClientClass: this.generatedSdkClientClass,
            service: this.service,
            endpoint: this.endpoint,
            additionalSpreadHeaders: [
                context.coreUtilities.formDataUtils.getHeaders({
                    referencetoFormDataRequest: ts.factory.createIdentifier(
                        GeneratedFileUploadEndpointRequest.FORM_DATA_REQUEST_OPTIONS_VARIABLE_NAME
                    )
                })
            ]
        });
    }

    public getReferenceToRequestBody(): ts.Expression | undefined {
        return this.requestParameter?.getReferenceToRequestBody();
    }

    public getReferenceToQueryParameter(queryParameterKey: string, context: SdkContext): ts.Expression {
        if (this.requestParameter == null) {
            throw new Error("Cannot get reference to query parameter because request parameter is not defined.");
        }
        return this.requestParameter.getReferenceToQueryParameter(queryParameterKey, context);
    }
}
