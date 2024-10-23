/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernDefinition from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { WithEnvironmentVariable } from "./WithEnvironmentVariable";
import { WithName } from "../../commons/types/WithName";

export const AuthVariable: core.serialization.ObjectSchema<
    serializers.fernDefinition.AuthVariable.Raw,
    FernDefinition.fernDefinition.AuthVariable
> = core.serialization.object({}).extend(WithEnvironmentVariable).extend(WithName);

export declare namespace AuthVariable {
    interface Raw extends WithEnvironmentVariable.Raw, WithName.Raw {}
}
