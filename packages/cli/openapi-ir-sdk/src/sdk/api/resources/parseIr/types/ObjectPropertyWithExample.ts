/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../..";

export interface ObjectPropertyWithExample {
    key: string;
    schema: FernOpenapiIr.SchemaWithExample;
    audiences: string[];
    /** The schemas that conflict with this property */
    conflict: Record<FernOpenapiIr.SchemaId, FernOpenapiIr.ObjectPropertyConflictInfo>;
    /** An optional name override populated via `x-fern-property-name`. */
    nameOverride: string | undefined;
    /** A unique name for the property. */
    generatedName: string;
}
