/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedUnions from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { Foo } from "./Foo.js";

export const UnionWithSingleElement: core.serialization.Schema<
    serializers.UnionWithSingleElement.Raw,
    SeedUnions.UnionWithSingleElement
> = core.serialization
    .union("type", {
        foo: Foo,
    })
    .transform<SeedUnions.UnionWithSingleElement>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace UnionWithSingleElement {
    export type Raw = UnionWithSingleElement.Foo;

    export interface Foo extends Foo.Raw {
        type: "foo";
    }
}
