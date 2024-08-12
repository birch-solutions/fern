/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { Name } from "./Name";

export const FernFilepath: core.serialization.ObjectSchema<serializers.FernFilepath.Raw, FernIr.FernFilepath> =
    core.serialization.objectWithoutOptionalProperties({
        allParts: core.serialization.list(Name),
        packagePath: core.serialization.list(Name),
        file: Name.optional(),
    });

export declare namespace FernFilepath {
    interface Raw {
        allParts: Name.Raw[];
        packagePath: Name.Raw[];
        file?: Name.Raw | null;
    }
}
