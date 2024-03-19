/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SeedObjectsWithImports from "../../../../api";
import * as core from "../../../../core";
import { FileInfo } from "./FileInfo";

export const File_: core.serialization.ObjectSchema<serializers.File_.Raw, SeedObjectsWithImports.File_> =
    core.serialization.object({
        name: core.serialization.string(),
        contents: core.serialization.string(),
        info: FileInfo,
    });

export declare namespace File_ {
    interface Raw {
        name: string;
        contents: string;
        info: FileInfo.Raw;
    }
}
