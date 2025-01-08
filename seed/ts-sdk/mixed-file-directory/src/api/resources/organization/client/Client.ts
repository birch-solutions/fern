/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core/index.js";
import * as SeedMixedFileDirectory from "../../../index.js";
import * as serializers from "../../../../serialization/index.js";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index.js";

export declare namespace Organization {
    export interface Options {
        environment: core.Supplier<string>;
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

export class Organization {
    constructor(protected readonly _options: Organization.Options) {}

    /**
     * Create a new organization.
     *
     * @param {SeedMixedFileDirectory.CreateOrganizationRequest} request
     * @param {Organization.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.organization.create({
     *         name: "name"
     *     })
     */
    public async create(
        request: SeedMixedFileDirectory.CreateOrganizationRequest,
        requestOptions?: Organization.RequestOptions,
    ): Promise<SeedMixedFileDirectory.Organization> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/organizations/"),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/mixed-file-directory",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/mixed-file-directory/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CreateOrganizationRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Organization.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedMixedFileDirectoryError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedMixedFileDirectoryError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedMixedFileDirectoryTimeoutError(
                    "Timeout exceeded when calling POST /organizations/.",
                );
            case "unknown":
                throw new errors.SeedMixedFileDirectoryError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
