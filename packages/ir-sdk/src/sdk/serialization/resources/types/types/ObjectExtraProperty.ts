/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";

export const ObjectExtraProperty: core.serialization.Schema<
    serializers.ObjectExtraProperty.Raw,
    FernIr.ObjectExtraProperty
> = core.serialization.undiscriminatedUnion([
    core.serialization.boolean(),
    core.serialization.string(),
    core.serialization.lazy(() => serializers.TypeReference),
]);

export declare namespace ObjectExtraProperty {
    type Raw = boolean | string | serializers.TypeReference.Raw;
}
