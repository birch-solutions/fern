/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const DeclaredTypeName: core.serialization.ObjectSchema<
    serializers.DeclaredTypeName.Raw,
    FernIr.DeclaredTypeName
> = core.serialization.objectWithoutOptionalProperties({
    typeId: core.serialization.lazy(async () => (await import("../../..")).TypeId),
    fernFilepath: core.serialization.lazyObject(async () => (await import("../../..")).FernFilepath),
    name: core.serialization.lazyObject(async () => (await import("../../..")).Name),
});

export declare namespace DeclaredTypeName {
    interface Raw {
        typeId: serializers.TypeId.Raw;
        fernFilepath: serializers.FernFilepath.Raw;
        name: serializers.Name.Raw;
    }
}
