/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernIr from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { GeneratorPublishConfig } from "./GeneratorPublishConfig";
import { GithubOutputMode } from "./GithubOutputMode";

export const OutputMode: core.serialization.Schema<
    serializers.generatorExec.OutputMode.Raw,
    FernIr.generatorExec.OutputMode
> = core.serialization
    .union("type", {
        publish: GeneratorPublishConfig,
        downloadFiles: core.serialization.object({}),
        github: GithubOutputMode,
    })
    .transform<FernIr.generatorExec.OutputMode>({
        transform: (value) => {
            switch (value.type) {
                case "publish":
                    return FernIr.generatorExec.OutputMode.publish(value);
                case "downloadFiles":
                    return FernIr.generatorExec.OutputMode.downloadFiles();
                case "github":
                    return FernIr.generatorExec.OutputMode.github(value);
                default:
                    return value as FernIr.generatorExec.OutputMode;
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace OutputMode {
    export type Raw = OutputMode.Publish | OutputMode.DownloadFiles | OutputMode.Github;

    export interface Publish extends GeneratorPublishConfig.Raw {
        type: "publish";
    }

    export interface DownloadFiles {
        type: "downloadFiles";
    }

    export interface Github extends GithubOutputMode.Raw {
        type: "github";
    }
}
