/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { ProtobufFileOptions } from "./ProtobufFileOptions";

export const ProtobufFile: core.serialization.ObjectSchema<serializers.ProtobufFile.Raw, FernIr.ProtobufFile> =
    core.serialization.objectWithoutOptionalProperties({
        filepath: core.serialization.string(),
        packageName: core.serialization.string().optional(),
        options: ProtobufFileOptions.optional(),
    });

export declare namespace ProtobufFile {
    interface Raw {
        filepath: string;
        packageName?: string | null;
        options?: ProtobufFileOptions.Raw | null;
    }
}
