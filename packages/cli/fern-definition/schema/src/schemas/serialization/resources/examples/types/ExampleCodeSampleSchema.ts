/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { ExampleCodeSampleSchemaSdk } from "./ExampleCodeSampleSchemaSdk";
import { ExampleCodeSampleSchemaLanguage } from "./ExampleCodeSampleSchemaLanguage";

export const ExampleCodeSampleSchema: core.serialization.Schema<
    serializers.ExampleCodeSampleSchema.Raw,
    FernDefinition.ExampleCodeSampleSchema
> = core.serialization.undiscriminatedUnion([ExampleCodeSampleSchemaSdk, ExampleCodeSampleSchemaLanguage]);

export declare namespace ExampleCodeSampleSchema {
    export type Raw = ExampleCodeSampleSchemaSdk.Raw | ExampleCodeSampleSchemaLanguage.Raw;
}
