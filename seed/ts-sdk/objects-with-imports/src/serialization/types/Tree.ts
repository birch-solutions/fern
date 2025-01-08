/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index.js";
import * as SeedObjectsWithImports from "../../api/index.js";
import * as core from "../../core/index.js";
import { Node } from "./Node.js";

export const Tree: core.serialization.ObjectSchema<serializers.Tree.Raw, SeedObjectsWithImports.Tree> =
    core.serialization.object({
        nodes: core.serialization.list(Node).optional(),
    });

export declare namespace Tree {
    export interface Raw {
        nodes?: Node.Raw[] | null;
    }
}
