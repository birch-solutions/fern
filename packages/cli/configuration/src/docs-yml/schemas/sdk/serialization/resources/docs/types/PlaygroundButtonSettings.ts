/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDocsConfig from "../../../../api/index";
import * as core from "../../../../core";

export const PlaygroundButtonSettings: core.serialization.ObjectSchema<
    serializers.PlaygroundButtonSettings.Raw,
    FernDocsConfig.PlaygroundButtonSettings
> = core.serialization.object({
    href: core.serialization.string().optional(),
});

export declare namespace PlaygroundButtonSettings {
    export interface Raw {
        href?: string | null;
    }
}
