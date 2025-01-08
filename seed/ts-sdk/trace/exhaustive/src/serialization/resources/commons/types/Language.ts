/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";

export const Language: core.serialization.Schema<serializers.Language.Raw, SeedTrace.Language> =
    core.serialization.enum_(["JAVA", "JAVASCRIPT", "PYTHON"]);

export declare namespace Language {
    export type Raw = "JAVA" | "JAVASCRIPT" | "PYTHON";
}
