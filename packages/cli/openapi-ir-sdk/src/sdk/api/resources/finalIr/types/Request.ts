/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../..";

export type Request = FernOpenapiIr.Request.OctetStream | FernOpenapiIr.Request.Multipart | FernOpenapiIr.Request.Json;

export declare namespace Request {
    interface OctetStream extends FernOpenapiIr.OctetStreamRequest, _Utils {
        type: "octetStream";
    }

    interface Multipart extends FernOpenapiIr.MultipartRequest, _Utils {
        type: "multipart";
    }

    interface Json extends FernOpenapiIr.JsonRequest, _Utils {
        type: "json";
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernOpenapiIr.Request._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        octetStream: (value: FernOpenapiIr.OctetStreamRequest) => _Result;
        multipart: (value: FernOpenapiIr.MultipartRequest) => _Result;
        json: (value: FernOpenapiIr.JsonRequest) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const Request = {
    octetStream: (value: FernOpenapiIr.OctetStreamRequest): FernOpenapiIr.Request.OctetStream => {
        return {
            ...value,
            type: "octetStream",
            _visit: function <_Result>(
                this: FernOpenapiIr.Request.OctetStream,
                visitor: FernOpenapiIr.Request._Visitor<_Result>
            ) {
                return FernOpenapiIr.Request._visit(this, visitor);
            },
        };
    },

    multipart: (value: FernOpenapiIr.MultipartRequest): FernOpenapiIr.Request.Multipart => {
        return {
            ...value,
            type: "multipart",
            _visit: function <_Result>(
                this: FernOpenapiIr.Request.Multipart,
                visitor: FernOpenapiIr.Request._Visitor<_Result>
            ) {
                return FernOpenapiIr.Request._visit(this, visitor);
            },
        };
    },

    json: (value: FernOpenapiIr.JsonRequest): FernOpenapiIr.Request.Json => {
        return {
            ...value,
            type: "json",
            _visit: function <_Result>(
                this: FernOpenapiIr.Request.Json,
                visitor: FernOpenapiIr.Request._Visitor<_Result>
            ) {
                return FernOpenapiIr.Request._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(value: FernOpenapiIr.Request, visitor: FernOpenapiIr.Request._Visitor<_Result>): _Result => {
        switch (value.type) {
            case "octetStream":
                return visitor.octetStream(value);
            case "multipart":
                return visitor.multipart(value);
            case "json":
                return visitor.json(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
