/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { WithDescription } from "../../commons/types/WithDescription";
import { WithName } from "../../commons/types/WithName";
import { WithSdkGroupName } from "../../commons/types/WithSdkGroupName";
import { WithSchemaId } from "../../commons/types/WithSchemaId";
import { WithAvailability } from "../../commons/types/WithAvailability";
import { WithEncoding } from "../../commons/types/WithEncoding";
import { WithSource } from "../../commons/types/WithSource";

export const UnDiscriminatedOneOfSchemaWithExample: core.serialization.ObjectSchema<
    serializers.UnDiscriminatedOneOfSchemaWithExample.Raw,
    FernOpenapiIr.UnDiscriminatedOneOfSchemaWithExample
> = core.serialization
    .objectWithoutOptionalProperties({
        schemas: core.serialization.list(core.serialization.lazy(() => serializers.SchemaWithExample)),
    })
    .extend(WithDescription)
    .extend(WithName)
    .extend(WithSdkGroupName)
    .extend(WithSchemaId)
    .extend(WithAvailability)
    .extend(WithEncoding)
    .extend(WithSource);

export declare namespace UnDiscriminatedOneOfSchemaWithExample {
    interface Raw
        extends WithDescription.Raw,
            WithName.Raw,
            WithSdkGroupName.Raw,
            WithSchemaId.Raw,
            WithAvailability.Raw,
            WithEncoding.Raw,
            WithSource.Raw {
        schemas: serializers.SchemaWithExample.Raw[];
    }
}
