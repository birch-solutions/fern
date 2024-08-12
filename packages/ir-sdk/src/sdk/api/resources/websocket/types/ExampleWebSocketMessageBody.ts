/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../index";

export type ExampleWebSocketMessageBody =
    | FernIr.ExampleWebSocketMessageBody.InlinedBody
    | FernIr.ExampleWebSocketMessageBody.Reference;

export declare namespace ExampleWebSocketMessageBody {
    interface InlinedBody extends FernIr.ExampleInlinedRequestBody, _Utils {
        type: "inlinedBody";
    }

    interface Reference extends FernIr.ExampleTypeReference, _Utils {
        type: "reference";
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernIr.ExampleWebSocketMessageBody._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        inlinedBody: (value: FernIr.ExampleInlinedRequestBody) => _Result;
        reference: (value: FernIr.ExampleTypeReference) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const ExampleWebSocketMessageBody = {
    inlinedBody: (value: FernIr.ExampleInlinedRequestBody): FernIr.ExampleWebSocketMessageBody.InlinedBody => {
        return {
            ...value,
            type: "inlinedBody",
            _visit: function <_Result>(
                this: FernIr.ExampleWebSocketMessageBody.InlinedBody,
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
            case "inlinedBody":
                return visitor.inlinedBody(value);
            case "reference":
                return visitor.reference(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
