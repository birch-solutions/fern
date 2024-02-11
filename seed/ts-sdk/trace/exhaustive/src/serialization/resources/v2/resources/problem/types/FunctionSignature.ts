/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as SeedTrace from "../../../../../../api";
import * as core from "../../../../../../core";

export const FunctionSignature: core.serialization.Schema<
    serializers.v2.FunctionSignature.Raw,
    SeedTrace.v2.FunctionSignature
> = core.serialization
    .union("type", {
        void: core.serialization.lazyObject(async () => (await import("../../../../..")).v2.VoidFunctionSignature),
        nonVoid: core.serialization.lazyObject(
            async () => (await import("../../../../..")).v2.NonVoidFunctionSignature
        ),
        voidThatTakesActualResult: core.serialization.lazyObject(
            async () => (await import("../../../../..")).v2.VoidFunctionSignatureThatTakesActualResult
        ),
    })
    .transform<SeedTrace.v2.FunctionSignature>({
        transform: (value) => {
            switch (value.type) {
                case "void":
                    return SeedTrace.v2.FunctionSignature.void(value);
                case "nonVoid":
                    return SeedTrace.v2.FunctionSignature.nonVoid(value);
                case "voidThatTakesActualResult":
                    return SeedTrace.v2.FunctionSignature.voidThatTakesActualResult(value);
                default:
                    return SeedTrace.v2.FunctionSignature._unknown(value);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace FunctionSignature {
    type Raw = FunctionSignature.Void | FunctionSignature.NonVoid | FunctionSignature.VoidThatTakesActualResult;

    interface Void extends serializers.v2.VoidFunctionSignature.Raw {
        type: "void";
    }

    interface NonVoid extends serializers.v2.NonVoidFunctionSignature.Raw {
        type: "nonVoid";
    }

    interface VoidThatTakesActualResult extends serializers.v2.VoidFunctionSignatureThatTakesActualResult.Raw {
        type: "voidThatTakesActualResult";
    }
}
