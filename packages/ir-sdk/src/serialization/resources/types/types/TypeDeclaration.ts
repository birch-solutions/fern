/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const TypeDeclaration: core.serialization.ObjectSchema<serializers.TypeDeclaration.Raw, FernIr.TypeDeclaration> =
    core.serialization
        .objectWithoutOptionalProperties({
            name: core.serialization.lazyObject(async () => (await import("../../..")).DeclaredTypeName),
            shape: core.serialization.lazy(async () => (await import("../../..")).Type),
            examples: core.serialization.list(
                core.serialization.lazyObject(async () => (await import("../../..")).ExampleType)
            ),
            referencedTypes: core.serialization.set(
                core.serialization.lazy(async () => (await import("../../..")).TypeId)
            ),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).Declaration));

export declare namespace TypeDeclaration {
    interface Raw extends serializers.Declaration.Raw {
        name: serializers.DeclaredTypeName.Raw;
        shape: serializers.Type.Raw;
        examples: serializers.ExampleType.Raw[];
        referencedTypes: serializers.TypeId.Raw[];
    }
}
