/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedTrace from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { NonVoidFunctionDefinition } from "./NonVoidFunctionDefinition";
import { AssertCorrectnessCheck } from "./AssertCorrectnessCheck";

export const TestCaseWithActualResultImplementation: core.serialization.ObjectSchema<serializers.v2.TestCaseWithActualResultImplementation.Raw, SeedTrace.v2.TestCaseWithActualResultImplementation> = core.serialization.object({
        "getActualResult": NonVoidFunctionDefinition,
        "assertCorrectnessCheck": AssertCorrectnessCheck
    });

export declare namespace TestCaseWithActualResultImplementation {
    interface Raw {
        "getActualResult": NonVoidFunctionDefinition.Raw;
        "assertCorrectnessCheck": AssertCorrectnessCheck.Raw;
    }
}
