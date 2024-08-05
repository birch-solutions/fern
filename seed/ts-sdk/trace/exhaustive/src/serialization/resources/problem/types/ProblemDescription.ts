/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
import { ProblemDescriptionBoard } from "./ProblemDescriptionBoard";

export const ProblemDescription: core.serialization.ObjectSchema<
    serializers.ProblemDescription.Raw,
    SeedTrace.ProblemDescription
> = core.serialization.object({
    boards: core.serialization.list(ProblemDescriptionBoard),
});

export declare namespace ProblemDescription {
    interface Raw {
        boards: ProblemDescriptionBoard.Raw[];
    }
}
