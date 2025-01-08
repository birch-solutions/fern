/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedTrace from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { NodeId } from "./NodeId.js";
import { BinaryTreeNodeValue } from "./BinaryTreeNodeValue.js";

export const BinaryTreeValue: core.serialization.ObjectSchema<
    serializers.BinaryTreeValue.Raw,
    SeedTrace.BinaryTreeValue
> = core.serialization.object({
    root: NodeId.optional(),
    nodes: core.serialization.record(NodeId, BinaryTreeNodeValue),
});

export declare namespace BinaryTreeValue {
    export interface Raw {
        root?: NodeId.Raw | null;
        nodes: Record<NodeId.Raw, BinaryTreeNodeValue.Raw>;
    }
}
