/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { TypeId } from "../../commons/types/TypeId";
import { FernFilepath } from "../../commons/types/FernFilepath";
import { Name } from "../../commons/types/Name";
import { NamedTypeDefault } from "./NamedTypeDefault";

export const NamedType: core.serialization.ObjectSchema<serializers.NamedType.Raw, FernIr.NamedType> =
    core.serialization.objectWithoutOptionalProperties({
        typeId: TypeId,
        fernFilepath: FernFilepath,
        name: Name,
        default: NamedTypeDefault.optional(),
        inline: core.serialization.boolean().optional(),
    });

export declare namespace NamedType {
    export interface Raw {
        typeId: TypeId.Raw;
        fernFilepath: FernFilepath.Raw;
        name: Name.Raw;
        default?: NamedTypeDefault.Raw | null;
        inline?: boolean | null;
    }
}
