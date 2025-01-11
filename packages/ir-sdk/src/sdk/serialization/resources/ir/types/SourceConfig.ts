/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { ApiDefinitionSource } from "./ApiDefinitionSource";

export const SourceConfig: core.serialization.ObjectSchema<serializers.SourceConfig.Raw, FernIr.SourceConfig> =
    core.serialization.objectWithoutOptionalProperties({
        sources: core.serialization.list(ApiDefinitionSource),
    });

export declare namespace SourceConfig {
    export interface Raw {
        sources: ApiDefinitionSource.Raw[];
    }
}
