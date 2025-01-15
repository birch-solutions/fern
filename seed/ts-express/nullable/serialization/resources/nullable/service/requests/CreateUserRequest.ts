/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as SeedNullable from "../../../../../api/index";
import * as core from "../../../../../core";

export const CreateUserRequest: core.serialization.Schema<
    serializers.CreateUserRequest.Raw,
    SeedNullable.CreateUserRequest
> = core.serialization.object({
    username: core.serialization.string(),
    tags: core.serialization.list(core.serialization.string()).optional(),
    metadata: core.serialization.lazyObject(() => serializers.Metadata).optional(),
    avatar: core.serialization.string().optional().optional(),
});

export declare namespace CreateUserRequest {
    export interface Raw {
        username: string;
        tags?: string[] | null;
        metadata?: serializers.Metadata.Raw | null;
        avatar?: (string | null | undefined) | null;
    }
}
