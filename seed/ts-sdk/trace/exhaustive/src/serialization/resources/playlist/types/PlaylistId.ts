/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";

export const PlaylistId: core.serialization.Schema<serializers.PlaylistId.Raw, SeedTrace.PlaylistId> =
    core.serialization.string().transform({
        transform: SeedTrace.PlaylistId,
        untransform: (value) => value,
    });

export declare namespace PlaylistId {
    export type Raw = string;
}
