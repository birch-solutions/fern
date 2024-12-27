/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../index";

export type JsonResponse = FernIr.JsonResponse.Response | FernIr.JsonResponse.NestedPropertyAsResponse;

export namespace JsonResponse {
    export interface Response extends FernIr.JsonResponseBody, _Utils {
        type: "response";
    }

    export interface NestedPropertyAsResponse extends FernIr.JsonResponseBodyWithProperty, _Utils {
        type: "nestedPropertyAsResponse";
    }

    export interface _Utils {
        _visit: <_Result>(visitor: FernIr.JsonResponse._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        response: (value: FernIr.JsonResponseBody) => _Result;
        nestedPropertyAsResponse: (value: FernIr.JsonResponseBodyWithProperty) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const JsonResponse = {
    response: (value: FernIr.JsonResponseBody): FernIr.JsonResponse.Response => {
        return {
            ...value,
            type: "response",
            _visit: function <_Result>(
                this: FernIr.JsonResponse.Response,
                visitor: FernIr.JsonResponse._Visitor<_Result>,
            ) {
                return FernIr.JsonResponse._visit(this, visitor);
            },
        };
    },

    nestedPropertyAsResponse: (
        value: FernIr.JsonResponseBodyWithProperty,
    ): FernIr.JsonResponse.NestedPropertyAsResponse => {
        return {
            ...value,
            type: "nestedPropertyAsResponse",
            _visit: function <_Result>(
                this: FernIr.JsonResponse.NestedPropertyAsResponse,
                visitor: FernIr.JsonResponse._Visitor<_Result>,
            ) {
                return FernIr.JsonResponse._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(value: FernIr.JsonResponse, visitor: FernIr.JsonResponse._Visitor<_Result>): _Result => {
        switch (value.type) {
            case "response":
                return visitor.response(value);
            case "nestedPropertyAsResponse":
                return visitor.nestedPropertyAsResponse(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
