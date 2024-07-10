/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedExamples from "../../api/index";
import * as core from "../../core";

export const Type: core.serialization.Schema<serializers.Type.Raw, SeedExamples.Type> =
    core.serialization.undiscriminatedUnion([
        core.serialization.lazy(() => serializers.BasicType),
        core.serialization.lazy(() => serializers.ComplexType),
    ]);

export declare namespace Type {
    type Raw = serializers.BasicType.Raw | serializers.ComplexType.Raw;
}
