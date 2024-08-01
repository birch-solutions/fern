/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedUnions from "../../../../api/index";
import * as core from "../../../../core";

export const Foo: core.serialization.ObjectSchema<serializers.Foo.Raw, SeedUnions.Foo> = core.serialization.object({
        "name": core.serialization.string()
    });

export declare namespace Foo {
    interface Raw {
        "name": string;
    }
}
