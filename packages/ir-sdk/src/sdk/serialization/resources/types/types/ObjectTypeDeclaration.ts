/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const ObjectTypeDeclaration: core.serialization.ObjectSchema<
    serializers.ObjectTypeDeclaration.Raw,
    FernIr.ObjectTypeDeclaration
> = core.serialization.objectWithoutOptionalProperties({
    extends: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).DeclaredTypeName)
    ),
    properties: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).ObjectProperty)
    ),
});

export declare namespace ObjectTypeDeclaration {
    interface Raw {
        extends: serializers.DeclaredTypeName.Raw[];
        properties: serializers.ObjectProperty.Raw[];
    }
}
