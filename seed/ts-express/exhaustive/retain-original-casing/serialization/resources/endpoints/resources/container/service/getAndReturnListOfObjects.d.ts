/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../..";
import * as SeedExhaustive from "../../../../../../api";
import * as core from "../../../../../../core";
export declare const Request: core.serialization.Schema<serializers.endpoints.container.getAndReturnListOfObjects.Request.Raw, SeedExhaustive.types.ObjectWithRequiredField[]>;
export declare namespace Request {
    type Raw = serializers.types.ObjectWithRequiredField.Raw[];
}
export declare const Response: core.serialization.Schema<serializers.endpoints.container.getAndReturnListOfObjects.Response.Raw, SeedExhaustive.types.ObjectWithRequiredField[]>;
export declare namespace Response {
    type Raw = serializers.types.ObjectWithRequiredField.Raw[];
}
