/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernIr from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { EnvironmentVariable } from "./EnvironmentVariable";

export const PostmanGithubPublishInfo: core.serialization.ObjectSchema<
    serializers.generatorExec.PostmanGithubPublishInfo.Raw,
    FernIr.generatorExec.PostmanGithubPublishInfo
> = core.serialization.objectWithoutOptionalProperties({
    apiKeyEnvironmentVariable: EnvironmentVariable,
    workspaceIdEnvironmentVariable: EnvironmentVariable,
});

export declare namespace PostmanGithubPublishInfo {
    export interface Raw {
        apiKeyEnvironmentVariable: EnvironmentVariable.Raw;
        workspaceIdEnvironmentVariable: EnvironmentVariable.Raw;
    }
}
