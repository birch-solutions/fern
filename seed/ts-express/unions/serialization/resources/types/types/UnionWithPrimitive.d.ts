/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SeedUnions from "../../../../api/index";
import * as core from "../../../../core";
export declare const UnionWithPrimitive: core.serialization.Schema<serializers.UnionWithPrimitive.Raw, SeedUnions.UnionWithPrimitive>;
export declare namespace UnionWithPrimitive {
    type Raw = UnionWithPrimitive.Integer | UnionWithPrimitive.String;
    interface Integer {
        type: "integer";
        value: number;
    }
    interface String {
        type: "string";
        value: string;
    }
}
