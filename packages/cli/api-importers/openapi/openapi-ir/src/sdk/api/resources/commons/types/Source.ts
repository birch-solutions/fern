/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../../index";

export type Source = FernOpenapiIr.Source.Openapi | FernOpenapiIr.Source.Protobuf;

export declare namespace Source {
    interface Openapi extends FernOpenapiIr.OpenApiSource, _Utils {
        type: "openapi";
    }

    interface Protobuf extends FernOpenapiIr.ProtobufSource, _Utils {
        type: "protobuf";
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernOpenapiIr.Source._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        openapi: (value: FernOpenapiIr.OpenApiSource) => _Result;
        protobuf: (value: FernOpenapiIr.ProtobufSource) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const Source = {
    openapi: (value: FernOpenapiIr.OpenApiSource): FernOpenapiIr.Source.Openapi => {
        return {
            ...value,
            type: "openapi",
            _visit: function <_Result>(
                this: FernOpenapiIr.Source.Openapi,
                visitor: FernOpenapiIr.Source._Visitor<_Result>
            ) {
                return FernOpenapiIr.Source._visit(this, visitor);
            }
        };
    },

    protobuf: (value: FernOpenapiIr.ProtobufSource): FernOpenapiIr.Source.Protobuf => {
        return {
            ...value,
            type: "protobuf",
            _visit: function <_Result>(
                this: FernOpenapiIr.Source.Protobuf,
                visitor: FernOpenapiIr.Source._Visitor<_Result>
            ) {
                return FernOpenapiIr.Source._visit(this, visitor);
            }
        };
    },

    _visit: <_Result>(value: FernOpenapiIr.Source, visitor: FernOpenapiIr.Source._Visitor<_Result>): _Result => {
        switch (value.type) {
            case "openapi":
                return visitor.openapi(value);
            case "protobuf":
                return visitor.protobuf(value);
            default:
                return visitor._other(value as any);
        }
    }
} as const;
