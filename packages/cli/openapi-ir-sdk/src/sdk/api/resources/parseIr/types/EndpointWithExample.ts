/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../../index";

export interface EndpointWithExample
    extends FernOpenapiIr.WithDescription,
        FernOpenapiIr.WithAvailability,
        FernOpenapiIr.WithSource {
    authed: boolean;
    internal: boolean | undefined;
    idempotent: boolean | undefined;
    method: FernOpenapiIr.HttpMethod;
    audiences: string[];
    /**
     * This string includes templated path parameters.
     * For example, `/users/{userId}` is a valid value.
     */
    path: string;
    summary: string | undefined;
    operationId: string | undefined;
    tags: FernOpenapiIr.TagId[];
    pathParameters: FernOpenapiIr.PathParameterWithExample[];
    queryParameters: FernOpenapiIr.QueryParameterWithExample[];
    headers: FernOpenapiIr.HeaderWithExample[];
    sdkName: FernOpenapiIr.EndpointSdkName | undefined;
    /** Populated as ${operationId}Request */
    generatedRequestName: string;
    /** Populated by `x-request-name` on a path object. */
    requestNameOverride: string | undefined;
    request: FernOpenapiIr.RequestWithExample | undefined;
    response: FernOpenapiIr.ResponseWithExample | undefined;
    /**
     * Expected error status codes for this endpoint, and their corresponding schema and examples.
     * SDK generators will only read the StatusCodes. Docs generators will read the HttpError schema.
     */
    errors: Record<FernOpenapiIr.StatusCode, FernOpenapiIr.HttpErrorWithExample>;
    server: FernOpenapiIr.Server[];
    /**
     * Populated by `x-fern-examples` on a path object.
     * Also migrated from `x-readme.code-samples` if present.
     */
    examples: FernOpenapiIr.EndpointExample[];
    pagination: FernOpenapiIr.Pagination | undefined;
}
