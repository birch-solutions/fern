/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as SeedTrace from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { Parameter } from "./Parameter";
import { FunctionImplementationForMultipleLanguages } from "./FunctionImplementationForMultipleLanguages";

export const VoidFunctionDefinitionThatTakesActualResult: core.serialization.ObjectSchema<serializers.v2.v3.VoidFunctionDefinitionThatTakesActualResult.Raw, SeedTrace.v2.v3.VoidFunctionDefinitionThatTakesActualResult> = core.serialization.object({
        "additionalParameters": core.serialization.list(Parameter),
        "code": FunctionImplementationForMultipleLanguages
    });

export declare namespace VoidFunctionDefinitionThatTakesActualResult {
    interface Raw {
        "additionalParameters": Parameter.Raw[];
        "code": FunctionImplementationForMultipleLanguages.Raw;
    }
}
