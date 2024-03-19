/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SeedAlias from "../../api";
import * as core from "../../core";
import { TypeId } from "./TypeId";

export const Type: core.serialization.ObjectSchema<serializers.Type.Raw, SeedAlias.Type> = core.serialization.object({
    id: TypeId,
    name: core.serialization.string(),
});

export declare namespace Type {
    interface Raw {
        id: TypeId.Raw;
        name: string;
    }
}
