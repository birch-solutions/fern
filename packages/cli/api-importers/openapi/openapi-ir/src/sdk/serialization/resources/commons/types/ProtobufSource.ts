/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";

export const ProtobufSource: core.serialization.ObjectSchema<
    serializers.ProtobufSource.Raw,
    FernOpenapiIr.ProtobufSource
> = core.serialization.objectWithoutOptionalProperties({
    file: core.serialization.string()
});

export declare namespace ProtobufSource {
    interface Raw {
        file: string;
    }
}
