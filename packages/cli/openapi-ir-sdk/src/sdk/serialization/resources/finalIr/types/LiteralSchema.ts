/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { LiteralSchemaValue } from "./LiteralSchemaValue";
import { WithDescription } from "../../commons/types/WithDescription";
import { WithName } from "../../commons/types/WithName";
import { WithSdkGroupName } from "../../commons/types/WithSdkGroupName";
import { WithAvailability } from "../../commons/types/WithAvailability";

export const LiteralSchema: core.serialization.ObjectSchema<
    serializers.LiteralSchema.Raw,
    FernOpenapiIr.LiteralSchema
> = core.serialization
    .objectWithoutOptionalProperties({
        value: LiteralSchemaValue,
    })
    .extend(WithDescription)
    .extend(WithName)
    .extend(WithSdkGroupName)
    .extend(WithAvailability);

export declare namespace LiteralSchema {
    interface Raw extends WithDescription.Raw, WithName.Raw, WithSdkGroupName.Raw, WithAvailability.Raw {
        value: LiteralSchemaValue.Raw;
    }
}
