/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedExamples from "../../api/index";
import * as core from "../../core";
import { Type } from "./Type";

export const Identifier: core.serialization.ObjectSchema<serializers.Identifier.Raw, SeedExamples.Identifier> =
    core.serialization.object({
        type: Type,
        value: core.serialization.string(),
        label: core.serialization.string(),
    });

export declare namespace Identifier {
    interface Raw {
        type: Type.Raw;
        value: string;
        label: string;
    }
}
