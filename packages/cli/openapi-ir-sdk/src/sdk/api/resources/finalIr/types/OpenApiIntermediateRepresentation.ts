/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../..";

export interface OpenApiIntermediateRepresentation {
    title: string | undefined;
    description: string | undefined;
    servers: FernOpenapiIr.Server[];
    /** Top level group information populated through `x-fern-groups`. */
    groups: Record<string, FernOpenapiIr.SdkGroupInfo>;
    tags: FernOpenapiIr.Tags;
    hasEndpointsMarkedInternal: boolean;
    endpoints: FernOpenapiIr.Endpoint[];
    webhooks: FernOpenapiIr.Webhook[];
    channel: FernOpenapiIr.WebsocketChannel[];
    schemas: Record<FernOpenapiIr.SchemaId, FernOpenapiIr.Schema>;
    variables: Record<string, FernOpenapiIr.PrimitiveSchema>;
    /** Whether the schema is directly referenced from a response, parameters, or other schemas */
    nonRequestReferencedSchemas: Set<FernOpenapiIr.SchemaId>;
    securitySchemes: Record<FernOpenapiIr.SecuritySchemeId, FernOpenapiIr.SecurityScheme>;
    globalHeaders: FernOpenapiIr.GlobalHeader[] | undefined;
}
