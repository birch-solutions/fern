import { FernGeneratorExec } from "@fern-api/generator-commons";
import { go } from "@fern-api/go-codegen";
import { DynamicSnippetsGeneratorContext } from "./context/DynamicSnippetsGeneratorContext";
import { dynamic as DynamicSnippets } from "@fern-fern/ir-sdk/api";
import { AbstractDynamicSnippetsGenerator } from "@fern-api/dynamic-snippets";

const SNIPPET_PACKAGE_NAME = "example";
const SNIPPET_IMPORT_PATH = "fern";
const SNIPPET_FUNC_NAME = "do";
const CLIENT_VAR_NAME = "client";

export class DynamicSnippetsGenerator extends AbstractDynamicSnippetsGenerator<DynamicSnippetsGeneratorContext> {
    private formatted: boolean | undefined;

    constructor({
        ir,
        config,
        formatted
    }: {
        ir: DynamicSnippets.DynamicIntermediateRepresentation;
        config: FernGeneratorExec.GeneratorConfig;
        formatted?: boolean;
    }) {
        super(new DynamicSnippetsGeneratorContext({ ir, config }));
        this.formatted = formatted;
    }

    public async generate(
        snippet: DynamicSnippets.EndpointSnippetRequest
    ): Promise<DynamicSnippets.EndpointSnippetResponse> {
        const endpoints = this.context.resolveEndpointLocationOrThrow(snippet.endpoint);
        if (endpoints.length === 0) {
            throw new Error(`No endpoints found for ${JSON.stringify(snippet.endpoint)}`);
        }

        let err: Error | undefined;
        for (const endpoint of endpoints) {
            try {
                const code = this.buildCodeBlock({ endpoint, snippet });
                return {
                    snippet: await code.toString({
                        packageName: SNIPPET_PACKAGE_NAME,
                        importPath: SNIPPET_IMPORT_PATH,
                        rootImportPath: this.context.rootImportPath,
                        customConfig: this.context.customConfig ?? {},
                        formatted: this.formatted
                    })
                };
            } catch (error) {
                if (err == null) {
                    // Report the first error that occurs.
                    err = error as Error;
                }
            }
        }
        throw err ?? new Error(`Failed to generate snippet for ${JSON.stringify(snippet.endpoint)}`);
    }

    private buildCodeBlock({
        endpoint,
        snippet
    }: {
        endpoint: DynamicSnippets.Endpoint;
        snippet: DynamicSnippets.EndpointSnippetRequest;
    }): go.AstNode {
        return go.func({
            name: SNIPPET_FUNC_NAME,
            parameters: [],
            return_: [],
            body: go.codeblock((writer) => {
                writer.writeNode(this.constructClient({ endpoint, snippet }));
                writer.writeLine();
                writer.writeNode(this.callMethod({ endpoint, snippet }));
            })
        });
    }

    private constructClient({
        endpoint,
        snippet
    }: {
        endpoint: DynamicSnippets.Endpoint;
        snippet: DynamicSnippets.EndpointSnippetRequest;
    }): go.CodeBlock {
        return go.codeblock((writer) => {
            writer.write(`${CLIENT_VAR_NAME} := `);
            writer.writeNode(this.getRootClientFuncInvocation(this.getConstructorArgs({ endpoint, snippet })));
        });
    }

    private callMethod({
        endpoint,
        snippet
    }: {
        endpoint: DynamicSnippets.Endpoint;
        snippet: DynamicSnippets.EndpointSnippetRequest;
    }): go.MethodInvocation {
        return go.invokeMethod({
            on: go.codeblock(CLIENT_VAR_NAME),
            method: this.getMethod({ endpoint }),
            arguments_: [this.context.getContextTodoFunctionInvocation(), ...this.getMethodArgs({ endpoint, snippet })]
        });
    }

    private getConstructorArgs({
        endpoint,
        snippet
    }: {
        endpoint: DynamicSnippets.Endpoint;
        snippet: DynamicSnippets.EndpointSnippetRequest;
    }): go.AstNode[] {
        const args: go.AstNode[] = [];
        if (endpoint.auth != null) {
            if (snippet.auth != null) {
                args.push(this.getConstructorAuthArg({ auth: endpoint.auth, values: snippet.auth }));
            } else {
                throw new Error(`Auth with ${endpoint.auth.type} configuration is required for this endpoint`);
            }
        }
        if (this.context.ir.headers != null && snippet.headers != null) {
            args.push(...this.getConstructorHeaderArgs({ headers: this.context.ir.headers, values: snippet.headers }));
        }
        return args;
    }

    private getConstructorAuthArg({
        auth,
        values
    }: {
        auth: DynamicSnippets.Auth;
        values: DynamicSnippets.AuthValues;
    }): go.AstNode {
        switch (auth.type) {
            case "basic":
                if (values.type !== "basic") {
                    throw this.newAuthMismatchError({ auth, values });
                }
                return this.getConstructorBasicAuthArg({ auth, values });
            case "bearer":
                if (values.type !== "bearer") {
                    throw this.newAuthMismatchError({ auth, values });
                }
                return this.getConstructorBearerAuthArg({ auth, values });
            case "header":
                if (values.type !== "header") {
                    throw this.newAuthMismatchError({ auth, values });
                }
                return this.getConstructorHeaderAuthArg({ auth, values });
        }
    }

