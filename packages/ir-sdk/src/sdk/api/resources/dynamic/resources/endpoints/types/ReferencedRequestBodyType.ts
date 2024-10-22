/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../../../index";

export type ReferencedRequestBodyType =
    | FernIr.dynamic.ReferencedRequestBodyType.Bytes
    | FernIr.dynamic.ReferencedRequestBodyType.TypeReference;

export declare namespace ReferencedRequestBodyType {
    interface Bytes extends _Utils {
        type: "bytes";
    }

    interface TypeReference extends _Utils {
        type: "typeReference";
        value: FernIr.dynamic.TypeReference;
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernIr.dynamic.ReferencedRequestBodyType._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        bytes: () => _Result;
        typeReference: (value: FernIr.dynamic.TypeReference) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const ReferencedRequestBodyType = {
    bytes: (): FernIr.dynamic.ReferencedRequestBodyType.Bytes => {
        return {
            type: "bytes",
            _visit <_Result>(
                this: FernIr.dynamic.ReferencedRequestBodyType.Bytes,
                visitor: FernIr.dynamic.ReferencedRequestBodyType._Visitor<_Result>
            ) {
                return FernIr.dynamic.ReferencedRequestBodyType._visit(this, visitor);
            },
        };
    },

    typeReference: (value: FernIr.dynamic.TypeReference): FernIr.dynamic.ReferencedRequestBodyType.TypeReference => {
        return {
            value,
            type: "typeReference",
            _visit <_Result>(
                this: FernIr.dynamic.ReferencedRequestBodyType.TypeReference,
                visitor: FernIr.dynamic.ReferencedRequestBodyType._Visitor<_Result>
            ) {
                return FernIr.dynamic.ReferencedRequestBodyType._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernIr.dynamic.ReferencedRequestBodyType,
        visitor: FernIr.dynamic.ReferencedRequestBodyType._Visitor<_Result>
    ): _Result => {
        switch (value.type) {
            case "bytes":
                return visitor.bytes();
            case "typeReference":
                return visitor.typeReference(value.value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
