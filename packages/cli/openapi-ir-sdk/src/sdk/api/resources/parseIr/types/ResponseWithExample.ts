/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../../index";

export type ResponseWithExample =
    | FernOpenapiIr.ResponseWithExample.File_
    | FernOpenapiIr.ResponseWithExample.Json
    | FernOpenapiIr.ResponseWithExample.Text
    | FernOpenapiIr.ResponseWithExample.StreamingSse
    | FernOpenapiIr.ResponseWithExample.StreamingText
    /**
     * Checks if `x-fern-streaming` is present and is true. */
    | FernOpenapiIr.ResponseWithExample.StreamingJson;

export declare namespace ResponseWithExample {
    interface File_ extends FernOpenapiIr.FileResponse, _Utils {
        type: "file";
    }

    interface Json extends FernOpenapiIr.JsonResponseWithExample, _Utils {
        type: "json";
    }

    interface Text extends FernOpenapiIr.TextResponse, _Utils {
        type: "text";
    }

    interface StreamingSse extends FernOpenapiIr.JsonResponse, _Utils {
        type: "streamingSse";
    }

    interface StreamingText extends FernOpenapiIr.TextResponse, _Utils {
        type: "streamingText";
    }

    interface StreamingJson extends FernOpenapiIr.JsonResponse, _Utils {
        type: "streamingJson";
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernOpenapiIr.ResponseWithExample._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        file: (value: FernOpenapiIr.FileResponse) => _Result;
        json: (value: FernOpenapiIr.JsonResponseWithExample) => _Result;
        text: (value: FernOpenapiIr.TextResponse) => _Result;
        streamingSse: (value: FernOpenapiIr.JsonResponse) => _Result;
        streamingText: (value: FernOpenapiIr.TextResponse) => _Result;
        streamingJson: (value: FernOpenapiIr.JsonResponse) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const ResponseWithExample = {
    file: (value: FernOpenapiIr.FileResponse): FernOpenapiIr.ResponseWithExample.File_ => {
        return {
            ...value,
            type: "file",
            _visit: function <_Result>(
                this: FernOpenapiIr.ResponseWithExample.File_,
                visitor: FernOpenapiIr.ResponseWithExample._Visitor<_Result>
            ) {
                return FernOpenapiIr.ResponseWithExample._visit(this, visitor);
            },
        };
    },

    json: (value: FernOpenapiIr.JsonResponseWithExample): FernOpenapiIr.ResponseWithExample.Json => {
        return {
            ...value,
            type: "json",
            _visit: function <_Result>(
                this: FernOpenapiIr.ResponseWithExample.Json,
                visitor: FernOpenapiIr.ResponseWithExample._Visitor<_Result>
            ) {
                return FernOpenapiIr.ResponseWithExample._visit(this, visitor);
            },
        };
    },

    text: (value: FernOpenapiIr.TextResponse): FernOpenapiIr.ResponseWithExample.Text => {
        return {
            ...value,
            type: "text",
            _visit: function <_Result>(
                this: FernOpenapiIr.ResponseWithExample.Text,
                visitor: FernOpenapiIr.ResponseWithExample._Visitor<_Result>
            ) {
                return FernOpenapiIr.ResponseWithExample._visit(this, visitor);
            },
        };
    },

    streamingSse: (value: FernOpenapiIr.JsonResponse): FernOpenapiIr.ResponseWithExample.StreamingSse => {
        return {
            ...value,
            type: "streamingSse",
            _visit: function <_Result>(
                this: FernOpenapiIr.ResponseWithExample.StreamingSse,
                visitor: FernOpenapiIr.ResponseWithExample._Visitor<_Result>
            ) {
                return FernOpenapiIr.ResponseWithExample._visit(this, visitor);
            },
        };
    },

    streamingText: (value: FernOpenapiIr.TextResponse): FernOpenapiIr.ResponseWithExample.StreamingText => {
        return {
            ...value,
            type: "streamingText",
            _visit: function <_Result>(
                this: FernOpenapiIr.ResponseWithExample.StreamingText,
                visitor: FernOpenapiIr.ResponseWithExample._Visitor<_Result>
            ) {
                return FernOpenapiIr.ResponseWithExample._visit(this, visitor);
            },
        };
    },

    streamingJson: (value: FernOpenapiIr.JsonResponse): FernOpenapiIr.ResponseWithExample.StreamingJson => {
        return {
            ...value,
            type: "streamingJson",
            _visit: function <_Result>(
                this: FernOpenapiIr.ResponseWithExample.StreamingJson,
                visitor: FernOpenapiIr.ResponseWithExample._Visitor<_Result>
            ) {
                return FernOpenapiIr.ResponseWithExample._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernOpenapiIr.ResponseWithExample,
        visitor: FernOpenapiIr.ResponseWithExample._Visitor<_Result>
    ): _Result => {
        switch (value.type) {
            case "file":
                return visitor.file(value);
            case "json":
                return visitor.json(value);
            case "text":
                return visitor.text(value);
            case "streamingSse":
                return visitor.streamingSse(value);
            case "streamingText":
                return visitor.streamingText(value);
            case "streamingJson":
                return visitor.streamingJson(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
