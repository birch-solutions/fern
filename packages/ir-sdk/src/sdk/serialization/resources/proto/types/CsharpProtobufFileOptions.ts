/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const CsharpProtobufFileOptions: core.serialization.ObjectSchema<
    serializers.CsharpProtobufFileOptions.Raw,
    FernIr.CsharpProtobufFileOptions
> = core.serialization.objectWithoutOptionalProperties({
    namespace: core.serialization.string(),
});

export declare namespace CsharpProtobufFileOptions {
    interface Raw {
        namespace: string;
    }
}
