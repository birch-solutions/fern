/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedObject from "../index";

/**
 * lorem ipsum
 */
export type UndiscriminatedUnion1DiscriminatedUnion1 =
    /**
     * lorem ipsum */
    | SeedObject.UndiscriminatedUnion1DiscriminatedUnion1.Type1
    /**
     * lorem ipsum */
    | SeedObject.UndiscriminatedUnion1DiscriminatedUnion1.Type2
    /**
     * lorem ipsum */
    | SeedObject.UndiscriminatedUnion1DiscriminatedUnion1.Ref;

export namespace UndiscriminatedUnion1DiscriminatedUnion1 {
    export interface Type1 extends SeedObject.UndiscriminatedUnion1DiscriminatedUnion1InlineType1 {
        type: "type1";
    }

    export interface Type2 extends SeedObject.UndiscriminatedUnion1DiscriminatedUnion1InlineType2 {
        type: "type2";
    }

    export interface Ref extends SeedObject.ReferenceType {
        type: "ref";
    }
}
