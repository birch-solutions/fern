/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernIr from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Declaration } from "../../declaration/types/Declaration";

export const UndiscriminatedUnionType: core.serialization.ObjectSchema<
    serializers.dynamic.UndiscriminatedUnionType.Raw,
    FernIr.dynamic.UndiscriminatedUnionType
> = core.serialization.objectWithoutOptionalProperties({
    declaration: Declaration,
    types: core.serialization.list(core.serialization.lazy(() => serializers.dynamic.TypeReference)),
});

export declare namespace UndiscriminatedUnionType {
    export interface Raw {
        declaration: Declaration.Raw;
        types: serializers.dynamic.TypeReference.Raw[];
    }
}
