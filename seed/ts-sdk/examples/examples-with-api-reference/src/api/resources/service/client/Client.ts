/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SeedExamples from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Service {
    interface Options {
        environment: core.Supplier<environments.SeedExamplesEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
        abortSignal?: AbortSignal;
    }
}

export class Service {
    constructor(protected readonly _options: Service.Options) {}

    /**
     * @param {SeedExamples.MovieId} movieId
     * @param {Service.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await seedExamples.service.getMovie("movie-c06a4ad7")
     */
    public async getMovie(
        movieId: SeedExamples.MovieId,
        requestOptions?: Service.RequestOptions
    ): Promise<SeedExamples.Movie> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `/movie/${encodeURIComponent(await serializers.MovieId.jsonOrThrow(movieId))}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/examples",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.Movie.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
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
    }

    /**
     * @param {SeedExamples.Movie} request
     * @param {Service.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await seedExamples.service.createMovie({
     *         id: "movie-c06a4ad7",
     *         prequel: "movie-cv9b914f",
     *         title: "The Boy and the Heron",
     *         from: "Hayao Miyazaki",
     *         rating: 8,
     *         type: "movie",
     *         tag: "tag-wf9as23d",
     *         metadata: {
     *             "actors": [
     *                 "Christian Bale",
     *                 "Florence Pugh",
     *                 "Willem Dafoe"
     *             ],
     *             "releaseDate": "2023-12-08",
     *             "ratings": {
     *                 "rottenTomatoes": 97,
     *                 "imdb": 7.6
     *             }
     *         }
     *     })
     */
    public async createMovie(
        request: SeedExamples.Movie,
        requestOptions?: Service.RequestOptions
    ): Promise<SeedExamples.MovieId> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/movie"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/examples",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.Movie.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.MovieId.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
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
    }

    /**
     * @param {SeedExamples.GetMetadataRequest} request
     * @param {Service.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await seedExamples.service.getMetadata({
     *         xApiVersion: "0.0.1",
     *         shallow: false,
     *         tag: "development"
     *     })
     */
    public async getMetadata(
        request: SeedExamples.GetMetadataRequest,
        requestOptions?: Service.RequestOptions
    ): Promise<SeedExamples.Metadata> {
        const { shallow, tag, xApiVersion } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (shallow != null) {
            _queryParams["shallow"] = shallow.toString();
        }

        if (tag != null) {
            if (Array.isArray(tag)) {
                _queryParams["tag"] = tag.map((item) => item);
            } else {
                _queryParams["tag"] = tag;
            }
        }

        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/metadata"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/examples",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "X-API-Version": xApiVersion,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.Metadata.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
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
    }

    /**
     * @param {Service.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await seedExamples.service.getResponse()
     */
    public async getResponse(requestOptions?: Service.RequestOptions): Promise<SeedExamples.Response> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/response"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/examples",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
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
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
