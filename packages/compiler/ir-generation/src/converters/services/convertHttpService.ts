import {
    CustomWireMessageEncoding,
    FernFilepath,
    HttpAuth,
    HttpEndpoint,
    HttpMethod,
    HttpService,
} from "@fern-api/api";
import { assertNever } from "@fern-api/commons";
import { RawSchemas } from "@fern-api/syntax-analysis";
import { getDocs } from "../../utils/getDocs";
import { createTypeReferenceParser } from "../../utils/parseInlineType";
import { convertHttpRequest } from "./convertHttpRequest";
import { convertHttpResponse } from "./convertHttpResponse";

export function convertHttpService({
    serviceDefinition,
    serviceId,
    fernFilepath,
    imports,
    nonStandardEncodings,
}: {
    serviceDefinition: RawSchemas.HttpServiceSchema;
    serviceId: string;
    fernFilepath: FernFilepath;
    imports: Record<string, string>;
    nonStandardEncodings: CustomWireMessageEncoding[];
}): HttpService {
    const parseTypeReference = createTypeReferenceParser({ fernFilepath, imports });

    return {
        docs: serviceDefinition.docs,
        name: {
            name: serviceId,
            fernFilepath,
        },
        basePath: serviceDefinition["base-path"],
        headers:
            serviceDefinition.headers != null
                ? Object.entries(serviceDefinition.headers).map(([header, headerType]) => ({
                      header,
                      valueType: parseTypeReference(headerType),
                      docs: getDocs(headerType),
                  }))
                : [],
        endpoints: Object.entries(serviceDefinition.endpoints).map(
            ([endpointId, endpoint]): HttpEndpoint => ({
                endpointId,
                auth:
                    endpoint["auth-override"] != null
                        ? convertHttpAuth(endpoint["auth-override"])
                        : convertHttpAuth(serviceDefinition.auth),
                docs: endpoint.docs,
                method: convertHttpMethod(endpoint.method),
                path: endpoint.path,
                parameters:
                    endpoint.parameters != null
                        ? Object.entries(endpoint.parameters).map(([parameterName, parameterType]) => ({
                              docs: typeof parameterType !== "string" ? parameterType.docs : undefined,
                              key: parameterName,
                              valueType: parseTypeReference(parameterType),
                          }))
                        : [],
                queryParameters:
                    endpoint.queryParameters != null
                        ? Object.entries(endpoint.queryParameters).map(([parameterName, parameterType]) => ({
                              docs: typeof parameterType !== "string" ? parameterType.docs : undefined,
                              key: parameterName,
                              valueType: parseTypeReference(parameterType),
                          }))
                        : [],
                headers:
                    endpoint.headers != null
                        ? Object.entries(endpoint.headers).map(([header, headerType]) => ({
                              header,
                              valueType: parseTypeReference(headerType),
                              docs: getDocs(headerType),
                          }))
                        : [],
                request: convertHttpRequest({
                    request: endpoint.request,
                    fernFilepath,
                    imports,
                    nonStandardEncodings,
                }),
                response: convertHttpResponse({
                    response: endpoint.response,
                    fernFilepath,
                    imports,
                    nonStandardEncodings,
                }),
            })
        ),
    };
}

function convertHttpMethod(method: RawSchemas.HttpEndpointSchema["method"]): HttpMethod {
    switch (method) {
        case "GET":
            return HttpMethod.Get;
        case "POST":
            return HttpMethod.Post;
        case "PUT":
            return HttpMethod.Put;
        case "PATCH":
            return HttpMethod.Patch;
        case "DELETE":
            return HttpMethod.Delete;
        default:
            assertNever(method);
    }
}

function convertHttpAuth(auth: RawSchemas.AuthSchema): HttpAuth {
    switch (auth) {
        case "bearer":
            return HttpAuth.Bearer;
        case "none":
            return HttpAuth.None;
        default:
            assertNever(auth);
    }
}