    private getConstructorBasicAuthArg({
        auth,
        values
    }: {
        auth: DynamicSnippets.BasicAuth;
        values: DynamicSnippets.BasicAuthValues;
    }): go.AstNode {
        return go.codeblock((writer) => {
            writer.writeNode(
                go.invokeFunc({
                    func: go.typeReference({
                        name: "WithBasicAuth",
                        importPath: this.context.getOptionImportPath()
                    }),
                    arguments_: [
                        go.TypeInstantiation.string(values.username),
                        go.TypeInstantiation.string(values.password)
                    ]
                })
            );
        });
    }

    private getConstructorBearerAuthArg({
        auth,
        values
    }: {
        auth: DynamicSnippets.BearerAuth;
        values: DynamicSnippets.BearerAuthValues;
    }): go.AstNode {
        return go.codeblock((writer) => {
            writer.writeNode(
                go.invokeFunc({
                    func: go.typeReference({
                        name: `With${auth.token.pascalCase.unsafeName}`,
                        importPath: this.context.getOptionImportPath()
                    }),
                    arguments_: [go.TypeInstantiation.string(values.token)]
                })
            );
        });
    }

    private getConstructorHeaderAuthArg({
        auth,
        values
    }: {
        auth: DynamicSnippets.HeaderAuth;
        values: DynamicSnippets.HeaderAuthValues;
    }): go.AstNode {
        return go.codeblock((writer) => {
            writer.writeNode(
                go.invokeFunc({
                    func: go.typeReference({
                        name: `With${auth.header.name.name.pascalCase.unsafeName}`,
                        importPath: this.context.getOptionImportPath()
                    }),
                    arguments_: [
                        this.context.dynamicTypeInstantiationMapper.convert({
                            typeReference: auth.header.typeReference,
                            value: values.value
                        })
                    ]
                })
            );
        });
    }

    private getConstructorHeaderArgs({
        headers,
        values
    }: {
        headers: DynamicSnippets.NamedParameter[];
        values: DynamicSnippets.Values;
    }): go.AstNode[] {
        const args: go.AstNode[] = [];
        for (const header of headers) {
            const arg = this.getConstructorHeaderArg({ header, value: values.value });
            if (arg != null) {
                args.push(arg);
            }
        }
        return args;
    }

    private getConstructorHeaderArg({
        header,
        value
    }: {
        header: DynamicSnippets.NamedParameter;
        value: unknown;
    }): go.AstNode | undefined {
        const typeInstantiation = this.context.dynamicTypeInstantiationMapper.convert({
            typeReference: header.typeReference,
            value
        });
        if (go.TypeInstantiation.isNop(typeInstantiation)) {
            // Literal header values (e.g. "X-API-Version") should not be included in the
            // client constructor.
            return undefined;
        }
        return go.codeblock((writer) => {
            writer.writeNode(
                go.invokeFunc({
                    func: go.typeReference({
                        name: `With${header.name.name.pascalCase.unsafeName}`,
                        importPath: this.context.getOptionImportPath()
                    }),
                    arguments_: [typeInstantiation]
                })
            );
        });
    }

    private getMethodArgs({
        endpoint,
        snippet
    }: {
        endpoint: DynamicSnippets.Endpoint;
        snippet: DynamicSnippets.EndpointSnippetRequest;
    }): go.AstNode[] {
        switch (endpoint.request.type) {
            case "inlined":
                return this.getMethodArgsForInlinedRequest({ request: endpoint.request, snippet });
            case "body":
                return this.getMethodArgsForBodyRequest({ request: endpoint.request, snippet });
        }
    }

    private getMethodArgsForBodyRequest({
        request,
        snippet
    }: {
        request: DynamicSnippets.BodyRequest;
        snippet: DynamicSnippets.EndpointSnippetRequest;
    }): go.TypeInstantiation[] {
        const args: go.TypeInstantiation[] = [];
        if (request.pathParameters != null) {
            args.push(...this.getPathParameters({ namedParameters: request.pathParameters, snippet }));
        }
        if (request.body != null) {
            args.push(this.getBodyRequestArg({ body: request.body, value: snippet.requestBody }));
        }
        return args;
    }

    private getBodyRequestArg({
        body,
        value
    }: {
        body: DynamicSnippets.ReferencedRequestBodyType;
        value: unknown;
    }): go.TypeInstantiation {
        switch (body.type) {
            case "bytes": {
                return this.getBytesBodyRequestArg({ value });
            }
            case "typeReference":
                return this.context.dynamicTypeInstantiationMapper.convert({ typeReference: body.value, value });
        }
    }

    private getBytesBodyRequestArg({ value }: { value: unknown }): go.TypeInstantiation {
        if (typeof value !== "string") {
            throw new Error("Expected bytes value to be a string, got " + typeof value);
        }
        return go.TypeInstantiation.bytes(value as string);
    }

