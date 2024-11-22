/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { WithDocsSchema } from "../../commons/types/WithDocsSchema";
import { WithInline } from "../../commons/types/WithInline";

export const HttpResponseSchemaDetailed: core.serialization.ObjectSchema<
    serializers.HttpResponseSchemaDetailed.Raw,
    FernDefinition.HttpResponseSchemaDetailed
> = core.serialization
    .object({
        type: core.serialization.string(),
        property: core.serialization.string().optional(),
        "status-code": core.serialization.number().optional(),
    })
    .extend(WithDocsSchema)
    .extend(WithInline);

export declare namespace HttpResponseSchemaDetailed {
    interface Raw extends WithDocsSchema.Raw, WithInline.Raw {
        type: string;
        property?: string | null;
        "status-code"?: number | null;
    }
}
