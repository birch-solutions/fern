/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernSnippets from "../../../index";

/**
 * Represents the type of a parameter that can be used to generate a dynamic type.
 */
export type Type =
    | FernSnippets.Type.DiscriminatedUnion
    | FernSnippets.Type.Enum
    | FernSnippets.Type.List
    | FernSnippets.Type.Literal
    | FernSnippets.Type.Map
    | FernSnippets.Type.Object_
    | FernSnippets.Type.Optional
    | FernSnippets.Type.Primitive
    | FernSnippets.Type.Set
    | FernSnippets.Type.UndicriminatedUnion
    | FernSnippets.Type.Unknown;

export declare namespace Type {
    interface DiscriminatedUnion extends FernSnippets.DiscriminatedUnionType {
        type: "discriminatedUnion";
    }

    interface Enum extends FernSnippets.EnumType {
        type: "enum";
    }

    interface List {
        type: "list";
        value: FernSnippets.Type;
    }

    interface Literal {
        type: "literal";
        value: FernSnippets.LiteralType;
    }

    interface Map extends FernSnippets.MapType {
        type: "map";
    }

    interface Object_ extends FernSnippets.ObjectType {
        type: "object";
    }

    interface Optional {
        type: "optional";
        value: FernSnippets.Type;
    }

    interface Primitive {
        type: "primitive";
        value: FernSnippets.PrimitiveType;
    }

    interface Set {
        type: "set";
        value: FernSnippets.Type;
    }

    interface UndicriminatedUnion extends FernSnippets.UndiscriminatedUnionType {
        type: "undicriminatedUnion";
    }

    interface Unknown {
        type: "unknown";
    }
}
