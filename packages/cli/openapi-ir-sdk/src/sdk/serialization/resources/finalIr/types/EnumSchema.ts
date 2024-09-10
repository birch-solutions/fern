/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { EnumValue } from "./EnumValue";
import { WithDescription } from "../../commons/types/WithDescription";
import { WithName } from "../../commons/types/WithName";
import { WithSchemaId } from "../../commons/types/WithSchemaId";
import { WithSdkGroupName } from "../../commons/types/WithSdkGroupName";
import { WithAvailability } from "../../commons/types/WithAvailability";
import { WithSource } from "../../commons/types/WithSource";

export const EnumSchema: core.serialization.ObjectSchema<serializers.EnumSchema.Raw, FernOpenapiIr.EnumSchema> =
    core.serialization
        .objectWithoutOptionalProperties({
            default: EnumValue.optional(),
            values: core.serialization.list(EnumValue),
        })
        .extend(WithDescription)
        .extend(WithName)
        .extend(WithSchemaId)
        .extend(WithSdkGroupName)
        .extend(WithAvailability)
        .extend(WithSource);

export declare namespace EnumSchema {
    interface Raw
        extends WithDescription.Raw,
            WithName.Raw,
            WithSchemaId.Raw,
            WithSdkGroupName.Raw,
            WithAvailability.Raw,
            WithSource.Raw {
        default?: EnumValue.Raw | null;
        values: EnumValue.Raw[];
    }
}
