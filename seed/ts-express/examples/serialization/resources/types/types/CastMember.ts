/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedExamples from "../../../../api/index";
import * as core from "../../../../core";

export const CastMember: core.serialization.Schema<serializers.CastMember.Raw, SeedExamples.CastMember> =
    core.serialization.undiscriminatedUnion([
        core.serialization.lazyObject(async () => (await import("../../..")).Actor),
        core.serialization.lazyObject(async () => (await import("../../..")).Actress),
        core.serialization.lazyObject(async () => (await import("../../..")).StuntDouble),
    ]);

export declare namespace CastMember {
    type Raw = serializers.Actor.Raw | serializers.Actress.Raw | serializers.StuntDouble.Raw;
}
