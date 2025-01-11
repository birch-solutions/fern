/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { OpenApiSource } from "./OpenApiSource";
import { ProtobufSource } from "./ProtobufSource";

export const Source: core.serialization.Schema<serializers.Source.Raw, FernOpenapiIr.Source> = core.serialization
    .union("type", {
        openapi: OpenApiSource,
        protobuf: ProtobufSource,
    })
    .transform<FernOpenapiIr.Source>({
        transform: (value) => {
            switch (value.type) {
                case "openapi":
                    return FernOpenapiIr.Source.openapi(value);
                case "protobuf":
                    return FernOpenapiIr.Source.protobuf(value);
                default:
                    return value as FernOpenapiIr.Source;
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Source {
    export type Raw = Source.Openapi | Source.Protobuf;

    export interface Openapi extends OpenApiSource.Raw {
        type: "openapi";
    }

    export interface Protobuf extends ProtobufSource.Raw {
        type: "protobuf";
    }
}
