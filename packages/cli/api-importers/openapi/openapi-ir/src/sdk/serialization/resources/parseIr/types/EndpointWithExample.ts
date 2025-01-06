/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { HttpMethod } from "../../finalIr/types/HttpMethod";
import { TagId } from "../../commons/types/TagId";
import { PathParameterWithExample } from "./PathParameterWithExample";
import { QueryParameterWithExample } from "./QueryParameterWithExample";
import { HeaderWithExample } from "./HeaderWithExample";
import { EndpointSdkName } from "../../finalIr/types/EndpointSdkName";
import { RequestWithExample } from "./RequestWithExample";
import { ResponseWithExample } from "./ResponseWithExample";
import { StatusCode } from "../../commons/types/StatusCode";
import { HttpErrorWithExample } from "./HttpErrorWithExample";
import { HttpEndpointServer } from "../../finalIr/types/HttpEndpointServer";
import { EndpointExample } from "../../finalIr/types/EndpointExample";
import { Pagination } from "../../finalIr/types/Pagination";
import { WithDescription } from "../../commons/types/WithDescription";
import { WithAvailability } from "../../commons/types/WithAvailability";
import { WithSource } from "../../commons/types/WithSource";
import { WithNamespace } from "../../commons/types/WithNamespace";

export const EndpointWithExample: core.serialization.ObjectSchema<
    serializers.EndpointWithExample.Raw,
    FernOpenapiIr.EndpointWithExample
> = core.serialization
    .objectWithoutOptionalProperties({
        authed: core.serialization.boolean(),
        internal: core.serialization.boolean().optional(),
        idempotent: core.serialization.boolean().optional(),
        method: HttpMethod,
        audiences: core.serialization.list(core.serialization.string()),
        path: core.serialization.string(),
        summary: core.serialization.string().optional(),
        operationId: core.serialization.string().optional(),
        tags: core.serialization.list(TagId),
        pathParameters: core.serialization.list(PathParameterWithExample),
        queryParameters: core.serialization.list(QueryParameterWithExample),
        headers: core.serialization.list(HeaderWithExample),
        sdkName: EndpointSdkName.optional(),
        generatedRequestName: core.serialization.string(),
        requestNameOverride: core.serialization.string().optional(),
        request: RequestWithExample.optional(),
        response: ResponseWithExample.optional(),
        errors: core.serialization.record(StatusCode, HttpErrorWithExample),
        server: core.serialization.list(HttpEndpointServer),
        examples: core.serialization.list(EndpointExample),
        pagination: Pagination.optional(),
    })
    .extend(WithDescription)
    .extend(WithAvailability)
    .extend(WithSource)
    .extend(WithNamespace);

export declare namespace EndpointWithExample {
    export interface Raw extends WithDescription.Raw, WithAvailability.Raw, WithSource.Raw, WithNamespace.Raw {
        authed: boolean;
        internal?: boolean | null;
        idempotent?: boolean | null;
        method: HttpMethod.Raw;
        audiences: string[];
        path: string;
        summary?: string | null;
        operationId?: string | null;
        tags: TagId.Raw[];
        pathParameters: PathParameterWithExample.Raw[];
        queryParameters: QueryParameterWithExample.Raw[];
        headers: HeaderWithExample.Raw[];
        sdkName?: EndpointSdkName.Raw | null;
        generatedRequestName: string;
        requestNameOverride?: string | null;
        request?: RequestWithExample.Raw | null;
        response?: ResponseWithExample.Raw | null;
        errors: Record<StatusCode.Raw, HttpErrorWithExample.Raw>;
        server: HttpEndpointServer.Raw[];
        examples: EndpointExample.Raw[];
        pagination?: Pagination.Raw | null;
    }
}
