/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedExamples from "../../api/index";
import * as core from "../../core";

export const ComplexType: core.serialization.Schema<serializers.ComplexType.Raw, SeedExamples.ComplexType> =
    core.serialization.enum_(["object", "union", "unknown"]);

export declare namespace ComplexType {
    type Raw = "object" | "union" | "unknown";
}
