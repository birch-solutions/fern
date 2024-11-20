/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SeedTrace from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Migration {
    interface Options {
        environment?: core.Supplier<environments.SeedTraceEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the X-Random-Header header */
        xRandomHeader?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-Random-Header header */
        xRandomHeader?: string | undefined;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Migration {
    constructor(protected readonly _options: Migration.Options = {}) {}

    /**
     * @param {SeedTrace.GetAttemptedMigrationsRequest} request
     * @param {Migration.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.migration.getAttemptedMigrations({
     *         adminKeyHeader: "admin-key-header"
     *     })
     */
    public getAttemptedMigrations(
        request: SeedTrace.GetAttemptedMigrationsRequest,
        requestOptions?: Migration.RequestOptions
    ): core.APIPromise<SeedTrace.Migration[]> {
        return core.APIPromise.from(
            (async () => {
                const { adminKeyHeader } = request;
                const _response = await core.fetcher({
                    url: urlJoin(
                        (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                        "/migration-info/all"
                    ),
                    method: "GET",
                    headers: {
                        Authorization: await this._getAuthorizationHeader(),
                        "X-Random-Header":
                            (await core.Supplier.get(this._options.xRandomHeader)) != null
                                ? await core.Supplier.get(this._options.xRandomHeader)
                                : undefined,
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "@fern/trace",
                        "X-Fern-SDK-Version": "0.0.1",
                        "User-Agent": "@fern/trace/0.0.1",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        "admin-key-header": adminKeyHeader,
                        ...requestOptions?.headers,
                    },
                    contentType: "application/json",
                    requestType: "json",
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: serializers.migration.getAttemptedMigrations.Response.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.SeedTraceError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.SeedTraceError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.SeedTraceTimeoutError();
                    case "unknown":
                        throw new errors.SeedTraceError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
