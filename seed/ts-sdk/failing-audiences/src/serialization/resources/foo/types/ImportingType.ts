/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedAudiences from "../../../../api/index";
import * as core from "../../../../core";
import { Imported } from "../../commons/types/Imported";

export const ImportingType: core.serialization.ObjectSchema<
    serializers.ImportingType.Raw,
    SeedAudiences.ImportingType
> = core.serialization.object({
    imported: Imported,
});

export declare namespace ImportingType {
    interface Raw {
        imported: Imported.Raw;
    }
}
