/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const HttpService: core.serialization.ObjectSchema<serializers.HttpService.Raw, FernIr.HttpService> =
    core.serialization.objectWithoutOptionalProperties({
        availability: core.serialization.lazyObject(async () => (await import("../../..")).Availability).optional(),
        name: core.serialization.lazyObject(async () => (await import("../../..")).DeclaredServiceName),
        displayName: core.serialization.string().optional(),
        basePath: core.serialization.lazyObject(async () => (await import("../../..")).HttpPath),
        endpoints: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).HttpEndpoint)
        ),
        headers: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).HttpHeader)
        ),
        pathParameters: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).PathParameter)
        ),
    });

export declare namespace HttpService {
    interface Raw {
        availability?: serializers.Availability.Raw | null;
        name: serializers.DeclaredServiceName.Raw;
        displayName?: string | null;
        basePath: serializers.HttpPath.Raw;
        endpoints: serializers.HttpEndpoint.Raw[];
        headers: serializers.HttpHeader.Raw[];
        pathParameters: serializers.PathParameter.Raw[];
    }
}
