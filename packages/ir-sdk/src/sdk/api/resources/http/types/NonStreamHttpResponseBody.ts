/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../index";

export type NonStreamHttpResponseBody =
    | FernIr.NonStreamHttpResponseBody.Json
    | FernIr.NonStreamHttpResponseBody.FileDownload
    | FernIr.NonStreamHttpResponseBody.Text;

export declare namespace NonStreamHttpResponseBody {
    interface Json extends _Utils {
        type: "json";
        value: FernIr.JsonResponse;
    }

    interface FileDownload extends FernIr.FileDownloadResponse, _Utils {
        type: "fileDownload";
    }

    interface Text extends FernIr.TextResponse, _Utils {
        type: "text";
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernIr.NonStreamHttpResponseBody._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        json: (value: FernIr.JsonResponse) => _Result;
        fileDownload: (value: FernIr.FileDownloadResponse) => _Result;
        text: (value: FernIr.TextResponse) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const NonStreamHttpResponseBody = {
    json: (value: FernIr.JsonResponse): FernIr.NonStreamHttpResponseBody.Json => {
        return {
            value: value,
            type: "json",
            _visit: function <_Result>(
                this: FernIr.NonStreamHttpResponseBody.Json,
                visitor: FernIr.NonStreamHttpResponseBody._Visitor<_Result>
            ) {
                return FernIr.NonStreamHttpResponseBody._visit(this, visitor);
            },
        };
    },

    fileDownload: (value: FernIr.FileDownloadResponse): FernIr.NonStreamHttpResponseBody.FileDownload => {
        return {
            ...value,
            type: "fileDownload",
            _visit: function <_Result>(
                this: FernIr.NonStreamHttpResponseBody.FileDownload,
                visitor: FernIr.NonStreamHttpResponseBody._Visitor<_Result>
            ) {
                return FernIr.NonStreamHttpResponseBody._visit(this, visitor);
            },
        };
    },

    text: (value: FernIr.TextResponse): FernIr.NonStreamHttpResponseBody.Text => {
        return {
            ...value,
            type: "text",
            _visit: function <_Result>(
                this: FernIr.NonStreamHttpResponseBody.Text,
                visitor: FernIr.NonStreamHttpResponseBody._Visitor<_Result>
            ) {
                return FernIr.NonStreamHttpResponseBody._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernIr.NonStreamHttpResponseBody,
        visitor: FernIr.NonStreamHttpResponseBody._Visitor<_Result>
    ): _Result => {
        switch (value.type) {
            case "json":
                return visitor.json(value.value);
            case "fileDownload":
                return visitor.fileDownload(value);
            case "text":
                return visitor.text(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
