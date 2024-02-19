/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../..";

/**
 * Complete representation of the API schema
 */
export interface IntermediateRepresentation {
    /** This is the human readable unique id for the API. */
    apiName: FernIr.Name;
    apiDisplayName: string | undefined;
    apiDocs: string | undefined;
    auth: FernIr.ApiAuth;
    /** API Wide headers that are sent on every request */
    headers: FernIr.HttpHeader[];
    /** Headers that are sent for idempotent endpoints */
    idempotencyHeaders: FernIr.HttpHeader[];
    /** The types described by this API */
    types: Record<FernIr.TypeId, FernIr.TypeDeclaration>;
    /** The services exposed by this API */
    services: Record<FernIr.ServiceId, FernIr.HttpService>;
    /** The webhooks sent by this API */
    webhookGroups: Record<FernIr.WebhookGroupId, FernIr.WebhookGroup>;
    /** The websocket channels served by this API */
    websocketChannels: Record<FernIr.WebSocketChannelId, FernIr.WebSocketChannel> | undefined;
    errors: Record<FernIr.ErrorId, FernIr.ErrorDeclaration>;
    subpackages: Record<FernIr.SubpackageId, FernIr.Subpackage>;
    rootPackage: FernIr.Package;
    constants: FernIr.Constants;
    environments: FernIr.EnvironmentsConfig | undefined;
    basePath: FernIr.HttpPath | undefined;
    pathParameters: FernIr.PathParameter[];
    errorDiscriminationStrategy: FernIr.ErrorDiscriminationStrategy;
    sdkConfig: FernIr.SdkConfig;
    variables: FernIr.VariableDeclaration[];
    serviceTypeReferenceInfo: FernIr.ServiceTypeReferenceInfo;
}
