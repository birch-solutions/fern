/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { SchemaId } from "../../commons/types/SchemaId";
import { NamespaceId } from "../../commons/types/NamespaceId";

export const Schemas: core.serialization.ObjectSchema<serializers.Schemas.Raw, FernOpenapiIr.Schemas> =
    core.serialization.objectWithoutOptionalProperties({
        rootSchemas: core.serialization.record(
            SchemaId,
            core.serialization.lazy(() => serializers.Schema)
        ),
        namespacedSchemas: core.serialization.record(
            NamespaceId,
            core.serialization.record(
                SchemaId,
                core.serialization.lazy(() => serializers.Schema)
            )
        ),
    });

export declare namespace Schemas {
    interface Raw {
        rootSchemas: Record<SchemaId.Raw, serializers.Schema.Raw>;
        namespacedSchemas: Record<NamespaceId.Raw, Record<SchemaId.Raw, serializers.Schema.Raw>>;
    }
}
