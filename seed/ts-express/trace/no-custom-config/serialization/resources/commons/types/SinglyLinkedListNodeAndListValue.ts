/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const SinglyLinkedListNodeAndListValue: core.serialization.ObjectSchema<
    serializers.SinglyLinkedListNodeAndListValue.Raw,
    SeedTrace.SinglyLinkedListNodeAndListValue
> = core.serialization.object({
    nodeId: core.serialization.lazy(async () => (await import("../../..")).NodeId),
    fullList: core.serialization.lazyObject(async () => (await import("../../..")).SinglyLinkedListValue),
});

export declare namespace SinglyLinkedListNodeAndListValue {
    interface Raw {
        nodeId: serializers.NodeId.Raw;
        fullList: serializers.SinglyLinkedListValue.Raw;
    }
}
