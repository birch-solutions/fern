/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { ErrorId } from "../../commons/types/ErrorId";
import { FernFilepath } from "../../commons/types/FernFilepath";
import { Name } from "../../commons/types/Name";

export const DeclaredErrorName: core.serialization.ObjectSchema<
    serializers.DeclaredErrorName.Raw,
    FernIr.DeclaredErrorName
> = core.serialization.objectWithoutOptionalProperties({
    errorId: ErrorId,
    fernFilepath: FernFilepath,
    name: Name,
});

export declare namespace DeclaredErrorName {
    interface Raw {
        errorId: ErrorId.Raw;
        fernFilepath: FernFilepath.Raw;
        name: Name.Raw;
    }
}
