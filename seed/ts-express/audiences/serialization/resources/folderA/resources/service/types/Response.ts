/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedAudiences from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Response: core.serialization.ObjectSchema<
    serializers.folderA.Response.Raw,
    SeedAudiences.folderA.Response
> = core.serialization.object({
    foo: core.serialization.lazyObject(() => serializers.folderB.Foo).optional(),
});

export declare namespace Response {
    export interface Raw {
        foo?: serializers.folderB.Foo.Raw | null;
    }
}
