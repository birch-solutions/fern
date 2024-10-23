/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { SingleBaseUrlEnvironmentSchema } from "./SingleBaseUrlEnvironmentSchema";
import { MultipleBaseUrlsEnvironmentSchema } from "./MultipleBaseUrlsEnvironmentSchema";

export const EnvironmentSchema: core.serialization.Schema<
    serializers.EnvironmentSchema.Raw,
    FernDefinition.EnvironmentSchema
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    SingleBaseUrlEnvironmentSchema,
    MultipleBaseUrlsEnvironmentSchema,
]);

export declare namespace EnvironmentSchema {
    type Raw = string | SingleBaseUrlEnvironmentSchema.Raw | MultipleBaseUrlsEnvironmentSchema.Raw;
}
