/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { ReviewerSchema } from "./ReviewerSchema";

export const ReviewersSchema: core.serialization.ObjectSchema<
    serializers.ReviewersSchema.Raw,
    FernDefinition.ReviewersSchema
> = core.serialization.object({
    teams: core.serialization.list(ReviewerSchema).optional(),
    users: core.serialization.list(ReviewerSchema).optional(),
});

export declare namespace ReviewersSchema {
    interface Raw {
        teams?: ReviewerSchema.Raw[] | null;
        users?: ReviewerSchema.Raw[] | null;
    }
}
