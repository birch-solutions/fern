/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernDocsConfig from "../../../../api";
import * as core from "../../../../core";

export const FontConfigVariant: core.serialization.ObjectSchema<
    serializers.FontConfigVariant.Raw,
    FernDocsConfig.FontConfigVariant
> = core.serialization.object({
    path: core.serialization.string(),
    weight: core.serialization.lazy(async () => (await import("../../..")).FontWeight).optional(),
    style: core.serialization.lazy(async () => (await import("../../..")).FontStyle).optional(),
});

export declare namespace FontConfigVariant {
    interface Raw {
        path: string;
        weight?: serializers.FontWeight.Raw | null;
        style?: serializers.FontStyle.Raw | null;
    }
}
