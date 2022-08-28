import { RelativeFilePath } from "@fern-api/core-utils";
import { RawSchemas } from "@fern-api/yaml-schema";
import { FernFilepath } from "@fern-fern/ir-model/commons";
import { WebSocketChannel, WebSocketMessenger } from "@fern-fern/ir-model/services/websocket";
import { TypeReference } from "@fern-fern/ir-model/types";
import { generateWireStringWithAllCasings } from "../../utils/generateCasings";
import { createTypeReferenceParser } from "../../utils/parseInlineType";
import { convertResponseErrors } from "./convertResponseErrors";

export function convertWebsocketChannel({
    channelDefinition,
    fernFilepath,
    channelId,
    imports,
}: {
    channelId: string;
    channelDefinition: RawSchemas.WebSocketChannelSchema;
    fernFilepath: FernFilepath;
    imports: Record<string, RelativeFilePath>;
}): WebSocketChannel {
    return {
        docs: channelDefinition.docs,
        name: {
            fernFilepath,
            name: channelId,
        },
        path: channelDefinition.path,
        client: convertWebSocketMessenger({
            messenger: channelDefinition.client,
            fernFilepath,
            imports,
        }),
        server: convertWebSocketMessenger({
            messenger: channelDefinition.server,
            fernFilepath,
            imports,
        }),
        operationProperties: {
            id: "id",
            operation: "operation",
            body: "body",
        },
    };
}

function convertWebSocketMessenger({
    messenger,
    fernFilepath,
    imports,
}: {
    messenger: RawSchemas.WebSocketMessengerSchema | null | undefined;
    fernFilepath: FernFilepath;
    imports: Record<string, RelativeFilePath>;
}): WebSocketMessenger {
    const parseTypeReference = createTypeReferenceParser({ fernFilepath, imports });
    return {
        operations:
            messenger?.operations != null
                ? Object.entries(messenger.operations).map(([operationKey, operation]) => {
                      return {
                          docs: operation.docs,
                          name: generateWireStringWithAllCasings({
                              wireValue: operationKey,
                              name: operation.name ?? operationKey,
                          }),
                          request: {
                              docs: typeof operation.request !== "string" ? operation.request?.docs : undefined,
                              type:
                                  operation.request != null
                                      ? parseTypeReference(operation.request)
                                      : TypeReference.void(),
                          },
                          response: {
                              docs: typeof operation.response !== "string" ? operation.response?.docs : undefined,
                              type:
                                  operation.response != null
                                      ? parseTypeReference(operation.response)
                                      : TypeReference.void(),
                          },
                          errors: convertResponseErrors({
                              errors: operation.errors,
                              fernFilepath,
                              imports,
                          }),
                      };
                  })
                : [],
    };
}
