/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { ExampleCodeSample } from "./ExampleCodeSample";
import { ExampleEndpointCall } from "./ExampleEndpointCall";

export const UserSpecifiedEndpointExample: core.serialization.ObjectSchema<
    serializers.UserSpecifiedEndpointExample.Raw,
    FernIr.UserSpecifiedEndpointExample
> = core.serialization.objectWithoutOptionalProperties({
    codeSamples: core.serialization.list(ExampleCodeSample).optional(),
    example: ExampleEndpointCall.optional(),
});

export declare namespace UserSpecifiedEndpointExample {
    export interface Raw {
        codeSamples?: ExampleCodeSample.Raw[] | null;
        example?: ExampleEndpointCall.Raw | null;
    }
}
