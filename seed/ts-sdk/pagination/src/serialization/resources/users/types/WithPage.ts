/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedPagination from "../../../../api/index";
import * as core from "../../../../core";

export const WithPage: core.serialization.ObjectSchema<serializers.WithPage.Raw, SeedPagination.WithPage> =
    core.serialization.object({
        page: core.serialization.number().optional(),
    });

export declare namespace WithPage {
    interface Raw {
        page?: number | null;
    }
}
