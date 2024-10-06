/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { WithDescription } from "../../commons/types/WithDescription";
import { WithSource } from "../../commons/types/WithSource";

export const JsonResponse: core.serialization.ObjectSchema<serializers.JsonResponse.Raw, FernOpenapiIr.JsonResponse> =
    core.serialization
        .objectWithoutOptionalProperties({
            schema: core.serialization.lazy(() => serializers.Schema),
            responseProperty: core.serialization.string().optional()
        })
        .extend(WithDescription)
        .extend(WithSource);

export declare namespace JsonResponse {
    interface Raw extends WithDescription.Raw, WithSource.Raw {
        schema: serializers.Schema.Raw;
        responseProperty?: string | null;
    }
}
