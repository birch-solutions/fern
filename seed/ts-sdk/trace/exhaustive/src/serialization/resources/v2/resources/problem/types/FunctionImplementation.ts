/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedTrace from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const FunctionImplementation: core.serialization.ObjectSchema<
    serializers.v2.FunctionImplementation.Raw,
    SeedTrace.v2.FunctionImplementation
> = core.serialization.object({
    impl: core.serialization.string(),
    imports: core.serialization.string().optional(),
});

export declare namespace FunctionImplementation {
    interface Raw {
        impl: string;
        imports?: string | null;
    }
}
