/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index.js";
import * as SeedTrace from "../../../../../../../../api/index.js";
import * as core from "../../../../../../../../core/index.js";
import { VoidFunctionSignature } from "./VoidFunctionSignature.js";
import { NonVoidFunctionSignature } from "./NonVoidFunctionSignature.js";
import { VoidFunctionSignatureThatTakesActualResult } from "./VoidFunctionSignatureThatTakesActualResult.js";

export const FunctionSignature: core.serialization.Schema<
    serializers.v2.v3.FunctionSignature.Raw,
    SeedTrace.v2.v3.FunctionSignature
> = core.serialization
    .union("type", {
        void: VoidFunctionSignature,
        nonVoid: NonVoidFunctionSignature,
        voidThatTakesActualResult: VoidFunctionSignatureThatTakesActualResult,
    })
    .transform<SeedTrace.v2.v3.FunctionSignature>({
        transform: (value) => {
            switch (value.type) {
                case "void":
                    return SeedTrace.v2.v3.FunctionSignature.void(value);
                case "nonVoid":
                    return SeedTrace.v2.v3.FunctionSignature.nonVoid(value);
                case "voidThatTakesActualResult":
                    return SeedTrace.v2.v3.FunctionSignature.voidThatTakesActualResult(value);
                default:
                    return SeedTrace.v2.v3.FunctionSignature._unknown(value);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace FunctionSignature {
    export type Raw = FunctionSignature.Void | FunctionSignature.NonVoid | FunctionSignature.VoidThatTakesActualResult;

    export interface Void extends VoidFunctionSignature.Raw {
        type: "void";
    }

    export interface NonVoid extends NonVoidFunctionSignature.Raw {
        type: "nonVoid";
    }

    export interface VoidThatTakesActualResult extends VoidFunctionSignatureThatTakesActualResult.Raw {
        type: "voidThatTakesActualResult";
    }
}
