/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { PrimitiveSchemaWithExample } from "./PrimitiveSchemaWithExample";
import { WithSdkGroupName } from "../../commons/types/WithSdkGroupName";
import { WithSchemaId } from "../../commons/types/WithSchemaId";
import { WithName } from "../../commons/types/WithName";
import { WithDescription } from "../../commons/types/WithDescription";
import { WithAvailability } from "../../commons/types/WithAvailability";
import { WithEncoding } from "../../commons/types/WithEncoding";

export const MapSchemaWithExample: core.serialization.ObjectSchema<
    serializers.MapSchemaWithExample.Raw,
    FernOpenapiIr.MapSchemaWithExample
> = core.serialization
    .objectWithoutOptionalProperties({
        key: PrimitiveSchemaWithExample,
        value: core.serialization.lazy(() => serializers.SchemaWithExample),
        example: core.serialization.unknown().optional(),
    })
    .extend(WithSdkGroupName)
    .extend(WithSchemaId)
    .extend(WithName)
    .extend(WithDescription)
    .extend(WithAvailability)
    .extend(WithEncoding);

export declare namespace MapSchemaWithExample {
    interface Raw
        extends WithSdkGroupName.Raw,
            WithSchemaId.Raw,
            WithName.Raw,
            WithDescription.Raw,
            WithAvailability.Raw,
            WithEncoding.Raw {
        key: PrimitiveSchemaWithExample.Raw;
        value: serializers.SchemaWithExample.Raw;
        example?: unknown | null;
    }
}
