/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernConjure from "../../../../api/index";
import * as core from "../../../../core";
import { ConjureParamType } from "./ConjureParamType";
import { WithDocs } from "../../commons/types/WithDocs";

export const ConjureArgumentWithParamType: core.serialization.ObjectSchema<
    serializers.ConjureArgumentWithParamType.Raw,
    FernConjure.ConjureArgumentWithParamType
> = core.serialization
    .objectWithoutOptionalProperties({
        paramType: core.serialization.property("param-type", ConjureParamType),
        type: core.serialization.string(),
    })
    .extend(WithDocs);

export declare namespace ConjureArgumentWithParamType {
    interface Raw extends WithDocs.Raw {
        "param-type": ConjureParamType.Raw;
        type: string;
    }
}
