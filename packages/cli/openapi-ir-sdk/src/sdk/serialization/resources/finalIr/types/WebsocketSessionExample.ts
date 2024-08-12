/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { QueryParameterExample } from "./QueryParameterExample";
import { HeaderExample } from "./HeaderExample";
import { WebsocketMessageExample } from "./WebsocketMessageExample";
import { WithDescription } from "../../commons/types/WithDescription";

export const WebsocketSessionExample: core.serialization.ObjectSchema<
    serializers.WebsocketSessionExample.Raw,
    FernOpenapiIr.WebsocketSessionExample
> = core.serialization
    .objectWithoutOptionalProperties({
        name: core.serialization.string().optional(),
        queryParameters: core.serialization.list(QueryParameterExample).optional(),
        headers: core.serialization.list(HeaderExample).optional(),
        messages: core.serialization.list(WebsocketMessageExample),
    })
    .extend(WithDescription);

export declare namespace WebsocketSessionExample {
    interface Raw extends WithDescription.Raw {
        name?: string | null;
        queryParameters?: QueryParameterExample.Raw[] | null;
        headers?: HeaderExample.Raw[] | null;
        messages: WebsocketMessageExample.Raw[];
    }
}
