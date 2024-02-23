/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernDocsConfig from "../../../../api";
import * as core from "../../../../core";

export const JsConfigOptions: core.serialization.Schema<
    serializers.JsConfigOptions.Raw,
    FernDocsConfig.JsConfigOptions
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("../../..")).JsRemoteConfig),
    core.serialization.lazy(async () => (await import("../../..")).JsFileConfig)
]);

export declare namespace JsConfigOptions {
    type Raw = serializers.JsRemoteConfig.Raw | serializers.JsFileConfig.Raw;
}
