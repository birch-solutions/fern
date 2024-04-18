/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../..";

export type StreamingResponse =
    | FernIr.StreamingResponse.Json
    | FernIr.StreamingResponse.Text
    | FernIr.StreamingResponse.Sse;

export declare namespace StreamingResponse {
    interface Json extends _Utils {
        type: "json";
        json: FernIr.JsonStreamChunk;
    }

    interface Text extends FernIr.TextStreamChunk, _Utils {
        type: "text";
    }

    interface Sse extends _Utils {
        type: "sse";
        sse: FernIr.SseStreamChunk;
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernIr.StreamingResponse._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        json: (value: FernIr.JsonStreamChunk) => _Result;
        text: (value: FernIr.TextStreamChunk) => _Result;
        sse: (value: FernIr.SseStreamChunk) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const StreamingResponse = {
    json: (value: FernIr.JsonStreamChunk): FernIr.StreamingResponse.Json => {
        return {
            json: value,
            type: "json",
            _visit: function <_Result>(
                this: FernIr.StreamingResponse.Json,
                visitor: FernIr.StreamingResponse._Visitor<_Result>
            ) {
                return FernIr.StreamingResponse._visit(this, visitor);
            },
        };
    },

    text: (value: FernIr.TextStreamChunk): FernIr.StreamingResponse.Text => {
        return {
            ...value,
            type: "text",
            _visit: function <_Result>(
                this: FernIr.StreamingResponse.Text,
                visitor: FernIr.StreamingResponse._Visitor<_Result>
            ) {
                return FernIr.StreamingResponse._visit(this, visitor);
            },
        };
    },

    sse: (value: FernIr.SseStreamChunk): FernIr.StreamingResponse.Sse => {
        return {
            sse: value,
            type: "sse",
            _visit: function <_Result>(
                this: FernIr.StreamingResponse.Sse,
                visitor: FernIr.StreamingResponse._Visitor<_Result>
            ) {
                return FernIr.StreamingResponse._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernIr.StreamingResponse,
        visitor: FernIr.StreamingResponse._Visitor<_Result>
    ): _Result => {
        switch (value.type) {
            case "json":
                return visitor.json(value.json);
            case "text":
                return visitor.text(value);
            case "sse":
                return visitor.sse(value.sse);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
