/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../../../core";
import * as Fiddle from "../../../../..";
import * as serializers from "../../../../../../serialization";
import urlJoin from "url-join";

export declare namespace Container {
    interface Options {
        environment: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Container {
    constructor(protected readonly _options: Container.Options) {}

    public async getAndReturnListOfPrimitives(
        request: string[],
        requestOptions?: Container.RequestOptions
    ): Promise<core.APIResponse<string[], Fiddle.endpoints.container.getAndReturnListOfPrimitives.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/container/list-of-primitives"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.endpoints.container.getAndReturnListOfPrimitives.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.endpoints.container.getAndReturnListOfPrimitives.Response.parseOrThrow(
                    _response.body,
                    {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        breadcrumbsPrefix: ["response"],
                    }
                ),
            };
        }

        return {
            ok: false,
            error: Fiddle.endpoints.container.getAndReturnListOfPrimitives.Error._unknown(_response.error),
        };
    }

    public async getAndReturnListOfObjects(
        request: Fiddle.types.ObjectWithRequiredField[],
        requestOptions?: Container.RequestOptions
    ): Promise<
        core.APIResponse<
            Fiddle.types.ObjectWithRequiredField[],
            Fiddle.endpoints.container.getAndReturnListOfObjects.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/container/list-of-objects"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.endpoints.container.getAndReturnListOfObjects.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.endpoints.container.getAndReturnListOfObjects.Response.parseOrThrow(
                    _response.body,
                    {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        breadcrumbsPrefix: ["response"],
                    }
                ),
            };
        }

        return {
            ok: false,
            error: Fiddle.endpoints.container.getAndReturnListOfObjects.Error._unknown(_response.error),
        };
    }

    public async getAndReturnSetOfPrimitives(
        request: Set<string>,
        requestOptions?: Container.RequestOptions
    ): Promise<core.APIResponse<Set<string>, Fiddle.endpoints.container.getAndReturnSetOfPrimitives.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/container/set-of-primitives"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.endpoints.container.getAndReturnSetOfPrimitives.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.endpoints.container.getAndReturnSetOfPrimitives.Response.parseOrThrow(
                    _response.body,
                    {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        breadcrumbsPrefix: ["response"],
                    }
                ),
            };
        }

        return {
            ok: false,
            error: Fiddle.endpoints.container.getAndReturnSetOfPrimitives.Error._unknown(_response.error),
        };
    }

    public async getAndReturnSetOfObjects(
        request: Fiddle.types.ObjectWithRequiredField[],
        requestOptions?: Container.RequestOptions
    ): Promise<
        core.APIResponse<
            Fiddle.types.ObjectWithRequiredField[],
            Fiddle.endpoints.container.getAndReturnSetOfObjects.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/container/set-of-objects"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.endpoints.container.getAndReturnSetOfObjects.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.endpoints.container.getAndReturnSetOfObjects.Response.parseOrThrow(
                    _response.body,
                    {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        breadcrumbsPrefix: ["response"],
                    }
                ),
            };
        }

        return {
            ok: false,
            error: Fiddle.endpoints.container.getAndReturnSetOfObjects.Error._unknown(_response.error),
        };
    }

    public async getAndReturnMapPrimToPrim(
        request: Record<string, string>,
        requestOptions?: Container.RequestOptions
    ): Promise<core.APIResponse<Record<string, string>, Fiddle.endpoints.container.getAndReturnMapPrimToPrim.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/container/map-prim-to-prim"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.endpoints.container.getAndReturnMapPrimToPrim.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.endpoints.container.getAndReturnMapPrimToPrim.Response.parseOrThrow(
                    _response.body,
                    {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        breadcrumbsPrefix: ["response"],
                    }
                ),
            };
        }

        return {
            ok: false,
            error: Fiddle.endpoints.container.getAndReturnMapPrimToPrim.Error._unknown(_response.error),
        };
    }

    public async getAndReturnMapOfPrimToObject(
        request: Record<string, Fiddle.types.ObjectWithRequiredField>,
        requestOptions?: Container.RequestOptions
    ): Promise<
        core.APIResponse<
            Record<string, Fiddle.types.ObjectWithRequiredField>,
            Fiddle.endpoints.container.getAndReturnMapOfPrimToObject.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/container/map-prim-to-object"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.endpoints.container.getAndReturnMapOfPrimToObject.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.endpoints.container.getAndReturnMapOfPrimToObject.Response.parseOrThrow(
                    _response.body,
                    {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                        breadcrumbsPrefix: ["response"],
                    }
                ),
            };
        }

        return {
            ok: false,
            error: Fiddle.endpoints.container.getAndReturnMapOfPrimToObject.Error._unknown(_response.error),
        };
    }

    public async getAndReturnOptional(
        request?: Fiddle.types.ObjectWithRequiredField,
        requestOptions?: Container.RequestOptions
    ): Promise<
        core.APIResponse<
            Fiddle.types.ObjectWithRequiredField | undefined,
            Fiddle.endpoints.container.getAndReturnOptional.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/container/opt-objects"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/exhaustive",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body:
                request != null
                    ? await serializers.endpoints.container.getAndReturnOptional.Request.jsonOrThrow(request, {
                          unrecognizedObjectKeys: "strip",
                      })
                    : undefined,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.endpoints.container.getAndReturnOptional.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: Fiddle.endpoints.container.getAndReturnOptional.Error._unknown(_response.error),
        };
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
