/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { ResponseErrorWithDocsSchema } from "./ResponseErrorWithDocsSchema";

export const ResponseError: core.serialization.Schema<serializers.ResponseError.Raw, FernDefinition.ResponseError> =
    core.serialization.undiscriminatedUnion([core.serialization.string(), ResponseErrorWithDocsSchema]);

export declare namespace ResponseError {
    export type Raw = string | ResponseErrorWithDocsSchema.Raw;
}
