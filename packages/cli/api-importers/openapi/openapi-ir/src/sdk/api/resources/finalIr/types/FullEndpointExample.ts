/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../../index";

/**
 * A complete example associated with the endpoint. All child
 * examples will be fully complete (i.e. there will be no
 * PartialObjectExamples).
 */
export interface FullEndpointExample extends FernOpenapiIr.WithDescription {
    name: string | undefined;
    pathParameters: FernOpenapiIr.PathParameterExample[] | undefined;
    queryParameters: FernOpenapiIr.QueryParameterExample[] | undefined;
    headers: FernOpenapiIr.HeaderExample[] | undefined;
    request: FernOpenapiIr.FullExample | undefined;
    response: FernOpenapiIr.EndpointResponseExample | undefined;
    codeSamples: FernOpenapiIr.CustomCodeSample[];
}
