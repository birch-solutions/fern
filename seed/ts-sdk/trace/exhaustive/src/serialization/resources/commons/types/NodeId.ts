/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";

export const NodeId: core.serialization.Schema<serializers.NodeId.Raw, SeedTrace.NodeId> = core.serialization
    .string()
    .transform({
        transform: SeedTrace.NodeId,
        untransform: (value) => value,
    });

export declare namespace NodeId {
    type Raw = string;
}
