/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as SeedEnum from "../../api";
import * as core from "../../core";
export declare const Color: core.serialization.Schema<serializers.Color.Raw, SeedEnum.Color>;
export declare namespace Color {
    type Raw = "red" | "blue";
}
