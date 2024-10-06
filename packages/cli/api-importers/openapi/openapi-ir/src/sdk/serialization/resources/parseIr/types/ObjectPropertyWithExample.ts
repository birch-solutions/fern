/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { SchemaId } from "../../commons/types/SchemaId";
import { ObjectPropertyConflictInfo } from "../../finalIr/types/ObjectPropertyConflictInfo";
import { WithAvailability } from "../../commons/types/WithAvailability";

export const ObjectPropertyWithExample: core.serialization.ObjectSchema<
    serializers.ObjectPropertyWithExample.Raw,
    FernOpenapiIr.ObjectPropertyWithExample
> = core.serialization
    .objectWithoutOptionalProperties({
        key: core.serialization.string(),
        schema: core.serialization.lazy(() => serializers.SchemaWithExample),
        audiences: core.serialization.list(core.serialization.string()),
        conflict: core.serialization.record(SchemaId, ObjectPropertyConflictInfo),
        nameOverride: core.serialization.string().optional(),
        generatedName: core.serialization.string()
    })
    .extend(WithAvailability);

export declare namespace ObjectPropertyWithExample {
    interface Raw extends WithAvailability.Raw {
        key: string;
        schema: serializers.SchemaWithExample.Raw;
        audiences: string[];
        conflict: Record<SchemaId.Raw, ObjectPropertyConflictInfo.Raw>;
        nameOverride?: string | null;
        generatedName: string;
    }
}
