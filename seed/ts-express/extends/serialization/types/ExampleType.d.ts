/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as SeedExtends from "../../api/index";
import * as core from "../../core";
export declare const ExampleType: core.serialization.ObjectSchema<serializers.ExampleType.Raw, SeedExtends.ExampleType>;
export declare namespace ExampleType {
    interface Raw extends serializers.Docs.Raw {
        name: string;
    }
}
