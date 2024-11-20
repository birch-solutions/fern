/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import * as serializers from "./serialization/index";
import * as errors from "./errors/index";
import * as SeedExamples from "./api/index";
import { File_ } from "./api/resources/file/client/Client";
import { Health } from "./api/resources/health/client/Client";
import { Service } from "./api/resources/service/client/Client";

export declare namespace SeedExamplesClient {
    interface Options {
        environment: core.Supplier<environments.SeedExamplesEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
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

export class SeedExamplesClient {
    constructor(protected readonly _options: SeedExamplesClient.Options) {}

    /**
     * @param {string} request
     * @param {SeedExamplesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.echo("Hello world!\\n\\nwith\\n\\tnewlines")
     */
    public echo(request: string, requestOptions?: SeedExamplesClient.RequestOptions): core.APIPromise<string> {
        return core.APIPromise.from(
            (async () => {
                const _response = await core.fetcher({
                    url: await core.Supplier.get(this._options.environment),
                    method: "POST",
                    headers: {
                        Authorization: await this._getAuthorizationHeader(),
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "@fern/examples",
                        "X-Fern-SDK-Version": "0.0.1",
                        "User-Agent": "@fern/examples/0.0.1",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...requestOptions?.headers,
                    },
                    contentType: "application/json",
                    requestType: "json",
                    body: serializers.echo.Request.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: serializers.echo.Response.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.SeedExamplesError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.SeedExamplesError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.SeedExamplesTimeoutError();
                    case "unknown":
                        throw new errors.SeedExamplesError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    /**
     * @param {SeedExamples.Type} request
     * @param {SeedExamplesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.createType("primitive")
     */
    public createType(
        request: SeedExamples.Type,
        requestOptions?: SeedExamplesClient.RequestOptions
    ): core.APIPromise<SeedExamples.Identifier> {
        return core.APIPromise.from(
            (async () => {
                const _response = await core.fetcher({
                    url: await core.Supplier.get(this._options.environment),
                    method: "POST",
                    headers: {
                        Authorization: await this._getAuthorizationHeader(),
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "@fern/examples",
                        "X-Fern-SDK-Version": "0.0.1",
                        "User-Agent": "@fern/examples/0.0.1",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...requestOptions?.headers,
                    },
                    contentType: "application/json",
                    requestType: "json",
                    body: serializers.Type.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: serializers.Identifier.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.SeedExamplesError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.SeedExamplesError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.SeedExamplesTimeoutError();
                    case "unknown":
                        throw new errors.SeedExamplesError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    protected _file: File_ | undefined;

    public get file(): File_ {
        return (this._file ??= new File_(this._options));
    }

    protected _health: Health | undefined;

    public get health(): Health {
        return (this._health ??= new Health(this._options));
    }

    protected _service: Service | undefined;

    public get service(): Service {
        return (this._service ??= new Service(this._options));
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
