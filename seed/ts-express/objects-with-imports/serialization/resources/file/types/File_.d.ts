/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SeedObjectsWithImports from "../../../../api/index";
import * as core from "../../../../core";
export declare const File_: core.serialization.ObjectSchema<serializers.File_.Raw, SeedObjectsWithImports.File_>;
export declare namespace File_ {
    interface Raw {
        name: string;
        contents: string;
        info: serializers.FileInfo.Raw;
    }
}
