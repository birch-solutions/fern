/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { SchemaId } from "./SchemaId";

export const WithSchemaId: core.serialization.ObjectSchema<serializers.WithSchemaId.Raw, FernOpenapiIr.WithSchemaId> =
    core.serialization.objectWithoutOptionalProperties({
        schemaId: SchemaId,
    });

export declare namespace WithSchemaId {
    interface Raw {
        schemaId: SchemaId.Raw;
    }
}
