/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../index";

export type ErrorDeclarationDiscriminantValue =
    | FernIr.ErrorDeclarationDiscriminantValue.Property
    | FernIr.ErrorDeclarationDiscriminantValue.StatusCode;

export namespace ErrorDeclarationDiscriminantValue {
    export interface Property extends FernIr.NameAndWireValue, _Utils {
        type: "property";
    }

    export interface StatusCode extends _Utils {
        type: "statusCode";
    }

    export interface _Utils {
        _visit: <_Result>(visitor: FernIr.ErrorDeclarationDiscriminantValue._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        property: (value: FernIr.NameAndWireValue) => _Result;
        statusCode: () => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const ErrorDeclarationDiscriminantValue = {
    property: (value: FernIr.NameAndWireValue): FernIr.ErrorDeclarationDiscriminantValue.Property => {
        return {
            ...value,
            type: "property",
            _visit: function <_Result>(
                this: FernIr.ErrorDeclarationDiscriminantValue.Property,
                visitor: FernIr.ErrorDeclarationDiscriminantValue._Visitor<_Result>,
            ) {
                return FernIr.ErrorDeclarationDiscriminantValue._visit(this, visitor);
            },
        };
    },

    statusCode: (): FernIr.ErrorDeclarationDiscriminantValue.StatusCode => {
        return {
            type: "statusCode",
            _visit: function <_Result>(
                this: FernIr.ErrorDeclarationDiscriminantValue.StatusCode,
                visitor: FernIr.ErrorDeclarationDiscriminantValue._Visitor<_Result>,
            ) {
                return FernIr.ErrorDeclarationDiscriminantValue._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernIr.ErrorDeclarationDiscriminantValue,
        visitor: FernIr.ErrorDeclarationDiscriminantValue._Visitor<_Result>,
    ): _Result => {
        switch (value.type) {
            case "property":
                return visitor.property(value);
            case "statusCode":
                return visitor.statusCode();
            default:
                return visitor._other(value as any);
        }
    },
} as const;
