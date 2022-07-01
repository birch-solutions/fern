import { HttpAuth, HttpEndpoint, HttpMethod, HttpPath, HttpService } from "@fern-fern/ir-model/services";
import { DependencyManager } from "@fern-typescript/commons";
import { GeneratedHttpEndpointTypes, ModelContext } from "@fern-typescript/model-context";
import { ServiceTypesConstants } from "@fern-typescript/service-types";
import path from "path";
import { SourceFile, ts } from "ts-morph";
import { ServerConstants } from "../constants";
import { generateImplCall } from "./generateImplCall";
import { generateReturnFailedResponse } from "./generateReturnFailedResponse";
import { generateReturnOkResponse } from "./generateReturnOkResponse";

export function getExpressRouteStatement({
    service,
    endpoint,
    generatedEndpointTypes,
    modelContext,
    file,
    dependencyManager,
}: {
    service: HttpService;
    endpoint: HttpEndpoint;
    generatedEndpointTypes: GeneratedHttpEndpointTypes;
    modelContext: ModelContext;
    file: SourceFile;
    dependencyManager: DependencyManager;
}): ts.Statement {
    return ts.factory.createExpressionStatement(
        ts.factory.createCallExpression(
            ts.factory.createPropertyAccessExpression(
                ts.factory.createIdentifier(ServerConstants.Middleware.APP_VARIABLE_NAME),
                ts.factory.createIdentifier(
                    HttpMethod._visit(endpoint.method, {
                        get: () => "get",
                        post: () => "post",
                        put: () => "put",
                        patch: () => "patch",
                        delete: () => "delete",
                        _unknown: () => {
                            throw new Error("Unknown HTTP method: " + endpoint.method);
                        },
                    })
                )
            ),
            undefined,
            [
                generateExpressRoutePath({ basePath: service.basePath, endpointPath: endpoint.path }),
                ts.factory.createArrowFunction(
                    [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)],
                    undefined,
                    [
                        ts.factory.createParameterDeclaration(
                            undefined,
                            undefined,
                            undefined,
                            getRequestParameterName({ generatedEndpointTypes, endpoint })
                        ),
                        ts.factory.createParameterDeclaration(
                            undefined,
                            undefined,
                            undefined,
                            ts.factory.createIdentifier(
                                ServerConstants.Middleware.EndpointImplementation.Response.PARAMETER_NAME
                            )
                        ),
                    ],
                    undefined,
                    ts.factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                    ts.factory.createBlock(
                        generateEndpointBody({
                            endpoint,
                            generatedEndpointTypes,
                            modelContext,
                            dependencyManager,
                            file,
                        }),
                        true
                    )
                ),
            ]
        )
    );
}

function getRequestParameterName({
    generatedEndpointTypes,
    endpoint,
}: {
    generatedEndpointTypes: GeneratedHttpEndpointTypes;
    endpoint: HttpEndpoint;
}): ts.Identifier {
    const isUnused =
        generatedEndpointTypes.request.wrapper == null &&
        generatedEndpointTypes.request.body == null &&
        endpoint.auth === HttpAuth.None;
    const prefix = isUnused ? "_" : "";
    const name = `${prefix}${ServerConstants.Middleware.EndpointImplementation.Request.PARAMETER_NAME}`;
    return ts.factory.createIdentifier(name);
}

function generateExpressRoutePath({
    basePath,
    endpointPath,
}: {
    basePath: string | null | undefined;
    endpointPath: HttpPath;
}): ts.Expression {
    return ts.factory.createStringLiteral(
        path.join(
            basePath ?? "/",
            endpointPath.head +
                endpointPath.parts
                    .reduce((acc, part) => {
                        return acc + `:${part.pathParameter}${part.tail}`;
                    }, "")
                    .replace(/\/+$/, "")
        )
    );
}

function generateEndpointBody({
    endpoint,
    generatedEndpointTypes,
    modelContext,
    file,
    dependencyManager,
}: {
    endpoint: HttpEndpoint;
    generatedEndpointTypes: GeneratedHttpEndpointTypes;
    modelContext: ModelContext;
    file: SourceFile;
    dependencyManager: DependencyManager;
}): ts.Statement[] {
    return [
        ts.factory.createVariableStatement(
            undefined,
            ts.factory.createVariableDeclarationList(
                [
                    ts.factory.createVariableDeclaration(
                        ts.factory.createIdentifier(
                            ServerConstants.Middleware.EndpointImplementation.ImplResult.VARIABLE_NAME
                        ),
                        undefined,
                        undefined,
                        generateImplCall({ endpoint, generatedEndpointTypes, modelContext, dependencyManager, file })
                    ),
                ],
                ts.NodeFlags.Const
            )
        ),
        ts.factory.createIfStatement(
            ts.factory.createPropertyAccessExpression(
                ts.factory.createIdentifier(ServerConstants.Middleware.EndpointImplementation.ImplResult.VARIABLE_NAME),
                ts.factory.createIdentifier(ServiceTypesConstants.Commons.Response.Properties.OK)
            ),
            ts.factory.createBlock(generateReturnOkResponse(generatedEndpointTypes), true),
            ts.factory.createBlock(
                generateReturnFailedResponse({
                    endpoint,
                    generatedEndpointTypes,
                    modelContext,
                    file,
                }),
                true
            )
        ),
    ];
}
