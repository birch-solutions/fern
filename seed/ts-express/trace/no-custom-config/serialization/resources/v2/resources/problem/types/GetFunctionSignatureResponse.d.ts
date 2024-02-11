/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../..";
import * as SeedTrace from "../../../../../../api";
import * as core from "../../../../../../core";
export declare const GetFunctionSignatureResponse: core.serialization.ObjectSchema<serializers.v2.GetFunctionSignatureResponse.Raw, SeedTrace.v2.GetFunctionSignatureResponse>;
export declare namespace GetFunctionSignatureResponse {
    interface Raw {
        functionByLanguage: Record<serializers.Language.Raw, string | null | undefined>;
    }
}
