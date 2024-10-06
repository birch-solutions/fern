/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { PrimitiveSchema } from "./PrimitiveSchema";
import { WithDescription } from "../../commons/types/WithDescription";
import { WithName } from "../../commons/types/WithName";
import { WithSdkGroupName } from "../../commons/types/WithSdkGroupName";
import { WithAvailability } from "../../commons/types/WithAvailability";
import { WithEncoding } from "../../commons/types/WithEncoding";
import { WithTitle } from "../../commons/types/WithTitle";

export const MapSchema: core.serialization.ObjectSchema<serializers.MapSchema.Raw, FernOpenapiIr.MapSchema> =
    core.serialization
        .objectWithoutOptionalProperties({
            key: PrimitiveSchema,
            value: core.serialization.lazy(() => serializers.Schema)
        })
        .extend(WithDescription)
        .extend(WithName)
        .extend(WithSdkGroupName)
        .extend(WithAvailability)
        .extend(WithEncoding)
        .extend(WithTitle);

export declare namespace MapSchema {
    interface Raw
        extends WithDescription.Raw,
            WithName.Raw,
            WithSdkGroupName.Raw,
            WithAvailability.Raw,
            WithEncoding.Raw,
            WithTitle.Raw {
        key: PrimitiveSchema.Raw;
        value: serializers.Schema.Raw;
    }
}
