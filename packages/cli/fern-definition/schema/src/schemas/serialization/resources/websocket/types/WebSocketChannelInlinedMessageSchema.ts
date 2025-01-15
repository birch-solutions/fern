/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { ObjectExtendsSchema } from "../../types/types/ObjectExtendsSchema";
import { ObjectPropertySchema } from "../../types/types/ObjectPropertySchema";

export const WebSocketChannelInlinedMessageSchema: core.serialization.ObjectSchema<
    serializers.WebSocketChannelInlinedMessageSchema.Raw,
    FernDefinition.WebSocketChannelInlinedMessageSchema
> = core.serialization.object({
    name: core.serialization.string(),
    extends: ObjectExtendsSchema.optional(),
    properties: core.serialization.record(core.serialization.string(), ObjectPropertySchema).optional(),
});

export declare namespace WebSocketChannelInlinedMessageSchema {
    export interface Raw {
        name: string;
        extends?: ObjectExtendsSchema.Raw | null;
        properties?: Record<string, ObjectPropertySchema.Raw> | null;
    }
}