    private getMethodArgsForInlinedRequest({
        request,
        snippet
    }: {
        request: DynamicSnippets.InlinedRequest;
        snippet: DynamicSnippets.EndpointSnippetRequest;
    }): go.TypeInstantiation[] {
        const args: go.TypeInstantiation[] = [];
        if (request.pathParameters != null) {
            args.push(...this.getPathParameters({ namedParameters: request.pathParameters, snippet }));
        }
        args.push(this.getInlinedRequestArg({ request, snippet }));
        return args;
    }

    private getInlinedRequestArg({
        request,
        snippet
    }: {
        request: DynamicSnippets.InlinedRequest;
        snippet: DynamicSnippets.EndpointSnippetRequest;
    }): go.TypeInstantiation {
        const fields: go.StructField[] = [];

        const parameters = [
            ...this.context.associateQueryParametersByWireValue({
                parameters: request.queryParameters ?? [],
                values: snippet.queryParameters ?? {}
            }),
            ...this.context.associateByWireValue({
                parameters: request.headers ?? [],
                values: snippet.headers ?? {}
            })
        ];
        for (const parameter of parameters) {
            fields.push({
                name: parameter.name.pascalCase.unsafeName,
                value: this.context.dynamicTypeInstantiationMapper.convert(parameter)
            });
        }

        if (request.body != null) {
            fields.push(...this.getInlinedRequestBodyStructFields({ body: request.body, value: snippet.requestBody }));
        }

        return go.TypeInstantiation.structPointer({
            typeReference: go.typeReference({
                name: this.context.getMethodName(request.declaration.name),
                importPath: this.context.getImportPath(request.declaration.fernFilepath)
            }),
            fields
        });
    }

    private getInlinedRequestBodyStructFields({
        body,
        value
    }: {
        body: DynamicSnippets.InlinedRequestBody;
        value: unknown;
    }): go.StructField[] {
        switch (body.type) {
            case "properties":
                return this.getInlinedRequestBodyPropertyStructFields({ parameters: body.value, value });
            case "referenced":
                return [this.getReferencedRequestBodyPropertyStructField({ body, value })];
            case "fileUpload":
                throw new Error("TODO: Implement me!");
        }
    }

    private getReferencedRequestBodyPropertyStructField({
        body,
        value
    }: {
        body: DynamicSnippets.ReferencedRequestBody;
        value: unknown;
    }): go.StructField {
        return {
            name: this.context.getTypeName(body.bodyKey),
            value: this.getReferencedRequestBodyPropertyTypeInstantiation({ body: body.bodyType, value })
        };
    }

    private getReferencedRequestBodyPropertyTypeInstantiation({
        body,
        value
    }: {
        body: DynamicSnippets.ReferencedRequestBodyType;
        value: unknown;
    }): go.TypeInstantiation {
        switch (body.type) {
            case "bytes":
                return this.getBytesBodyRequestArg({ value });
            case "typeReference":
                return this.context.dynamicTypeInstantiationMapper.convert({ typeReference: body.value, value });
        }
    }

    private getInlinedRequestBodyPropertyStructFields({
        parameters,
        value
    }: {
        parameters: DynamicSnippets.NamedParameter[];
        value: unknown;
    }): go.StructField[] {
        const fields: go.StructField[] = [];

        const bodyProperties = this.context.associateByWireValue({
            parameters,
            values: this.context.getRecordOrThrow(value)
        });
        for (const parameter of bodyProperties) {
            fields.push({
                name: this.context.getTypeName(parameter.name),
                value: this.context.dynamicTypeInstantiationMapper.convert(parameter)
            });
        }

        return fields;
    }

    private getPathParameters({
        namedParameters,
        snippet
    }: {
        namedParameters: DynamicSnippets.NamedParameter[];
        snippet: DynamicSnippets.EndpointSnippetRequest;
    }): go.TypeInstantiation[] {
        const args: go.TypeInstantiation[] = [];

        const pathParameters = this.context.associateByWireValue({
            parameters: namedParameters,
            values: snippet.pathParameters ?? {}
        });
        for (const parameter of pathParameters) {
            args.push(this.context.dynamicTypeInstantiationMapper.convert(parameter));
        }

        return args;
    }

    private getMethod({ endpoint }: { endpoint: DynamicSnippets.Endpoint }): string {
        if (endpoint.declaration.fernFilepath.packagePath.length > 0) {
            return `${endpoint.declaration.fernFilepath.packagePath
                .map((val) => this.context.getMethodName(val))
                .join(".")}.${this.context.getMethodName(endpoint.declaration.name)}`;
        }
        return this.context.getMethodName(endpoint.declaration.name);
    }

    private getRootClientFuncInvocation(arguments_: go.AstNode[]): go.FuncInvocation {
        return go.invokeFunc({
            func: go.typeReference({
                name: "NewClient",
                importPath: this.context.getClientImportPath()
            }),
            arguments_
        });
    }

    private newAuthMismatchError({
        auth,
        values
    }: {
        auth: DynamicSnippets.Auth;
        values: DynamicSnippets.AuthValues;
    }): Error {
        return new Error(`Expected auth type ${auth.type}, got ${values.type}`);
    }
}
