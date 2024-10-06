/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";

export const PrimitiveExample: core.serialization.Schema<
    serializers.PrimitiveExample.Raw,
    FernOpenapiIr.PrimitiveExample
> = core.serialization
    .union("type", {
        int: core.serialization.object({
            value: core.serialization.number()
        }),
        int64: core.serialization.object({
            value: core.serialization.number()
        }),
        uint: core.serialization.object({
            value: core.serialization.number()
        }),
        uint64: core.serialization.object({
            value: core.serialization.number()
        }),
        float: core.serialization.object({
            value: core.serialization.number()
        }),
        double: core.serialization.object({
            value: core.serialization.number()
        }),
        string: core.serialization.object({
            value: core.serialization.string()
        }),
        datetime: core.serialization.object({
            value: core.serialization.string()
        }),
        date: core.serialization.object({
            value: core.serialization.string()
        }),
        base64: core.serialization.object({
            value: core.serialization.string()
        }),
        boolean: core.serialization.object({
            value: core.serialization.boolean()
        })
    })
    .transform<FernOpenapiIr.PrimitiveExample>({
        transform: (value) => {
            switch (value.type) {
                case "int":
                    return FernOpenapiIr.PrimitiveExample.int(value.value);
                case "int64":
                    return FernOpenapiIr.PrimitiveExample.int64(value.value);
                case "uint":
                    return FernOpenapiIr.PrimitiveExample.uint(value.value);
                case "uint64":
                    return FernOpenapiIr.PrimitiveExample.uint64(value.value);
                case "float":
                    return FernOpenapiIr.PrimitiveExample.float(value.value);
                case "double":
                    return FernOpenapiIr.PrimitiveExample.double(value.value);
                case "string":
                    return FernOpenapiIr.PrimitiveExample.string(value.value);
                case "datetime":
                    return FernOpenapiIr.PrimitiveExample.datetime(value.value);
                case "date":
                    return FernOpenapiIr.PrimitiveExample.date(value.value);
                case "base64":
                    return FernOpenapiIr.PrimitiveExample.base64(value.value);
                case "boolean":
                    return FernOpenapiIr.PrimitiveExample.boolean(value.value);
                default:
                    return value as FernOpenapiIr.PrimitiveExample;
            }
        },
        untransform: ({ _visit, ...value }) => value as any
    });

export declare namespace PrimitiveExample {
    type Raw =
        | PrimitiveExample.Int
        | PrimitiveExample.Int64
        | PrimitiveExample.Uint
        | PrimitiveExample.Uint64
        | PrimitiveExample.Float
        | PrimitiveExample.Double
        | PrimitiveExample.String
        | PrimitiveExample.Datetime
        | PrimitiveExample.Date
        | PrimitiveExample.Base64
        | PrimitiveExample.Boolean;

    interface Int {
        type: "int";
        value: number;
    }

    interface Int64 {
        type: "int64";
        value: number;
    }

    interface Uint {
        type: "uint";
        value: number;
    }

    interface Uint64 {
        type: "uint64";
        value: number;
    }

    interface Float {
        type: "float";
        value: number;
    }

    interface Double {
        type: "double";
        value: number;
    }

    interface String {
        type: "string";
        value: string;
    }

    interface Datetime {
        type: "datetime";
        value: string;
    }

    interface Date {
        type: "date";
        value: string;
    }

    interface Base64 {
        type: "base64";
        value: string;
    }

    interface Boolean {
        type: "boolean";
        value: boolean;
    }
}
