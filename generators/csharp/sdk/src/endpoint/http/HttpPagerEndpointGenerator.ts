import { csharp } from "@fern-api/csharp-codegen";
import {
    ExampleEndpointCall,
    HttpEndpoint,
    RequestProperty,
    ResponseError,
    ResponseProperty,
    ServiceId,
    TypeReference
} from "@fern-fern/ir-sdk/api";
import { RawClient } from "./RawClient";
import { SdkGeneratorContext } from "../../SdkGeneratorContext";
import { getEndpointReturnType } from "../utils/getEndpointReturnType";
import { getEndpointRequest } from "../utils/getEndpointRequest";
import { AbstractEndpointGenerator } from "../AbstractEndpointGenerator";

export declare namespace EndpointGenerator {
    export interface Args {
        /** the reference to the client */
        clientReference: string;
        /** the endpoint for the endpoint */
        endpoint: HttpEndpoint;
        /** reference to a variable that is the body */
        bodyReference?: string;
    }
}

export class HttpPagerEndpointGenerator extends AbstractEndpointGenerator {
    public constructor({ context }: { context: SdkGeneratorContext }) {
        super({ context });
    }

    public generate({
        serviceId,
        endpoint,
        rawClientReference,
        rawClient
    }: {
        serviceId: ServiceId;
        endpoint: HttpEndpoint;
        rawClientReference: string;
        rawClient: RawClient;
    }): csharp.Method {
        if (!endpoint.pagination) {
            throw new Error("Endpoint is not a pager endpoint");
        }

        const endpointSignatureInfo = this.getEndpointSignatureInfo({ serviceId, endpoint });
        const parameters = [...endpointSignatureInfo.baseParameters];
        const optionsParamName = this.context.getRequestOptionsParameterName();
        parameters.push(
            csharp.parameter({
                type: csharp.Type.optional(csharp.Type.reference(this.context.getRequestOptionsClassReference())),
                name: optionsParamName,
                initializer: "null"
            })
        );
        let listItemType = this.context.csharpTypeMapper.convert({
            reference: endpoint.pagination._visit({
                offset: (pagination) => pagination.results.property.valueType,
                cursor: (pagination) => pagination.results.property.valueType,
                _other: (pagination) => {
                    throw new Error(`Unsupported pagination type: ${pagination.type}`);
                }
            })
        });
        if (listItemType.internalType.type === "optional") {
            listItemType = listItemType.internalType.value;
        }

        if (listItemType.internalType.type !== "list") {
            throw new Error(`Pagination result type must be a list, but is ${listItemType.internalType.type}.
    ${JSON.stringify(listItemType)}`);
        }
        const itemType = listItemType.internalType.value;
        const pager = this.context.getPagerClassReference({
            itemType
        });
        const return_ = csharp.Type.reference(pager);
        // TODO: implement
        // const endpointSnippets = this.context.snippetGenerator.getSnippetsForEndpoint(endpoint.id);
        // const snippet = endpointSnippets?.userSpecified[0] ?? endpointSnippets?.autogenerated[0];
        return csharp.method({
            name: this.context.getEndpointPagerMethodName(endpoint),
            access: csharp.Access.Public,
            isAsync: false,
            parameters,
            summary: endpoint.docs,
            return_,
            body: csharp.codeblock((writer) => {
                const requestParam = endpointSignatureInfo.requestParameter;
                if (!requestParam) {
                    throw new Error("Request parameter is required for pagination");
                }
                const unpagedEndpointMethodName = this.context.getEndpointMethodName(endpoint);
                const unpagedEndpointResponseType = getEndpointReturnType({ context: this.context, endpoint });
                if (!unpagedEndpointResponseType) {
                    throw new Error("No return type found for endpoint");
                }

                endpoint.pagination?._visit({
                    offset: (pagination) => {
                        const offsetPagerClassReference = this.context.getOffsetPagerClassReference({
                            requestType: requestParam.type,
                            responseType: unpagedEndpointResponseType,
                            itemType
                        });
                        writer.write("var pager = new ");
                        writer.writeNode(offsetPagerClassReference);
                        writer.write("(");
                        writer.indent();
                        writer.writeLine(`${requestParam.name},`);
                        writer.writeLine(`${optionsParamName},`);
                        writer.writeLine(`${unpagedEndpointMethodName},`);
                        writer.writeLine(`request => request.${this.dotAccess(pagination.page)} ?? 0,`);
                        writer.writeLine(
                            `(request, offset) => { request.${this.dotAccess(pagination.page)} = offset; },`
                        );
                        if (pagination.step) {
                            writer.writeLine(`request => request.${this.dotAccess(pagination.step)},`);
                        } else {
                            writer.writeLine("_ => null,");
                        }
                        writer.writeLine(`response => response.${this.dotAccess(pagination.results)}?.ToList(),`);
                        if (pagination.hasNextPage) {
                            writer.writeLine(`response => response.${this.dotAccess(pagination.hasNextPage)}`);
                        } else {
                            writer.writeLine("_ => null");
                        }
                        writer.dedent();
                        writer.writeTextStatement(")");
                        writer.writeTextStatement("return pager");
                    },
                    cursor: (pagination) => {
                        const cursorPagerClassReference = this.context.getCursorPagerClassReference({
                            requestType: requestParam.type,
                            responseType: unpagedEndpointResponseType,
                            itemType
                        });
                        writer.write("var pager = new ");
                        writer.writeNode(cursorPagerClassReference);
                        writer.write("(");
                        writer.indent();
                        writer.writeLine(`${requestParam.name},`);
                        writer.writeLine(`${optionsParamName},`);
                        writer.writeLine(`${unpagedEndpointMethodName},`);
                        writer.writeLine(
                            `(request, cursor) => { request.${this.dotAccess(pagination.page)} = cursor; },`
                        );
                        writer.writeLine(`response => response.${this.dotAccess(pagination.next)},`);
                        writer.writeLine(`response => response.${this.dotAccess(pagination.results)}?.ToList()`);
                        writer.dedent();
                        writer.writeTextStatement(")");
                        writer.writeTextStatement("return pager");
                    },
                    _other: (pagination) => {
                        throw new Error(`Unsupported pagination type: ${pagination.type}`);
                    }
                });
            })
            // codeExample: snippet?.endpointCall
        });
    }

    private dotAccess({ property, propertyPath }: RequestProperty | ResponseProperty): string {
        if (!propertyPath || propertyPath.length === 0) {
            return `${property.name.name.pascalCase.safeName}`;
        }

        return `${propertyPath.map((val) => val.pascalCase.safeName).join(".")}.${
            property.name.name.pascalCase.safeName
        }`;
    }

    // public generateHttpEndpointSnippet({
    //     example,
    //     endpoint,
    //     clientVariableName,
    //     serviceId,
    //     requestOptions,
    //     getResult,
    //     parseDatetimes
    // }: {
    //     example: ExampleEndpointCall;
    //     endpoint: HttpEndpoint;
    //     clientVariableName: string;
    //     serviceId: ServiceId;
    //     requestOptions?: csharp.CodeBlock;
    //     getResult?: boolean;
    //     parseDatetimes: boolean;
    // }): csharp.MethodInvocation | undefined {
    //     return this.generateEndpointSnippet({
    //         example,
    //         endpoint,
    //         clientVariableName,
    //         serviceId,
    //         additionalEndParameters: requestOptions != null ? [requestOptions] : [],
    //         getResult,
    //         parseDatetimes
    //     });
    // }
}
