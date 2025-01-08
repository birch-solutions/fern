/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../index";

export type StreamingResponse =
    | FernIr.StreamingResponse.Json
    | FernIr.StreamingResponse.Text
    | FernIr.StreamingResponse.Sse;

export namespace StreamingResponse {
    export interface Json extends FernIr.JsonStreamChunk, _Utils {
        type: "json";
    }

    export interface Text extends FernIr.TextStreamChunk, _Utils {
        type: "text";
    }

    export interface Sse extends FernIr.SseStreamChunk, _Utils {
        type: "sse";
    }

    export interface _Utils {
        _visit: <_Result>(visitor: FernIr.StreamingResponse._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        json: (value: FernIr.JsonStreamChunk) => _Result;
        text: (value: FernIr.TextStreamChunk) => _Result;
        sse: (value: FernIr.SseStreamChunk) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const StreamingResponse = {
    json: (value: FernIr.JsonStreamChunk): FernIr.StreamingResponse.Json => {
        return {
            ...value,
            type: "json",
            _visit: function <_Result>(
                this: FernIr.StreamingResponse.Json,
                visitor: FernIr.StreamingResponse._Visitor<_Result>,
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
                visitor: FernIr.StreamingResponse._Visitor<_Result>,
            ) {
                return FernIr.StreamingResponse._visit(this, visitor);
            },
        };
    },

    sse: (value: FernIr.SseStreamChunk): FernIr.StreamingResponse.Sse => {
        return {
            ...value,
            type: "sse",
            _visit: function <_Result>(
                this: FernIr.StreamingResponse.Sse,
                visitor: FernIr.StreamingResponse._Visitor<_Result>,
            ) {
                return FernIr.StreamingResponse._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernIr.StreamingResponse,
        visitor: FernIr.StreamingResponse._Visitor<_Result>,
    ): _Result => {
        switch (value.type) {
            case "json":
                return visitor.json(value);
            case "text":
                return visitor.text(value);
            case "sse":
                return visitor.sse(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
