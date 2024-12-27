/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedLiteral from "../../../../api/index";
import * as core from "../../../../core";

export const ANestedLiteral: core.serialization.ObjectSchema<
    serializers.ANestedLiteral.Raw,
    SeedLiteral.ANestedLiteral
> = core.serialization.object({
    myLiteral: core.serialization.stringLiteral("How super cool"),
});

export declare namespace ANestedLiteral {
    export interface Raw {
        myLiteral: "How super cool";
    }
}
