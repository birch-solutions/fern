/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedVersion from "../../../../api/index";
import * as core from "../../../../core";

export const User: core.serialization.ObjectSchema<serializers.User.Raw, SeedVersion.User> = core.serialization.object({
    id: core.serialization.lazy(() => serializers.UserId),
    name: core.serialization.string(),
});

export declare namespace User {
    interface Raw {
        id: serializers.UserId.Raw;
        name: string;
    }
}
