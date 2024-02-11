/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SeedExamples from "../../../../api";
import * as core from "../../../../core";
export declare const StuntDouble: core.serialization.ObjectSchema<serializers.StuntDouble.Raw, SeedExamples.StuntDouble>;
export declare namespace StuntDouble {
    interface Raw {
        name: string;
        actorOrActressId: string;
    }
}
