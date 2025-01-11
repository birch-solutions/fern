/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { NameAndWireValue } from "../../commons/types/NameAndWireValue";
import { EnvironmentVariable } from "./EnvironmentVariable";
import { WithDocs } from "../../commons/types/WithDocs";

export const HeaderAuthScheme: core.serialization.ObjectSchema<
    serializers.HeaderAuthScheme.Raw,
    FernIr.HeaderAuthScheme
> = core.serialization
    .objectWithoutOptionalProperties({
        name: NameAndWireValue,
        valueType: core.serialization.lazy(() => serializers.TypeReference),
        prefix: core.serialization.string().optional(),
        headerEnvVar: EnvironmentVariable.optional(),
    })
    .extend(WithDocs);

export declare namespace HeaderAuthScheme {
    export interface Raw extends WithDocs.Raw {
        name: NameAndWireValue.Raw;
        valueType: serializers.TypeReference.Raw;
        prefix?: string | null;
        headerEnvVar?: EnvironmentVariable.Raw | null;
    }
}
