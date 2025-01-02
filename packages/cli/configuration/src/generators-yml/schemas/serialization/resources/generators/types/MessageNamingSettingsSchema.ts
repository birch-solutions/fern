/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";

export const MessageNamingSettingsSchema: core.serialization.Schema<
    serializers.MessageNamingSettingsSchema.Raw,
    FernDefinition.MessageNamingSettingsSchema
> = core.serialization.enum_(["v1", "v2"]);

export declare namespace MessageNamingSettingsSchema {
    export type Raw = "v1" | "v2";
}
