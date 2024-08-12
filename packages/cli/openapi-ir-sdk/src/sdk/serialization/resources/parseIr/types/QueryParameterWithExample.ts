/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { WithDescription } from "../../commons/types/WithDescription";
import { WithAvailability } from "../../commons/types/WithAvailability";
import { WithSource } from "../../commons/types/WithSource";

export const QueryParameterWithExample: core.serialization.ObjectSchema<
    serializers.QueryParameterWithExample.Raw,
    FernOpenapiIr.QueryParameterWithExample
> = core.serialization
    .objectWithoutOptionalProperties({
        name: core.serialization.string(),
        schema: core.serialization.lazy(() => serializers.SchemaWithExample),
        parameterNameOverride: core.serialization.string().optional(),
    })
    .extend(WithDescription)
    .extend(WithAvailability)
    .extend(WithSource);

export declare namespace QueryParameterWithExample {
    interface Raw extends WithDescription.Raw, WithAvailability.Raw, WithSource.Raw {
        name: string;
        schema: serializers.SchemaWithExample.Raw;
        parameterNameOverride?: string | null;
    }
}
