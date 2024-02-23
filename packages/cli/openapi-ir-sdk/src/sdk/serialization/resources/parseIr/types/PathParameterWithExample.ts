/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const PathParameterWithExample: core.serialization.ObjectSchema<
    serializers.PathParameterWithExample.Raw,
    FernOpenapiIr.PathParameterWithExample
> = core.serialization
    .objectWithoutOptionalProperties({
        name: core.serialization.string(),
        schema: core.serialization.lazy(async () => (await import("../../..")).SchemaWithExample),
        variableReference: core.serialization.string().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithDescription));

export declare namespace PathParameterWithExample {
    interface Raw extends serializers.WithDescription.Raw {
        name: string;
        schema: serializers.SchemaWithExample.Raw;
        variableReference?: string | null;
    }
}
