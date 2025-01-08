/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index.js";
import * as SeedTrace from "../../../../../../api/index.js";
import * as core from "../../../../../../core/index.js";

export const ParameterId: core.serialization.Schema<serializers.v2.ParameterId.Raw, SeedTrace.v2.ParameterId> =
    core.serialization.string().transform({
        transform: SeedTrace.v2.ParameterId,
        untransform: (value) => value,
    });

export declare namespace ParameterId {
    export type Raw = string;
}
