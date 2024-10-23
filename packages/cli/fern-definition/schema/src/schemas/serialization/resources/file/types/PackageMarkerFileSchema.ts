/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { Navigation } from "./Navigation";
import { Export } from "./Export";
import { DefinitionFileSchema } from "./DefinitionFileSchema";

export const PackageMarkerFileSchema: core.serialization.ObjectSchema<
    serializers.PackageMarkerFileSchema.Raw,
    FernDefinition.PackageMarkerFileSchema
> = core.serialization
    .object({
        navigation: Navigation.optional(),
        export: Export.optional(),
    })
    .extend(DefinitionFileSchema);

export declare namespace PackageMarkerFileSchema {
    interface Raw extends DefinitionFileSchema.Raw {
        navigation?: Navigation.Raw | null;
        export?: Export.Raw | null;
    }
}
