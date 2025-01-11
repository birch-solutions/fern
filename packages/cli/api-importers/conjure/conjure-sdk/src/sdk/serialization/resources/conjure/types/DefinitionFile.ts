/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernConjure from "../../../../api/index";
import * as core from "../../../../core";
import { ConjureTypes } from "../../types/types/ConjureTypes";
import { ConjureServiceName } from "./ConjureServiceName";
import { ConjureService } from "../../services/types/ConjureService";

export const DefinitionFile: core.serialization.ObjectSchema<
    serializers.DefinitionFile.Raw,
    FernConjure.DefinitionFile
> = core.serialization.objectWithoutOptionalProperties({
    types: ConjureTypes.optional(),
    services: core.serialization.record(ConjureServiceName, ConjureService).optional(),
});

export declare namespace DefinitionFile {
    export interface Raw {
        types?: ConjureTypes.Raw | null;
        services?: Record<ConjureServiceName.Raw, ConjureService.Raw> | null;
    }
}
