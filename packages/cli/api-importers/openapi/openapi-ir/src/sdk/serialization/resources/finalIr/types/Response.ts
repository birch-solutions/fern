/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { FileResponse } from "./FileResponse";
import { JsonResponse } from "./JsonResponse";
import { TextResponse } from "./TextResponse";

export const Response: core.serialization.Schema<serializers.Response.Raw, FernOpenapiIr.Response> = core.serialization
    .union("type", {
        file: FileResponse,
        json: JsonResponse,
        text: TextResponse,
        streamingSse: JsonResponse,
        streamingText: TextResponse,
        streamingJson: JsonResponse,
    })
    .transform<FernOpenapiIr.Response>({
        transform: (value) => {
            switch (value.type) {
                case "file":
                    return FernOpenapiIr.Response.file(value);
                case "json":
                    return FernOpenapiIr.Response.json(value);
                case "text":
                    return FernOpenapiIr.Response.text(value);
                case "streamingSse":
                    return FernOpenapiIr.Response.streamingSse(value);
                case "streamingText":
                    return FernOpenapiIr.Response.streamingText(value);
                case "streamingJson":
                    return FernOpenapiIr.Response.streamingJson(value);
                default:
                    return value as FernOpenapiIr.Response;
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Response {
    export type Raw =
        | Response.File
        | Response.Json
        | Response.Text
        | Response.StreamingSse
        | Response.StreamingText
        | Response.StreamingJson;

    export interface File extends FileResponse.Raw {
        type: "file";
    }

    export interface Json extends JsonResponse.Raw {
        type: "json";
    }

    export interface Text extends TextResponse.Raw {
        type: "text";
    }

    export interface StreamingSse extends JsonResponse.Raw {
        type: "streamingSse";
    }

    export interface StreamingText extends TextResponse.Raw {
        type: "streamingText";
    }

    export interface StreamingJson extends JsonResponse.Raw {
        type: "streamingJson";
    }
}
