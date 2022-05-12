import { HttpEndpoint } from "@fern-api/api";
import { getTextOfTsNode, TypeResolver } from "@fern-typescript/commons";
import { HelperManager } from "@fern-typescript/helper-manager";
import { ClassDeclaration, Directory, InterfaceDeclaration, Scope, ts } from "ts-morph";
import { ENDPOINTS_NAMESPACE_IMPORT, ENDPOINT_PARAMETER_NAME } from "../constants";
import { generateEndpointMethodBody } from "./endpoint-method-body/generateEndpointMethodBody";
import { generateEndpointTypes } from "./generate-endpoint-types/generateEndpointTypes";
import { RESPONSE_TYPE_NAME } from "./generate-endpoint-types/response/constants";

export async function addEndpointToService({
    endpoint,
    serviceInterface,
    serviceClass,
    modelDirectory,
    errorsDirectory,
    endpointsDirectory,
    typeResolver,
    helperManager,
}: {
    endpoint: HttpEndpoint;
    serviceInterface: InterfaceDeclaration;
    serviceClass: ClassDeclaration;
    endpointsDirectory: Directory;
    modelDirectory: Directory;
    errorsDirectory: Directory;
    typeResolver: TypeResolver;
    helperManager: HelperManager;
}): Promise<void> {
    const serviceFile = serviceInterface.getSourceFile();
    const serviceDirectory = serviceFile.getDirectory();

    const generatedEndpointTypes = generateEndpointTypes({
        endpoint,
        serviceDirectory,
        endpointsDirectory,
        modelDirectory,
        errorsDirectory,
        typeResolver,
    });

    const getReferenceToEndpointType = (reference: ts.Identifier): ts.TypeReferenceNode => {
        return ts.factory.createTypeReferenceNode(
            ts.factory.createQualifiedName(
                ts.factory.createQualifiedName(
                    ts.factory.createIdentifier(ENDPOINTS_NAMESPACE_IMPORT),
                    ts.factory.createIdentifier(endpoint.endpointId)
                ),
                reference
            )
        );
    };

    const parameters =
        generatedEndpointTypes.endpointParameter != null
            ? [
                  {
                      name: ENDPOINT_PARAMETER_NAME,
                      type: getTextOfTsNode(
                          generatedEndpointTypes.endpointParameter.isLocal
                              ? getReferenceToEndpointType(generatedEndpointTypes.endpointParameter.typeName)
                              : generatedEndpointTypes.endpointParameter.generateTypeReference(serviceFile)
                      ),
                  },
              ]
            : [];

    const returnType = getTextOfTsNode(
        ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Promise"), [
            getReferenceToEndpointType(ts.factory.createIdentifier(RESPONSE_TYPE_NAME)),
        ])
    );

    serviceInterface.addMethod({
        name: generatedEndpointTypes.methodName,
        parameters,
        returnType,
    });

    serviceClass.addMethod({
        name: generatedEndpointTypes.methodName,
        scope: Scope.Public,
        isAsync: true,
        parameters,
        returnType,
        statements: await generateEndpointMethodBody({
            endpoint,
            endpointTypes: generatedEndpointTypes,
            serviceFile,
            getReferenceToEndpointType,
            typeResolver,
            helperManager,
        }),
    });
}
