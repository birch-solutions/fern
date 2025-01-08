/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";

export const Test: core.serialization.Schema<serializers.Test.Raw, SeedTrace.Test> = core.serialization
    .union("type", {
        and: core.serialization.object({
            value: core.serialization.boolean(),
        }),
        or: core.serialization.object({
            value: core.serialization.boolean(),
        }),
    })
    .transform<SeedTrace.Test>({
        transform: (value) => {
            switch (value.type) {
                case "and":
                    return SeedTrace.Test.and(value.value);
                case "or":
                    return SeedTrace.Test.or(value.value);
                default:
                    return SeedTrace.Test._unknown(value);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Test {
    export type Raw = Test.And | Test.Or;

    export interface And {
        type: "and";
        value: boolean;
    }

    export interface Or {
        type: "or";
        value: boolean;
    }
}
