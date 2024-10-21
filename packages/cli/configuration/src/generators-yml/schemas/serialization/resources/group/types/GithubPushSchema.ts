/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { GithubLicenseSchema } from "../../license/types/GithubLicenseSchema";

export const GithubPushSchema: core.serialization.ObjectSchema<
    serializers.GithubPushSchema.Raw,
    FernDefinition.GithubPushSchema
> = core.serialization.object({
    repository: core.serialization.string(),
    license: GithubLicenseSchema.optional(),
    mode: core.serialization.stringLiteral("push"),
    branch: core.serialization.string().optional(),
});

export declare namespace GithubPushSchema {
    interface Raw {
        repository: string;
        license?: GithubLicenseSchema.Raw | null;
        mode: "push";
        branch?: string | null;
    }
}
