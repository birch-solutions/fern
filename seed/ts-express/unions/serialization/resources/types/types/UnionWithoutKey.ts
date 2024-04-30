/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedUnions from "../../../../api/index";
import * as core from "../../../../core";

export const UnionWithoutKey: core.serialization.Schema<serializers.UnionWithoutKey.Raw, SeedUnions.UnionWithoutKey> =
    core.serialization
        .union("type", {
            foo: core.serialization.lazyObject(async () => (await import("../../..")).Foo),
            bar: core.serialization.lazyObject(async () => (await import("../../..")).Bar),
        })
        .transform<SeedUnions.UnionWithoutKey>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace UnionWithoutKey {
    type Raw = UnionWithoutKey.Foo | UnionWithoutKey.Bar;

    interface Foo extends serializers.Foo.Raw {
        type: "foo";
    }

    interface Bar extends serializers.Bar.Raw {
        type: "bar";
    }
}
