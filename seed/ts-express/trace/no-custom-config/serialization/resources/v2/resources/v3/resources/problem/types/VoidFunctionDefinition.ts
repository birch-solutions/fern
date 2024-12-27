/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as SeedTrace from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const VoidFunctionDefinition: core.serialization.ObjectSchema<
    serializers.v2.v3.VoidFunctionDefinition.Raw,
    SeedTrace.v2.v3.VoidFunctionDefinition
> = core.serialization.object({
    parameters: core.serialization.list(core.serialization.lazyObject(() => serializers.v2.v3.Parameter)),
    code: core.serialization.lazyObject(() => serializers.v2.v3.FunctionImplementationForMultipleLanguages),
});

export declare namespace VoidFunctionDefinition {
    export interface Raw {
        parameters: serializers.v2.v3.Parameter.Raw[];
        code: serializers.v2.v3.FunctionImplementationForMultipleLanguages.Raw;
    }
}
