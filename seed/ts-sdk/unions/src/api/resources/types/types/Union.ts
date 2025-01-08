/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedUnions from "../../../index.js";

/**
 * This is a simple union.
 */
export type Union = SeedUnions.Union.Foo | SeedUnions.Union.Bar;

export namespace Union {
    export interface Foo {
        type: "foo";
        foo: SeedUnions.Foo;
    }

    export interface Bar {
        type: "bar";
        bar: SeedUnions.Bar;
    }
}
