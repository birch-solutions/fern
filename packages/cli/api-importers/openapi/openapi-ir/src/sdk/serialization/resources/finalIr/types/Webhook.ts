/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { EndpointSdkName } from "./EndpointSdkName";
import { WebhookHttpMethod } from "./WebhookHttpMethod";
import { TagId } from "../../commons/types/TagId";
import { Header } from "./Header";
import { WebhookExampleCall } from "./WebhookExampleCall";
import { WithDescription } from "../../commons/types/WithDescription";
import { WithSource } from "../../commons/types/WithSource";
import { WithNamespace } from "../../commons/types/WithNamespace";

export const Webhook: core.serialization.ObjectSchema<serializers.Webhook.Raw, FernOpenapiIr.Webhook> =
    core.serialization
        .objectWithoutOptionalProperties({
            sdkName: EndpointSdkName.optional(),
            method: WebhookHttpMethod,
            summary: core.serialization.string().optional(),
            operationId: core.serialization.string(),
            tags: core.serialization.list(TagId),
            headers: core.serialization.list(Header),
            generatedPayloadName: core.serialization.string(),
            payload: core.serialization.lazy(() => serializers.Schema),
            examples: core.serialization.list(WebhookExampleCall)
        })
        .extend(WithDescription)
        .extend(WithSource)
        .extend(WithNamespace);

export declare namespace Webhook {
    interface Raw extends WithDescription.Raw, WithSource.Raw, WithNamespace.Raw {
        sdkName?: EndpointSdkName.Raw | null;
        method: WebhookHttpMethod.Raw;
        summary?: string | null;
        operationId: string;
        tags: TagId.Raw[];
        headers: Header.Raw[];
        generatedPayloadName: string;
        payload: serializers.Schema.Raw;
        examples: WebhookExampleCall.Raw[];
    }
}
