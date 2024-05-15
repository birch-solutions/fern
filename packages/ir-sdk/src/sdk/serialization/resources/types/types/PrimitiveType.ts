/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const PrimitiveType: core.serialization.Schema<serializers.PrimitiveType.Raw, FernIr.PrimitiveType> =
    core.serialization.enum_([
        "INTEGER",
        "DOUBLE",
        "STRING",
        "BOOLEAN",
        "LONG",
        "DATE_TIME",
        "DATE",
        "UUID",
        "BASE_64",
        "BIG_INTEGER",
    ]);

export declare namespace PrimitiveType {
    type Raw =
        | "INTEGER"
        | "DOUBLE"
        | "STRING"
        | "BOOLEAN"
        | "LONG"
        | "DATE_TIME"
        | "DATE"
        | "UUID"
        | "BASE_64"
        | "BIG_INTEGER";
}
