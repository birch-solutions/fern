import { Literal, PrimitiveType } from "@fern-api/ir-sdk";
import { visitRawTypeReference } from "./visitRawTypeReference";

export interface RecursiveRawTypeReferenceVisitor<R> {
    primitive: (primitive: PrimitiveType) => R;
    map: (args: { keyType: R; valueType: R }) => R;
    list: (valueType: R) => R;
    set: (valueType: R) => R;
    optional: (valueType: R) => R;
    literal: (literal: Literal) => R;
    named: (named: string) => R;
    file: (file: string) => R;
    bytes: () => R;
    unknown: () => R;
}

export function recursivelyVisitRawTypeReference<R>(type: string, visitor: RecursiveRawTypeReferenceVisitor<R>): R {
    return visitRawTypeReference(type, {
        primitive: visitor.primitive,
        map: ({ keyType, valueType }) =>
            visitor.map({
                keyType: recursivelyVisitRawTypeReference(keyType, visitor),
                valueType: recursivelyVisitRawTypeReference(valueType, visitor)
            }),
        list: (valueType) => visitor.list(recursivelyVisitRawTypeReference(valueType, visitor)),
        set: (valueType) => visitor.set(recursivelyVisitRawTypeReference(valueType, visitor)),
        optional: (valueType) => visitor.optional(recursivelyVisitRawTypeReference(valueType, visitor)),
        literal: visitor.literal,
        named: visitor.named,
        file: visitor.file,
        bytes: visitor.bytes,
        unknown: visitor.unknown
    });
}
