/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernDocsConfig from "../../../../api";
import * as core from "../../../../core";

export const JsScriptStrategy: core.serialization.Schema<
    serializers.JsScriptStrategy.Raw,
    FernDocsConfig.JsScriptStrategy
> = core.serialization.enum_(["beforeInteractive", "afterInteractive", "lazyOnload"]);

export declare namespace JsScriptStrategy {
    type Raw = "beforeInteractive" | "afterInteractive" | "lazyOnload";
}
