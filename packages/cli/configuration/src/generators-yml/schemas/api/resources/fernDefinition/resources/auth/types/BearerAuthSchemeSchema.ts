/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernDefinition from "../../../../../index";

export interface BearerAuthSchemeSchema extends FernDefinition.fernDefinition.WithDocsSchema {
    scheme: "bearer";
    token?: FernDefinition.fernDefinition.AuthVariable;
}
