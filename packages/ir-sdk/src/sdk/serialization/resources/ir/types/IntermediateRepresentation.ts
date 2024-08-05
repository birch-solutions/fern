/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const IntermediateRepresentation: core.serialization.ObjectSchema<
    serializers.IntermediateRepresentation.Raw,
    FernIr.IntermediateRepresentation
> = core.serialization.objectWithoutOptionalProperties({
    fdrApiDefinitionId: core.serialization.string().optional(),
    apiVersion: core.serialization.lazy(async () => (await import("../../..")).ApiVersionScheme).optional(),
    apiName: core.serialization.lazyObject(async () => (await import("../../..")).Name),
    apiDisplayName: core.serialization.string().optional(),
    apiDocs: core.serialization.string().optional(),
    auth: core.serialization.lazyObject(async () => (await import("../../..")).ApiAuth),
    headers: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).HttpHeader)),
    idempotencyHeaders: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).HttpHeader)
    ),
    types: core.serialization.record(
        core.serialization.lazy(async () => (await import("../../..")).TypeId),
        core.serialization.lazyObject(async () => (await import("../../..")).TypeDeclaration)
    ),
    services: core.serialization.record(
        core.serialization.lazy(async () => (await import("../../..")).ServiceId),
        core.serialization.lazyObject(async () => (await import("../../..")).HttpService)
    ),
    webhookGroups: core.serialization.record(
        core.serialization.lazy(async () => (await import("../../..")).WebhookGroupId),
        core.serialization.lazy(async () => (await import("../../..")).WebhookGroup)
    ),
    websocketChannels: core.serialization
        .record(
            core.serialization.lazy(async () => (await import("../../..")).WebSocketChannelId),
            core.serialization.lazyObject(async () => (await import("../../..")).WebSocketChannel)
        )
        .optional(),
    errors: core.serialization.record(
        core.serialization.lazy(async () => (await import("../../..")).ErrorId),
        core.serialization.lazyObject(async () => (await import("../../..")).ErrorDeclaration)
    ),
    subpackages: core.serialization.record(
        core.serialization.lazy(async () => (await import("../../..")).SubpackageId),
        core.serialization.lazyObject(async () => (await import("../../..")).Subpackage)
    ),
    rootPackage: core.serialization.lazyObject(async () => (await import("../../..")).Package),
    constants: core.serialization.lazyObject(async () => (await import("../../..")).Constants),
    environments: core.serialization.lazyObject(async () => (await import("../../..")).EnvironmentsConfig).optional(),
    basePath: core.serialization.lazyObject(async () => (await import("../../..")).HttpPath).optional(),
    pathParameters: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).PathParameter)
    ),
    errorDiscriminationStrategy: core.serialization.lazy(
        async () => (await import("../../..")).ErrorDiscriminationStrategy
    ),
    sdkConfig: core.serialization.lazyObject(async () => (await import("../../..")).SdkConfig),
    variables: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).VariableDeclaration)
    ),
    serviceTypeReferenceInfo: core.serialization.lazyObject(
        async () => (await import("../../..")).ServiceTypeReferenceInfo
    ),
    readmeConfig: core.serialization.lazyObject(async () => (await import("../../..")).ReadmeConfig).optional(),
    sourceConfig: core.serialization.lazy(async () => (await import("../../..")).SourceConfig).optional(),
});

export declare namespace IntermediateRepresentation {
    interface Raw {
        fdrApiDefinitionId?: string | null;
        apiVersion?: serializers.ApiVersionScheme.Raw | null;
        apiName: serializers.Name.Raw;
        apiDisplayName?: string | null;
        apiDocs?: string | null;
        auth: serializers.ApiAuth.Raw;
        headers: serializers.HttpHeader.Raw[];
        idempotencyHeaders: serializers.HttpHeader.Raw[];
        types: Record<serializers.TypeId.Raw, serializers.TypeDeclaration.Raw>;
        services: Record<serializers.ServiceId.Raw, serializers.HttpService.Raw>;
        webhookGroups: Record<serializers.WebhookGroupId.Raw, serializers.WebhookGroup.Raw>;
        websocketChannels?: Record<serializers.WebSocketChannelId.Raw, serializers.WebSocketChannel.Raw> | null;
        errors: Record<serializers.ErrorId.Raw, serializers.ErrorDeclaration.Raw>;
        subpackages: Record<serializers.SubpackageId.Raw, serializers.Subpackage.Raw>;
        rootPackage: serializers.Package.Raw;
        constants: serializers.Constants.Raw;
        environments?: serializers.EnvironmentsConfig.Raw | null;
        basePath?: serializers.HttpPath.Raw | null;
        pathParameters: serializers.PathParameter.Raw[];
        errorDiscriminationStrategy: serializers.ErrorDiscriminationStrategy.Raw;
        sdkConfig: serializers.SdkConfig.Raw;
        variables: serializers.VariableDeclaration.Raw[];
        serviceTypeReferenceInfo: serializers.ServiceTypeReferenceInfo.Raw;
        readmeConfig?: serializers.ReadmeConfig.Raw | null;
        sourceConfig?: serializers.SourceConfig.Raw | null;
    }
}
