/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../..";

export type ExampleWebSocketMessageBody =
    | FernIr.ExampleWebSocketMessageBody.InlinedRequestBody
    | FernIr.ExampleWebSocketMessageBody.Reference;

export declare namespace ExampleWebSocketMessageBody {
    interface InlinedRequestBody extends FernIr.ExampleInlinedRequestBody, _Utils {
        type: "inlinedRequestBody";
    }

    interface Reference extends FernIr.ExampleTypeReference, _Utils {
        type: "reference";
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernIr.ExampleWebSocketMessageBody._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        inlinedRequestBody: (value: FernIr.ExampleInlinedRequestBody) => _Result;
        reference: (value: FernIr.ExampleTypeReference) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const ExampleWebSocketMessageBody = {
    inlinedRequestBody: (
        value: FernIr.ExampleInlinedRequestBody
    ): FernIr.ExampleWebSocketMessageBody.InlinedRequestBody => {
        return {
            ...value,
            type: "inlinedRequestBody",
            _visit: function <_Result>(
                this: FernIr.ExampleWebSocketMessageBody.InlinedRequestBody,
                visitor: FernIr.ExampleWebSocketMessageBody._Visitor<_Result>
            ) {
                return FernIr.ExampleWebSocketMessageBody._visit(this, visitor);
            },
        };
    },

    reference: (value: FernIr.ExampleTypeReference): FernIr.ExampleWebSocketMessageBody.Reference => {
        return {
            ...value,
            type: "reference",
            _visit: function <_Result>(
                this: FernIr.ExampleWebSocketMessageBody.Reference,
                visitor: FernIr.ExampleWebSocketMessageBody._Visitor<_Result>
            ) {
                return FernIr.ExampleWebSocketMessageBody._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernIr.ExampleWebSocketMessageBody,
        visitor: FernIr.ExampleWebSocketMessageBody._Visitor<_Result>
    ): _Result => {
        switch (value.type) {
            case "inlinedRequestBody":
                return visitor.inlinedRequestBody(value);
            case "reference":
                return visitor.reference(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
