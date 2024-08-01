/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedUnions from "../../../../api/index";
import * as core from "../../../../core";
import { Foo } from "./Foo";

export const UnionWithUnknown: core.serialization.Schema<serializers.UnionWithUnknown.Raw, SeedUnions.UnionWithUnknown> = core.serialization.union("type", {
        "foo": Foo,
        "unknown": core.serialization.object({})
    }).transform<SeedUnions.UnionWithUnknown>({
        transform: value => value,
        untransform: value => value
    });

export declare namespace UnionWithUnknown {
    type Raw = UnionWithUnknown.Foo | UnionWithUnknown.Unknown;

    interface Foo extends Foo.Raw {
        "type": "foo";
    }

    interface Unknown {
        "type": "unknown";
    }
}
