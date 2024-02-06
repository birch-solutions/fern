/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const ExampleCodeSampleSdk: core.serialization.ObjectSchema<
    serializers.ExampleCodeSampleSdk.Raw,
    FernIr.ExampleCodeSampleSdk
> = core.serialization
    .objectWithoutOptionalProperties({
        name: core.serialization.lazyObject(async () => (await import("../../..")).Name).optional(),
        sdk: core.serialization.lazy(async () => (await import("../../..")).SupportedSdkLanguage).optional(),
        code: core.serialization.string(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithDocs));

export declare namespace ExampleCodeSampleSdk {
    interface Raw extends serializers.WithDocs.Raw {
        name?: serializers.Name.Raw | null;
        sdk?: serializers.SupportedSdkLanguage.Raw | null;
        code: string;
    }
}
