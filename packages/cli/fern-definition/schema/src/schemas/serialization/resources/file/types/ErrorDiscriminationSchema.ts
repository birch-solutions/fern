/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { PropertyBasedErrorDiscrimination } from "./PropertyBasedErrorDiscrimination";
import { StatusCodeBasedErrorDiscrimination } from "./StatusCodeBasedErrorDiscrimination";

export const ErrorDiscriminationSchema: core.serialization.Schema<
    serializers.ErrorDiscriminationSchema.Raw,
    FernDefinition.ErrorDiscriminationSchema
> = core.serialization.undiscriminatedUnion([PropertyBasedErrorDiscrimination, StatusCodeBasedErrorDiscrimination]);

export declare namespace ErrorDiscriminationSchema {
    type Raw = PropertyBasedErrorDiscrimination.Raw | StatusCodeBasedErrorDiscrimination.Raw;
}
