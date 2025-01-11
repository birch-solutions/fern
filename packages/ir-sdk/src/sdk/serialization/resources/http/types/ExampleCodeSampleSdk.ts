/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { Name } from "../../commons/types/Name";
import { SupportedSdkLanguage } from "./SupportedSdkLanguage";
import { WithDocs } from "../../commons/types/WithDocs";

export const ExampleCodeSampleSdk: core.serialization.ObjectSchema<
    serializers.ExampleCodeSampleSdk.Raw,
    FernIr.ExampleCodeSampleSdk
> = core.serialization
    .objectWithoutOptionalProperties({
        name: Name.optional(),
        sdk: SupportedSdkLanguage,
        code: core.serialization.string(),
    })
    .extend(WithDocs);

export declare namespace ExampleCodeSampleSdk {
    export interface Raw extends WithDocs.Raw {
        name?: Name.Raw | null;
        sdk: SupportedSdkLanguage.Raw;
        code: string;
    }
}
