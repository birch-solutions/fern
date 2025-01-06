/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { Name } from "../../commons/types/Name";
import { WithDocs } from "../../commons/types/WithDocs";

export const ExampleWebhookCall: core.serialization.ObjectSchema<
    serializers.ExampleWebhookCall.Raw,
    FernIr.ExampleWebhookCall
> = core.serialization
    .objectWithoutOptionalProperties({
        name: Name.optional(),
        payload: core.serialization.lazyObject(() => serializers.ExampleTypeReference),
    })
    .extend(WithDocs);

export declare namespace ExampleWebhookCall {
    export interface Raw extends WithDocs.Raw {
        name?: Name.Raw | null;
        payload: serializers.ExampleTypeReference.Raw;
    }
}
