/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedCrossPackageTypeNames from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Foo: core.serialization.ObjectSchema<serializers.folderB.Foo.Raw, SeedCrossPackageTypeNames.folderB.Foo> =
    core.serialization.object({
        foo: core.serialization.lazyObject(() => serializers.folderC.Foo).optional(),
    });

export declare namespace Foo {
    export interface Raw {
        foo?: serializers.folderC.Foo.Raw | null;
    }
}
