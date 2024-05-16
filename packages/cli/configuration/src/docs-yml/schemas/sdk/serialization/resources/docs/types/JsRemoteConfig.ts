/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDocsConfig from "../../../../api/index";
import * as core from "../../../../core";
import { JsScriptStrategy } from "./JsScriptStrategy";

export const JsRemoteConfig: core.serialization.ObjectSchema<
    serializers.JsRemoteConfig.Raw,
    FernDocsConfig.JsRemoteConfig
> = core.serialization.object({
    url: core.serialization.string(),
    strategy: JsScriptStrategy.optional(),
});

export declare namespace JsRemoteConfig {
    interface Raw {
        url: string;
        strategy?: JsScriptStrategy.Raw | null;
    }
}
