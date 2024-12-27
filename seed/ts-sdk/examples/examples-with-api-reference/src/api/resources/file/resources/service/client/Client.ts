/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as SeedExamples from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export declare namespace Service {
    export interface Options {
        environment: core.Supplier<environments.SeedExamplesEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
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

export class Service {
    constructor(protected readonly _options: Service.Options) {}

    /**
     * This endpoint returns a file by its name.
     *
     * @param {string} filename - This is a filename
     * @param {SeedExamples.file.GetFileRequest} request
     * @param {Service.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SeedExamples.NotFoundError}
     *
     * @example
     *     await client.file.service.getFile("file.txt", {
     *         xFileApiVersion: "0.0.2"
     *     })
     */
    public async getFile(
        filename: string,
        request: SeedExamples.file.GetFileRequest,
        requestOptions?: Service.RequestOptions,
    ): Promise<SeedExamples.File_> {
        const { xFileApiVersion } = request;
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), `/file/${encodeURIComponent(filename)}`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/examples",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/examples/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "X-File-API-Version": xFileApiVersion,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.File_.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new SeedExamples.NotFoundError(
                        serializers.NotFoundError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.SeedExamplesError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedExamplesError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedExamplesTimeoutError("Timeout exceeded when calling GET /file/{filename}.");
            case "unknown":
                throw new errors.SeedExamplesError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
