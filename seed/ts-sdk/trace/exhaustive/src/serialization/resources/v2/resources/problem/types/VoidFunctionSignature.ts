/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as SeedTrace from "../../../../../../api";
import * as core from "../../../../../../core";

export const VoidFunctionSignature: core.serialization.ObjectSchema<
    serializers.v2.VoidFunctionSignature.Raw,
    SeedTrace.v2.VoidFunctionSignature
> = core.serialization.object({
    parameters: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).v2.Parameter)
    ),
});

export declare namespace VoidFunctionSignature {
    interface Raw {
        parameters: serializers.v2.Parameter.Raw[];
    }
}
