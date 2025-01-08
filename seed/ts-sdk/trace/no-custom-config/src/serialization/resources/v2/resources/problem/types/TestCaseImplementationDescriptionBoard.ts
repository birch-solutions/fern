/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index.js";
import * as SeedTrace from "../../../../../../api/index.js";
import * as core from "../../../../../../core/index.js";
import { ParameterId } from "./ParameterId.js";

export const TestCaseImplementationDescriptionBoard: core.serialization.Schema<
    serializers.v2.TestCaseImplementationDescriptionBoard.Raw,
    SeedTrace.v2.TestCaseImplementationDescriptionBoard
> = core.serialization
    .union("type", {
        html: core.serialization.object({
            value: core.serialization.string(),
        }),
        paramId: core.serialization.object({
            value: ParameterId,
        }),
    })
    .transform<SeedTrace.v2.TestCaseImplementationDescriptionBoard>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace TestCaseImplementationDescriptionBoard {
    export type Raw = TestCaseImplementationDescriptionBoard.Html | TestCaseImplementationDescriptionBoard.ParamId;

    export interface Html {
        type: "html";
        value: string;
    }

    export interface ParamId {
        type: "paramId";
        value: ParameterId.Raw;
    }
}
