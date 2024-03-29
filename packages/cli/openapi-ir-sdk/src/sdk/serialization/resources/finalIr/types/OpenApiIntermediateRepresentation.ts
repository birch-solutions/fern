/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const OpenApiIntermediateRepresentation: core.serialization.ObjectSchema<
    serializers.OpenApiIntermediateRepresentation.Raw,
    FernOpenapiIr.OpenApiIntermediateRepresentation
> = core.serialization.objectWithoutOptionalProperties({
    title: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    servers: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Server)),
    groups: core.serialization.record(
        core.serialization.string(),
        core.serialization.lazyObject(async () => (await import("../../..")).SdkGroupInfo)
    ),
    tags: core.serialization.lazyObject(async () => (await import("../../..")).Tags),
    hasEndpointsMarkedInternal: core.serialization.boolean(),
    endpoints: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Endpoint)),
    webhooks: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Webhook)),
    channel: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).WebsocketChannel)
    ),
    schemas: core.serialization.record(
        core.serialization.lazy(async () => (await import("../../..")).SchemaId),
        core.serialization.lazy(async () => (await import("../../..")).Schema)
    ),
    errors: core.serialization.record(
        core.serialization.lazy(async () => (await import("../../..")).StatusCode),
        core.serialization.lazyObject(async () => (await import("../../..")).HttpError)
    ),
    variables: core.serialization.record(
        core.serialization.string(),
        core.serialization.lazyObject(async () => (await import("../../..")).PrimitiveSchema)
    ),
    nonRequestReferencedSchemas: core.serialization.set(
        core.serialization.lazy(async () => (await import("../../..")).SchemaId)
    ),
    securitySchemes: core.serialization.record(
        core.serialization.lazy(async () => (await import("../../..")).SecuritySchemeId),
        core.serialization.lazy(async () => (await import("../../..")).SecurityScheme)
    ),
    globalHeaders: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).GlobalHeader))
        .optional(),
});

export declare namespace OpenApiIntermediateRepresentation {
    interface Raw {
        title?: string | null;
        description?: string | null;
        servers: serializers.Server.Raw[];
        groups: Record<string, serializers.SdkGroupInfo.Raw>;
        tags: serializers.Tags.Raw;
        hasEndpointsMarkedInternal: boolean;
        endpoints: serializers.Endpoint.Raw[];
        webhooks: serializers.Webhook.Raw[];
        channel: serializers.WebsocketChannel.Raw[];
        schemas: Record<serializers.SchemaId.Raw, serializers.Schema.Raw>;
        errors: Record<serializers.StatusCode.Raw, serializers.HttpError.Raw>;
        variables: Record<string, serializers.PrimitiveSchema.Raw>;
        nonRequestReferencedSchemas: serializers.SchemaId.Raw[];
        securitySchemes: Record<serializers.SecuritySchemeId.Raw, serializers.SecurityScheme.Raw>;
        globalHeaders?: serializers.GlobalHeader.Raw[] | null;
    }
}
