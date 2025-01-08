/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { NameAndWireValue } from "../../commons/types/NameAndWireValue";

export const SingleUnionTypeProperty: core.serialization.ObjectSchema<
    serializers.SingleUnionTypeProperty.Raw,
    FernIr.SingleUnionTypeProperty
> = core.serialization.objectWithoutOptionalProperties({
    name: NameAndWireValue,
    type: core.serialization.lazy(() => serializers.TypeReference),
});

export declare namespace SingleUnionTypeProperty {
    export interface Raw {
        name: NameAndWireValue.Raw;
        type: serializers.TypeReference.Raw;
    }
}
