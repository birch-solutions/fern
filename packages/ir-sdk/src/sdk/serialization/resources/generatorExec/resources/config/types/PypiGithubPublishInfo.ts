/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernIr from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { EnvironmentVariable } from "./EnvironmentVariable";
import { PypiMetadata } from "./PypiMetadata";

export const PypiGithubPublishInfo: core.serialization.ObjectSchema<
    serializers.generatorExec.PypiGithubPublishInfo.Raw,
    FernIr.generatorExec.PypiGithubPublishInfo
> = core.serialization.objectWithoutOptionalProperties({
    registryUrl: core.serialization.string(),
    packageName: core.serialization.string(),
    usernameEnvironmentVariable: EnvironmentVariable,
    passwordEnvironmentVariable: EnvironmentVariable,
    pypiMetadata: PypiMetadata.optional(),
    shouldGeneratePublishWorkflow: core.serialization.boolean().optional(),
});

export declare namespace PypiGithubPublishInfo {
    interface Raw {
        registryUrl: string;
        packageName: string;
        usernameEnvironmentVariable: EnvironmentVariable.Raw;
        passwordEnvironmentVariable: EnvironmentVariable.Raw;
        pypiMetadata?: PypiMetadata.Raw | null;
        shouldGeneratePublishWorkflow?: boolean | null;
    }
}
