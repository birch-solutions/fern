/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SeedTrace from "../../../../api";
import * as core from "../../../../core";
export declare const RuntimeError: core.serialization.ObjectSchema<serializers.RuntimeError.Raw, SeedTrace.RuntimeError>;
export declare namespace RuntimeError {
    interface Raw {
        message: string;
    }
}
