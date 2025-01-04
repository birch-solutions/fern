/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { Server } from "../../commons/types/Server";
import { SdkGroupInfo } from "./SdkGroupInfo";
import { Tags } from "./Tags";
import { Endpoint } from "./Endpoint";
import { Webhook } from "./Webhook";
import { WebsocketChannel } from "./WebsocketChannel";
import { Schemas } from "./Schemas";
import { PrimitiveSchema } from "./PrimitiveSchema";
import { SchemaId } from "../../commons/types/SchemaId";
import { SecuritySchemeId } from "../../commons/types/SecuritySchemeId";
import { SecurityScheme } from "../../commons/types/SecurityScheme";
import { GlobalHeader } from "./GlobalHeader";
import { IdempotencyHeader } from "./IdempotencyHeader";

export const OpenApiIntermediateRepresentation: core.serialization.ObjectSchema<
    serializers.OpenApiIntermediateRepresentation.Raw,
    FernOpenapiIr.OpenApiIntermediateRepresentation
> = core.serialization.objectWithoutOptionalProperties({
    apiVersion: core.serialization.unknown().optional(),
    title: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    basePath: core.serialization.string().optional(),
    servers: core.serialization.list(Server),
    groups: core.serialization.record(core.serialization.string(), SdkGroupInfo),
    tags: Tags,
    hasEndpointsMarkedInternal: core.serialization.boolean(),
    endpoints: core.serialization.list(Endpoint),
    webhooks: core.serialization.list(Webhook),
    channel: core.serialization.list(WebsocketChannel),
    groupedSchemas: Schemas,
    variables: core.serialization.record(core.serialization.string(), PrimitiveSchema),
    nonRequestReferencedSchemas: core.serialization.set(SchemaId),
    securitySchemes: core.serialization.record(SecuritySchemeId, SecurityScheme),
    globalHeaders: core.serialization.list(GlobalHeader).optional(),
    idempotencyHeaders: core.serialization.list(IdempotencyHeader).optional(),
});

export declare namespace OpenApiIntermediateRepresentation {
    export interface Raw {
        apiVersion?: unknown | null;
        title?: string | null;
        description?: string | null;
        basePath?: string | null;
        servers: Server.Raw[];
        groups: Record<string, SdkGroupInfo.Raw>;
        tags: Tags.Raw;
        hasEndpointsMarkedInternal: boolean;
        endpoints: Endpoint.Raw[];
        webhooks: Webhook.Raw[];
        channel: WebsocketChannel.Raw[];
        groupedSchemas: Schemas.Raw;
        variables: Record<string, PrimitiveSchema.Raw>;
        nonRequestReferencedSchemas: SchemaId.Raw[];
        securitySchemes: Record<SecuritySchemeId.Raw, SecurityScheme.Raw>;
        globalHeaders?: GlobalHeader.Raw[] | null;
        idempotencyHeaders?: IdempotencyHeader.Raw[] | null;
    }
}
