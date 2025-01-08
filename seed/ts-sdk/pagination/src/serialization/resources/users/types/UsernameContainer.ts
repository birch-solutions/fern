/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedPagination from "../../../../api/index.js";
import * as core from "../../../../core/index.js";

export const UsernameContainer: core.serialization.ObjectSchema<
    serializers.UsernameContainer.Raw,
    SeedPagination.UsernameContainer
> = core.serialization.object({
    results: core.serialization.list(core.serialization.string()),
});

export declare namespace UsernameContainer {
    export interface Raw {
        results: string[];
    }
}
