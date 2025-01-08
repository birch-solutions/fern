/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index.js";
import * as Fiddle from "../../../../../../api/index.js";
import * as core from "../../../../../../core/index.js";
import { ObjectWithRequiredField } from "../../../../types/resources/object/types/ObjectWithRequiredField.js";

export const Request: core.serialization.Schema<
    serializers.endpoints.container.getAndReturnOptional.Request.Raw,
    Fiddle.types.ObjectWithRequiredField | undefined
> = ObjectWithRequiredField.optional();

export declare namespace Request {
    export type Raw = ObjectWithRequiredField.Raw | null | undefined;
}

export const Response: core.serialization.Schema<
    serializers.endpoints.container.getAndReturnOptional.Response.Raw,
    Fiddle.types.ObjectWithRequiredField | undefined
> = ObjectWithRequiredField.optional();

export declare namespace Response {
    export type Raw = ObjectWithRequiredField.Raw | null | undefined;
}
