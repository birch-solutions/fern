/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as SeedNullable from "../../../../../api/index";
import * as core from "../../../../../core";

export const DeleteUserRequest: core.serialization.Schema<
    serializers.DeleteUserRequest.Raw,
    SeedNullable.DeleteUserRequest
> = core.serialization.object({
    username: core.serialization.string().optional().optional(),
});

export declare namespace DeleteUserRequest {
    export interface Raw {
        username?: (string | null | undefined) | null;
    }
}
