/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SeedAudiences from "../../../../api";
import * as core from "../../../../core";

export const Imported: core.serialization.Schema<serializers.Imported.Raw, SeedAudiences.Imported> =
    core.serialization.string();

export declare namespace Imported {
    type Raw = string;
}
