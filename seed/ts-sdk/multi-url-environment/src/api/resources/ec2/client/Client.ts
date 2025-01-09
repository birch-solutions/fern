/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SeedMultiUrlEnvironment from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Ec2 {
    export interface Options {
        environment?: core.Supplier<
            environments.SeedMultiUrlEnvironmentEnvironment | environments.SeedMultiUrlEnvironmentEnvironmentUrls
        >;
        token: core.Supplier<core.BearerToken>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Ec2 {
    constructor(protected readonly _options: Ec2.Options) {}

    /**
     * @param {SeedMultiUrlEnvironment.BootInstanceRequest} request
     * @param {Ec2.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.ec2.bootInstance({
     *         size: "size"
     *     })
     */
    public async bootInstance(
        request: SeedMultiUrlEnvironment.BootInstanceRequest,
        requestOptions?: Ec2.RequestOptions,
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SeedMultiUrlEnvironmentEnvironment.Production
                ).ec2,
                "/ec2/boot",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/multi-url-environment",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/multi-url-environment/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.BootInstanceRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedMultiUrlEnvironmentError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedMultiUrlEnvironmentError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedMultiUrlEnvironmentTimeoutError("Timeout exceeded when calling POST /ec2/boot.");
            case "unknown":
                throw new errors.SeedMultiUrlEnvironmentError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
