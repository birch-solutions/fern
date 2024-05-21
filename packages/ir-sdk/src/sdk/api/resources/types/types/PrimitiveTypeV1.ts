/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type PrimitiveTypeV1 =
    | "INTEGER"
    | "DOUBLE"
    | "STRING"
    | "BOOLEAN"
    /**
     * Within the range -2^53 to 2^53 */
    | "LONG"
    | "DATE_TIME"
    | "DATE"
    | "UUID"
    | "BASE_64"
    | "BIG_INTEGER";

export const PrimitiveTypeV1 = {
    Integer: "INTEGER",
    Double: "DOUBLE",
    String: "STRING",
    Boolean: "BOOLEAN",
    Long: "LONG",
    DateTime: "DATE_TIME",
    Date: "DATE",
    Uuid: "UUID",
    Base64: "BASE_64",
    BigInteger: "BIG_INTEGER",
    _visit: <R>(value: PrimitiveTypeV1, visitor: PrimitiveTypeV1.Visitor<R>) => {
        switch (value) {
            case PrimitiveTypeV1.Integer:
                return visitor.integer();
            case PrimitiveTypeV1.Double:
                return visitor.double();
            case PrimitiveTypeV1.String:
                return visitor.string();
            case PrimitiveTypeV1.Boolean:
                return visitor.boolean();
            case PrimitiveTypeV1.Long:
                return visitor.long();
            case PrimitiveTypeV1.DateTime:
                return visitor.dateTime();
            case PrimitiveTypeV1.Date:
                return visitor.date();
            case PrimitiveTypeV1.Uuid:
                return visitor.uuid();
            case PrimitiveTypeV1.Base64:
                return visitor.base64();
            case PrimitiveTypeV1.BigInteger:
                return visitor.bigInteger();
            default:
                return visitor._other();
        }
    },
} as const;

export declare namespace PrimitiveTypeV1 {
    interface Visitor<R> {
        integer: () => R;
        double: () => R;
        string: () => R;
        boolean: () => R;
        long: () => R;
        dateTime: () => R;
        date: () => R;
        uuid: () => R;
        base64: () => R;
        bigInteger: () => R;
        _other: () => R;
    }
}
