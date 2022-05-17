import { HttpEndpoint, HttpService } from "@fern-api/api";
import { getTextOfTsNode } from "@fern-typescript/commons";
import { HelperManager } from "@fern-typescript/helper-manager";
import { SourceFile, StatementStructures, StructureKind, ts, VariableDeclarationKind } from "ts-morph";
import { ClientConstants } from "../../constants";
import { generateJoinPathsCall } from "../../utils/generateJoinPathsCall";
import { GeneratedEndpointTypes } from "../generate-endpoint-types/types";
import { convertPathToTemplateString } from "./convertPathToTemplateString";
import { generateEncoderCall } from "./generateEncoderCall";

export async function generateFetcherCall({
    serviceFile,
    serviceDefinition,
    endpoint,
    endpointTypes,
    includeQueryParams,
    helperManager,
}: {
    serviceFile: SourceFile;
    serviceDefinition: HttpService;
    endpoint: HttpEndpoint;
    endpointTypes: GeneratedEndpointTypes;
    includeQueryParams: boolean;
    helperManager: HelperManager;
}): Promise<StatementStructures> {
    const fetcherArgs: ts.ObjectLiteralElementLike[] = [
        ts.factory.createPropertyAssignment(
            ts.factory.createIdentifier(ClientConstants.Service.ServiceUtils.Fetcher.Parameters.URL),
            generateJoinPathsCall({
                file: serviceFile,
                paths: [
                    ts.factory.createPropertyAccessExpression(
                        ts.factory.createThis(),
                        ts.factory.createIdentifier(ClientConstants.Service.PrivateMembers.BASE_URL)
                    ),
                    convertPathToTemplateString(endpoint.path),
                ],
            })
        ),
        ts.factory.createPropertyAssignment(
            ts.factory.createIdentifier(ClientConstants.Service.ServiceUtils.Fetcher.Parameters.METHOD),
            ts.factory.createStringLiteral(endpoint.method)
        ),
        ts.factory.createPropertyAssignment(
            ts.factory.createIdentifier(ClientConstants.Service.ServiceUtils.Fetcher.Parameters.HEADERS),
            ts.factory.createObjectLiteralExpression([])
        ),
        ts.factory.createPropertyAssignment(
            ts.factory.createIdentifier(ClientConstants.Service.ServiceUtils.Fetcher.Parameters.TOKEN),
            ts.factory.createPropertyAccessExpression(
                ts.factory.createThis(),
                ts.factory.createIdentifier(ClientConstants.Service.PrivateMembers.TOKEN)
            )
        ),
    ];

    if (includeQueryParams) {
        fetcherArgs.push(
            ClientConstants.Service.Endpoint.Variables.QUERY_PARAMETERS ===
                ClientConstants.Service.ServiceUtils.Fetcher.Parameters.QUERY_PARAMS
                ? ts.factory.createShorthandPropertyAssignment(
                      ts.factory.createIdentifier(ClientConstants.Service.Endpoint.Variables.QUERY_PARAMETERS)
                  )
                : ts.factory.createPropertyAssignment(
                      ts.factory.createIdentifier(ClientConstants.Service.ServiceUtils.Fetcher.Parameters.QUERY_PARAMS),
                      ts.factory.createIdentifier(ClientConstants.Service.Endpoint.Variables.QUERY_PARAMETERS)
                  )
        );
    }

    if (endpointTypes.requestBody != null) {
        const requestBodyReference =
            endpointTypes.requestBody.propertyName != null
                ? ts.factory.createPropertyAccessExpression(
                      ts.factory.createIdentifier(ClientConstants.Service.Endpoint.Signature.REQUEST_PARAMETER),
                      endpointTypes.requestBody.propertyName
                  )
                : ts.factory.createIdentifier(ClientConstants.Service.Endpoint.Signature.REQUEST_PARAMETER);

        const encoder = await helperManager.getEncoderForEncoding(endpointTypes.requestBody.encoding);
        const encodedRequestBody = generateEncoderCall({
            encoder,
            method: "encode",
            variableReference: endpointTypes.requestBody.reference.isLocal
                ? {
                      _type: "wireMessage",
                      wireMessageType: "Request",
                      serviceName: serviceDefinition.name.name,
                      endpointId: endpoint.endpointId,
                      variable: requestBodyReference,
                  }
                : {
                      _type: "modelType",
                      typeReference: endpointTypes.requestBody.reference.typeReference,
                      variable: requestBodyReference,
                  },
        });

        fetcherArgs.push(
            ts.factory.createPropertyAssignment(
                ts.factory.createIdentifier(ClientConstants.Service.ServiceUtils.Fetcher.Parameters.Body.PROPERTY_NAME),
                ts.factory.createObjectLiteralExpression(
                    [
                        ts.factory.createPropertyAssignment(
                            ts.factory.createIdentifier(
                                ClientConstants.Service.ServiceUtils.Fetcher.Parameters.Body.Properties.CONTENT
                            ),
                            encodedRequestBody
                        ),
                        ts.factory.createPropertyAssignment(
                            ts.factory.createIdentifier(
                                ClientConstants.Service.ServiceUtils.Fetcher.Parameters.Body.Properties.CONTENT_TYPE
                            ),
                            ts.factory.createStringLiteral(encoder.contentType)
                        ),
                    ],
                    true
                )
            )
        );
    }

    return {
        kind: StructureKind.VariableStatement,
        declarationKind: VariableDeclarationKind.Const,
        declarations: [
            {
                name: ClientConstants.Service.Endpoint.Variables.ENCODED_RESPONSE,
                initializer: getTextOfTsNode(
                    ts.factory.createAwaitExpression(
                        ts.factory.createCallExpression(
                            ts.factory.createPropertyAccessExpression(
                                ts.factory.createThis(),
                                ts.factory.createIdentifier(ClientConstants.Service.PrivateMembers.FETCHER)
                            ),
                            undefined,
                            [ts.factory.createObjectLiteralExpression(fetcherArgs, true)]
                        )
                    )
                ),
            },
        ],
    };
}
