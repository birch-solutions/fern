/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { Name } from "../../commons/types/Name";
import { DeclaredTypeName } from "../../types/types/DeclaredTypeName";
import { InlinedRequestBodyProperty } from "./InlinedRequestBodyProperty";
import { ObjectProperty } from "../../types/types/ObjectProperty";

export const InlinedRequestBody: core.serialization.ObjectSchema<
    serializers.InlinedRequestBody.Raw,
    FernIr.InlinedRequestBody
> = core.serialization.objectWithoutOptionalProperties({
    name: Name,
    extends: core.serialization.list(DeclaredTypeName),
    properties: core.serialization.list(InlinedRequestBodyProperty),
    extendedProperties: core.serialization.list(ObjectProperty).optional(),
    contentType: core.serialization.string().optional(),
    extraProperties: core.serialization.property("extra-properties", core.serialization.boolean()),
});

export declare namespace InlinedRequestBody {
    interface Raw {
        name: Name.Raw;
        extends: DeclaredTypeName.Raw[];
        properties: InlinedRequestBodyProperty.Raw[];
        extendedProperties?: ObjectProperty.Raw[] | null;
        contentType?: string | null;
        "extra-properties": boolean;
    }
}
