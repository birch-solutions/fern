/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../..";

/**
 * The original source of the declared type (e.g. a `.proto` file).
 */
export type Source = FernIr.Source.Proto;

export declare namespace Source {
    interface Proto extends _Utils {
        type: "proto";
        value: FernIr.ProtobufType;
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernIr.Source._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        proto: (value: FernIr.ProtobufType) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const Source = {
    proto: (value: FernIr.ProtobufType): FernIr.Source.Proto => {
        return {
            value: value,
            type: "proto",
            _visit: function <_Result>(this: FernIr.Source.Proto, visitor: FernIr.Source._Visitor<_Result>) {
                return FernIr.Source._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(value: FernIr.Source, visitor: FernIr.Source._Visitor<_Result>): _Result => {
        switch (value.type) {
            case "proto":
                return visitor.proto(value.value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
