/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../..";

/**
 * A Protobuf type declaration.
 */
export type ProtobufType = FernIr.ProtobufType.WellKnown | FernIr.ProtobufType.UserDefined;

export declare namespace ProtobufType {
    interface WellKnown extends _Utils {
        type: "wellKnown";
        value: FernIr.WellKnownProtobufType;
    }

    interface UserDefined extends FernIr.UserDefinedProtobufType, _Utils {
        type: "userDefined";
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernIr.ProtobufType._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        wellKnown: (value: FernIr.WellKnownProtobufType) => _Result;
        userDefined: (value: FernIr.UserDefinedProtobufType) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const ProtobufType = {
    wellKnown: (value: FernIr.WellKnownProtobufType): FernIr.ProtobufType.WellKnown => {
        return {
            value: value,
            type: "wellKnown",
            _visit: function <_Result>(
                this: FernIr.ProtobufType.WellKnown,
                visitor: FernIr.ProtobufType._Visitor<_Result>
            ) {
                return FernIr.ProtobufType._visit(this, visitor);
            },
        };
    },

    userDefined: (value: FernIr.UserDefinedProtobufType): FernIr.ProtobufType.UserDefined => {
        return {
            ...value,
            type: "userDefined",
            _visit: function <_Result>(
                this: FernIr.ProtobufType.UserDefined,
                visitor: FernIr.ProtobufType._Visitor<_Result>
            ) {
                return FernIr.ProtobufType._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(value: FernIr.ProtobufType, visitor: FernIr.ProtobufType._Visitor<_Result>): _Result => {
        switch (value.type) {
            case "wellKnown":
                return visitor.wellKnown(value.value);
            case "userDefined":
                return visitor.userDefined(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
