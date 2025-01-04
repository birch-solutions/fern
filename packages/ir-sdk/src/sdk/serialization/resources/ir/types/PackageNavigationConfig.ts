/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { SubpackageId } from "../../commons/types/SubpackageId";

export const PackageNavigationConfig: core.serialization.ObjectSchema<
    serializers.PackageNavigationConfig.Raw,
    FernIr.PackageNavigationConfig
> = core.serialization.objectWithoutOptionalProperties({
    pointsTo: SubpackageId,
});

export declare namespace PackageNavigationConfig {
    export interface Raw {
        pointsTo: SubpackageId.Raw;
    }
}
