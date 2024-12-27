/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernIr from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { OutputMetadata } from "./OutputMetadata";

export const PypiMetadata: core.serialization.ObjectSchema<
    serializers.generatorExec.PypiMetadata.Raw,
    FernIr.generatorExec.PypiMetadata
> = core.serialization
    .objectWithoutOptionalProperties({
        keywords: core.serialization.list(core.serialization.string()).optional(),
        documentationLink: core.serialization.string().optional(),
        homepageLink: core.serialization.string().optional(),
    })
    .extend(OutputMetadata);

export declare namespace PypiMetadata {
    export interface Raw extends OutputMetadata.Raw {
        keywords?: string[] | null;
        documentationLink?: string | null;
        homepageLink?: string | null;
    }
}
