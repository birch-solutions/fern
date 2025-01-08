/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";

export const TracedFile: core.serialization.ObjectSchema<serializers.TracedFile.Raw, SeedTrace.TracedFile> =
    core.serialization.object({
        filename: core.serialization.string(),
        directory: core.serialization.string(),
    });

export declare namespace TracedFile {
    export interface Raw {
        filename: string;
        directory: string;
    }
}
