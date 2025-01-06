/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { EnumValue } from "../../finalIr/types/EnumValue";
import { WithDescription } from "../../commons/types/WithDescription";
import { WithName } from "../../commons/types/WithName";
import { WithSdkGroupName } from "../../commons/types/WithSdkGroupName";
import { WithAvailability } from "../../commons/types/WithAvailability";
import { WithSource } from "../../commons/types/WithSource";
import { WithTitle } from "../../commons/types/WithTitle";
import { WithInline } from "../../commons/types/WithInline";

export const EnumSchemaWithExample: core.serialization.ObjectSchema<
    serializers.EnumSchemaWithExample.Raw,
    FernOpenapiIr.EnumSchemaWithExample
> = core.serialization
    .objectWithoutOptionalProperties({
        default: EnumValue.optional(),
        values: core.serialization.list(EnumValue),
        example: core.serialization.string().optional(),
    })
    .extend(WithDescription)
    .extend(WithName)
    .extend(WithSdkGroupName)
    .extend(WithAvailability)
    .extend(WithSource)
    .extend(WithTitle)
    .extend(WithInline);

export declare namespace EnumSchemaWithExample {
    export interface Raw
        extends WithDescription.Raw,
            WithName.Raw,
            WithSdkGroupName.Raw,
            WithAvailability.Raw,
            WithSource.Raw,
            WithTitle.Raw,
            WithInline.Raw {
        default?: EnumValue.Raw | null;
        values: EnumValue.Raw[];
        example?: string | null;
    }
}
