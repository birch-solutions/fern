/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedExamples from "../../../../api/index";
import * as core from "../../../../core";

export const Tree: core.serialization.ObjectSchema<serializers.Tree.Raw, SeedExamples.Tree> = core.serialization.object(
    {
        nodes: core.serialization.list(core.serialization.lazyObject(() => Node)).optional(),
    }
);

export declare namespace Tree {
    interface Raw {
        nodes?: serializers.Node.Raw[] | null;
    }
}
