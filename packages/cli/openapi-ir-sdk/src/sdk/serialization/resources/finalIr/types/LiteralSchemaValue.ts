/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";

export const LiteralSchemaValue: core.serialization.Schema<
    serializers.LiteralSchemaValue.Raw,
    FernOpenapiIr.LiteralSchemaValue
> = core.serialization
    .union("type", {
        boolean: core.serialization.object({
            value: core.serialization.boolean(),
        }),
        string: core.serialization.object({
            value: core.serialization.string(),
        }),
    })
    .transform<FernOpenapiIr.LiteralSchemaValue>({
        transform: (value) => {
            switch (value.type) {
                case "boolean":
                    return FernOpenapiIr.LiteralSchemaValue.boolean(value.value);
                case "string":
                    return FernOpenapiIr.LiteralSchemaValue.string(value.value);
                default:
                    return value as FernOpenapiIr.LiteralSchemaValue;
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace LiteralSchemaValue {
    type Raw = LiteralSchemaValue.Boolean | LiteralSchemaValue.String;

    interface Boolean {
        type: "boolean";
        value: boolean;
    }

    interface String {
        type: "string";
        value: string;
    }
}
