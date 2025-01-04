/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { WithJsonExample } from "../../commons/types/WithJsonExample";

export const ExampleTypeReference: core.serialization.ObjectSchema<
    serializers.ExampleTypeReference.Raw,
    FernIr.ExampleTypeReference
> = core.serialization
    .objectWithoutOptionalProperties({
        shape: core.serialization.lazy(() => serializers.ExampleTypeReferenceShape),
    })
    .extend(WithJsonExample);

export declare namespace ExampleTypeReference {
    export interface Raw extends WithJsonExample.Raw {
        shape: serializers.ExampleTypeReferenceShape.Raw;
    }
}
