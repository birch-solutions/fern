/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { Name } from "../../commons/types/Name";

export const ExamplePathParameter: core.serialization.ObjectSchema<
    serializers.ExamplePathParameter.Raw,
    FernIr.ExamplePathParameter
> = core.serialization.objectWithoutOptionalProperties({
    name: Name,
    value: core.serialization.lazyObject(() => serializers.ExampleTypeReference),
});

export declare namespace ExamplePathParameter {
    export interface Raw {
        name: Name.Raw;
        value: serializers.ExampleTypeReference.Raw;
    }
}
