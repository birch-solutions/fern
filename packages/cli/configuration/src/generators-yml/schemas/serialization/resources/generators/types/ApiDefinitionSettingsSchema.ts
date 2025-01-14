/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { UnionSettingsSchema } from "./UnionSettingsSchema";
import { MessageNamingSettingsSchema } from "./MessageNamingSettingsSchema";

export const ApiDefinitionSettingsSchema: core.serialization.ObjectSchema<
    serializers.ApiDefinitionSettingsSchema.Raw,
    FernDefinition.ApiDefinitionSettingsSchema
> = core.serialization.object({
    "use-title": core.serialization.boolean().optional(),
    unions: UnionSettingsSchema.optional(),
    "message-naming": MessageNamingSettingsSchema.optional(),
    "respect-nullable-schemas": core.serialization.boolean().optional(),
    "only-include-referenced-schemas": core.serialization.boolean().optional(),
    "inline-path-parameters": core.serialization.boolean().optional(),
});

export declare namespace ApiDefinitionSettingsSchema {
    export interface Raw {
        "use-title"?: boolean | null;
        unions?: UnionSettingsSchema.Raw | null;
        "message-naming"?: MessageNamingSettingsSchema.Raw | null;
        "respect-nullable-schemas"?: boolean | null;
        "only-include-referenced-schemas"?: boolean | null;
        "inline-path-parameters"?: boolean | null;
    }
}
