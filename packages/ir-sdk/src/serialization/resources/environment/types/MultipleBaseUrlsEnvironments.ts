/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const MultipleBaseUrlsEnvironments: core.serialization.ObjectSchema<
    serializers.MultipleBaseUrlsEnvironments.Raw,
    FernIr.MultipleBaseUrlsEnvironments
> = core.serialization.objectWithoutOptionalProperties({
    baseUrls: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).EnvironmentBaseUrlWithId)
    ),
    environments: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).MultipleBaseUrlsEnvironment)
    ),
});

export declare namespace MultipleBaseUrlsEnvironments {
    interface Raw {
        baseUrls: serializers.EnvironmentBaseUrlWithId.Raw[];
        environments: serializers.MultipleBaseUrlsEnvironment.Raw[];
    }
}
