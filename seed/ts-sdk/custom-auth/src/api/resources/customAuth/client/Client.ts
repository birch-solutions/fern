/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedCustomAuth from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace CustomAuth {
    interface Options {
        environment: core.Supplier<string>;
        customAuthScheme: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class CustomAuth {
    constructor(protected readonly _options: CustomAuth.Options) {}

    /**
     * GET request with custom auth scheme
     * @throws {@link SeedCustomAuth.UnauthorizedRequest}
     */
    public async getWithCustomAuth(requestOptions?: CustomAuth.RequestOptions): Promise<boolean> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "custom-auth"),
            method: "GET",
            headers: {
                "X-API-KEY": await core.Supplier.get(this._options.customAuthScheme),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.customAuth.getWithCustomAuth.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new SeedCustomAuth.UnauthorizedRequest(
                        await serializers.UnauthorizedRequestErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SeedCustomAuthError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedCustomAuthError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedCustomAuthTimeoutError();
            case "unknown":
                throw new errors.SeedCustomAuthError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * POST request with custom auth scheme
     * @throws {@link SeedCustomAuth.UnauthorizedRequest}
     * @throws {@link SeedCustomAuth.BadRequest}
     */
    public async postWithCustomAuth(request?: unknown, requestOptions?: CustomAuth.RequestOptions): Promise<boolean> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "custom-auth"),
            method: "POST",
            headers: {
                "X-API-KEY": await core.Supplier.get(this._options.customAuthScheme),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.customAuth.postWithCustomAuth.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new SeedCustomAuth.UnauthorizedRequest(
                        await serializers.UnauthorizedRequestErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 400:
                    throw new SeedCustomAuth.BadRequest();
                default:
                    throw new errors.SeedCustomAuthError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedCustomAuthError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedCustomAuthTimeoutError();
            case "unknown":
                throw new errors.SeedCustomAuthError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
