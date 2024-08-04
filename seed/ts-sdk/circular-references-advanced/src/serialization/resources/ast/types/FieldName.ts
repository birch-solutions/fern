/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedApi from "../../../../api/index";
import * as core from "../../../../core";

export const FieldName: core.serialization.Schema<serializers.FieldName.Raw, SeedApi.FieldName> =
    core.serialization.string();

export declare namespace FieldName {
    type Raw = string;
}
