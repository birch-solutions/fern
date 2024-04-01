/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../../../core";
import * as serializers from "../../..";
import * as SeedUnions from "../../../../api";
export declare const UnionWithBaseProperties: core.serialization.Schema<serializers.UnionWithBaseProperties.Raw, SeedUnions.UnionWithBaseProperties>;
export declare namespace UnionWithBaseProperties {
    type Raw = UnionWithBaseProperties.Integer | UnionWithBaseProperties.String | UnionWithBaseProperties.Foo;
    interface Integer extends _Base {
        type: "integer";
        value: number;
    }
    interface String extends _Base {
        type: "string";
        value: string;
    }
    interface Foo extends _Base, serializers.Foo.Raw {
        type: "foo";
    }
    interface _Base {
        id: string;
    }
}
