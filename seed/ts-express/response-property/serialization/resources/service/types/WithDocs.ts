/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedResponseProperty from "../../../../api/index";
import * as core from "../../../../core";

export const WithDocs: core.serialization.ObjectSchema<serializers.WithDocs.Raw, SeedResponseProperty.WithDocs> =
    core.serialization.object({
        docs: core.serialization.string(),
    });

export declare namespace WithDocs {
    interface Raw {
        docs: string;
    }
}
