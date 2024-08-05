/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as SeedTrace from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { Parameter } from "./Parameter";

export const VoidFunctionSignatureThatTakesActualResult: core.serialization.ObjectSchema<serializers.v2.v3.VoidFunctionSignatureThatTakesActualResult.Raw, SeedTrace.v2.v3.VoidFunctionSignatureThatTakesActualResult> = core.serialization.object({
        "parameters": core.serialization.list(Parameter),
        "actualResultType": core.serialization.lazy(() => serializers.VariableType)
    });

export declare namespace VoidFunctionSignatureThatTakesActualResult {
    interface Raw {
        "parameters": Parameter.Raw[];
        "actualResultType": serializers.VariableType.Raw;
    }
}
