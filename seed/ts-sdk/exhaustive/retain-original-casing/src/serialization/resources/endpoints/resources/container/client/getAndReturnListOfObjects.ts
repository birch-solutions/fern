/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as SeedExhaustive from "../../../../../../api";
import * as core from "../../../../../../core";
import { ObjectWithRequiredField } from "../../../../types/resources/object/types/ObjectWithRequiredField";

export const Request: core.serialization.Schema<
    serializers.endpoints.container.getAndReturnListOfObjects.Request.Raw,
    SeedExhaustive.types.ObjectWithRequiredField[]
> = core.serialization.list(ObjectWithRequiredField);

export declare namespace Request {
    type Raw = ObjectWithRequiredField.Raw[];
}

export const Response: core.serialization.Schema<
    serializers.endpoints.container.getAndReturnListOfObjects.Response.Raw,
    SeedExhaustive.types.ObjectWithRequiredField[]
> = core.serialization.list(ObjectWithRequiredField);

export declare namespace Response {
    type Raw = ObjectWithRequiredField.Raw[];
}
