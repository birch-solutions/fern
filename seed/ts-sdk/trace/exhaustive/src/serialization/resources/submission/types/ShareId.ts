/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";

export const ShareId: core.serialization.Schema<serializers.ShareId.Raw, SeedTrace.ShareId> = core.serialization
    .string()
    .transform({
        transform: SeedTrace.ShareId,
        untransform: (value) => value,
    });

export declare namespace ShareId {
    type Raw = string;
}
