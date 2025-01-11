/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedMixedCase from "../../../../api/index";
import * as core from "../../../../core";

export const NestedUser: core.serialization.ObjectSchema<serializers.NestedUser.Raw, SeedMixedCase.NestedUser> =
    core.serialization.object({
        name: core.serialization.property("Name", core.serialization.string()),
        nestedUser: core.serialization.property(
            "NestedUser",
            core.serialization.lazyObject(() => serializers.User),
        ),
    });

export declare namespace NestedUser {
    export interface Raw {
        Name: string;
        NestedUser: serializers.User.Raw;
    }
}
