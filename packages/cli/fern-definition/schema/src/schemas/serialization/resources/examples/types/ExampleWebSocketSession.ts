/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { ExampleTypeReferenceSchema } from "./ExampleTypeReferenceSchema";
import { ExampleWebSocketMessage } from "./ExampleWebSocketMessage";
import { WithName } from "../../commons/types/WithName";
import { WithDocsSchema } from "../../commons/types/WithDocsSchema";

export const ExampleWebSocketSession: core.serialization.ObjectSchema<
    serializers.ExampleWebSocketSession.Raw,
    FernDefinition.ExampleWebSocketSession
> = core.serialization
    .object({
        "path-parameters": core.serialization
            .record(core.serialization.string(), ExampleTypeReferenceSchema)
            .optional(),
        "query-parameters": core.serialization
            .record(core.serialization.string(), ExampleTypeReferenceSchema)
            .optional(),
        headers: core.serialization.record(core.serialization.string(), ExampleTypeReferenceSchema).optional(),
        messages: core.serialization.list(ExampleWebSocketMessage),
    })
    .extend(WithName)
    .extend(WithDocsSchema);

export declare namespace ExampleWebSocketSession {
    interface Raw extends WithName.Raw, WithDocsSchema.Raw {
        "path-parameters"?: Record<string, ExampleTypeReferenceSchema.Raw | undefined> | null;
        "query-parameters"?: Record<string, ExampleTypeReferenceSchema.Raw | undefined> | null;
        headers?: Record<string, ExampleTypeReferenceSchema.Raw | undefined> | null;
        messages: ExampleWebSocketMessage.Raw[];
    }
}
