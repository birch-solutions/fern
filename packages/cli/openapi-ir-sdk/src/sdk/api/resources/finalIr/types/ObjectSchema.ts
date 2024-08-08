/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../..";

export interface ObjectSchema
    extends FernOpenapiIr.WithDescription,
        FernOpenapiIr.WithName,
        FernOpenapiIr.WithSdkGroupName,
        FernOpenapiIr.WithAvailability,
        FernOpenapiIr.WithSource {
    allOf: FernOpenapiIr.ReferencedSchema[];
    properties: FernOpenapiIr.ObjectProperty[];
    allOfPropertyConflicts: FernOpenapiIr.AllOfPropertyConflict[];
    additionalProperties: boolean;
}
