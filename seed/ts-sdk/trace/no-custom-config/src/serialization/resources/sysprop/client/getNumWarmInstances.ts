/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
import { Language } from "../../commons/types/Language";

export const Response: core.serialization.Schema<
    serializers.sysprop.getNumWarmInstances.Response.Raw,
    Record<SeedTrace.Language, number | undefined>
> = core.serialization.record(Language, core.serialization.number().optional());

export declare namespace Response {
    export type Raw = Record<Language.Raw, number | null | undefined>;
}
