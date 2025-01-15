/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { WithDocsSchema } from "../../commons/types/WithDocsSchema";

export const WebSocketChannelReferencedMessageSchema: core.serialization.ObjectSchema<
    serializers.WebSocketChannelReferencedMessageSchema.Raw,
    FernDefinition.WebSocketChannelReferencedMessageSchema
> = core.serialization
    .object({
        type: core.serialization.string(),
    })
    .extend(WithDocsSchema);

export declare namespace WebSocketChannelReferencedMessageSchema {
    export interface Raw extends WithDocsSchema.Raw {
        type: string;
    }
}
