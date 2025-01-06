/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { ProtobufEncoding } from "./ProtobufEncoding";

export const Encoding: core.serialization.Schema<serializers.Encoding.Raw, FernOpenapiIr.Encoding> = core.serialization
    .union("type", {
        protobuf: ProtobufEncoding,
    })
    .transform<FernOpenapiIr.Encoding>({
        transform: (value) => {
            switch (value.type) {
                case "protobuf":
                    return FernOpenapiIr.Encoding.protobuf(value);
                default:
                    return value as FernOpenapiIr.Encoding;
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Encoding {
    export type Raw = Encoding.Protobuf;

    export interface Protobuf extends ProtobufEncoding.Raw {
        type: "protobuf";
    }
}
