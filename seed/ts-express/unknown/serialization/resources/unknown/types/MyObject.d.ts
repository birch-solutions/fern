/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SeedUnknownAsAny from "../../../../api/index";
import * as core from "../../../../core";
export declare const MyObject: core.serialization.ObjectSchema<serializers.MyObject.Raw, SeedUnknownAsAny.MyObject>;
export declare namespace MyObject {
    interface Raw {
        unknown?: unknown;
    }
}
