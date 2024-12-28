/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedPagination from "../../../../api/index";
import * as core from "../../../../core";

export const UserOptionalListContainer: core.serialization.ObjectSchema<
    serializers.UserOptionalListContainer.Raw,
    SeedPagination.UserOptionalListContainer
> = core.serialization.object({
    users: core.serialization.list(core.serialization.lazyObject(() => serializers.User)).optional(),
});

export declare namespace UserOptionalListContainer {
    export interface Raw {
        users?: serializers.User.Raw[] | null;
    }
}
