/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SeedTrace from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Problem {
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

export class Problem {
    constructor(protected readonly _options: Problem.Options = {}) {}

    /**
     * Creates a problem
     *
     * @param {SeedTrace.CreateProblemRequest} request
     * @param {Problem.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.problem.createProblem({
     *         problemName: "problemName",
     *         problemDescription: {
     *             boards: [{
     *                     type: "html",
     *                     value: "boards"
     *                 }, {
     *                     type: "html",
     *                     value: "boards"
     *                 }]
     *         },
     *         files: {
     *             ["JAVA"]: {
     *                 solutionFile: {
     *                     filename: "filename",
     *                     contents: "contents"
     *                 },
     *                 readOnlyFiles: [{
     *                         filename: "filename",
     *                         contents: "contents"
     *                     }, {
     *                         filename: "filename",
     *                         contents: "contents"
     *                     }]
     *             }
     *         },
     *         inputParams: [{
     *                 variableType: {
     *                     type: "integerType"
     *                 },
     *                 name: "name"
     *             }, {
     *                 variableType: {
     *                     type: "integerType"
     *                 },
     *                 name: "name"
     *             }],
     *         outputType: {
     *             type: "integerType"
     *         },
     *         testcases: [{
     *                 testCase: {
     *                     id: "id",
     *                     params: [{
     *                             type: "integerValue",
     *                             value: 1
     *                         }, {
     *                             type: "integerValue",
     *                             value: 1
     *                         }]
     *                 },
     *                 expectedResult: {
     *                     type: "integerValue",
     *                     value: 1
     *                 }
     *             }, {
     *                 testCase: {
     *                     id: "id",
     *                     params: [{
     *                             type: "integerValue",
     *                             value: 1
     *                         }, {
     *                             type: "integerValue",
     *                             value: 1
     *                         }]
     *                 },
     *                 expectedResult: {
     *                     type: "integerValue",
     *                     value: 1
     *                 }
     *             }],
     *         methodName: "methodName"
     *     })
     */
    public async createProblem(
        request: SeedTrace.CreateProblemRequest,
        requestOptions?: Problem.RequestOptions
    ): Promise<SeedTrace.CreateProblemResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                "/problem-crud/create"
            ),
            method: "POST",
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
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as SeedTrace.CreateProblemResponse;
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
                throw new errors.SeedTraceTimeoutError("Timeout exceeded when calling POST /problem-crud/create.");
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates a problem
     *
     * @param {SeedTrace.ProblemId} problemId
     * @param {SeedTrace.CreateProblemRequest} request
     * @param {Problem.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.problem.updateProblem("problemId", {
     *         problemName: "problemName",
     *         problemDescription: {
     *             boards: [{
     *                     type: "html",
     *                     value: "boards"
     *                 }, {
     *                     type: "html",
     *                     value: "boards"
     *                 }]
     *         },
     *         files: {
     *             ["JAVA"]: {
     *                 solutionFile: {
     *                     filename: "filename",
     *                     contents: "contents"
     *                 },
     *                 readOnlyFiles: [{
     *                         filename: "filename",
     *                         contents: "contents"
     *                     }, {
     *                         filename: "filename",
     *                         contents: "contents"
     *                     }]
     *             }
     *         },
     *         inputParams: [{
     *                 variableType: {
     *                     type: "integerType"
     *                 },
     *                 name: "name"
     *             }, {
     *                 variableType: {
     *                     type: "integerType"
     *                 },
     *                 name: "name"
     *             }],
     *         outputType: {
     *             type: "integerType"
     *         },
     *         testcases: [{
     *                 testCase: {
     *                     id: "id",
     *                     params: [{
     *                             type: "integerValue",
     *                             value: 1
     *                         }, {
     *                             type: "integerValue",
     *                             value: 1
     *                         }]
     *                 },
     *                 expectedResult: {
     *                     type: "integerValue",
     *                     value: 1
     *                 }
     *             }, {
     *                 testCase: {
     *                     id: "id",
     *                     params: [{
     *                             type: "integerValue",
     *                             value: 1
     *                         }, {
     *                             type: "integerValue",
     *                             value: 1
     *                         }]
     *                 },
     *                 expectedResult: {
     *                     type: "integerValue",
     *                     value: 1
     *                 }
     *             }],
     *         methodName: "methodName"
     *     })
     */
    public async updateProblem(
        problemId: SeedTrace.ProblemId,
        request: SeedTrace.CreateProblemRequest,
        requestOptions?: Problem.RequestOptions
    ): Promise<SeedTrace.UpdateProblemResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/problem-crud/update/${encodeURIComponent(problemId)}`
            ),
            method: "POST",
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
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as SeedTrace.UpdateProblemResponse;
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
                throw new errors.SeedTraceTimeoutError(
                    "Timeout exceeded when calling POST /problem-crud/update/{problemId}."
                );
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Soft deletes a problem
     *
     * @param {SeedTrace.ProblemId} problemId
     * @param {Problem.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.problem.deleteProblem("problemId")
     */
    public async deleteProblem(problemId: SeedTrace.ProblemId, requestOptions?: Problem.RequestOptions): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/problem-crud/delete/${encodeURIComponent(problemId)}`
            ),
            method: "DELETE",
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
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
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
                throw new errors.SeedTraceTimeoutError(
                    "Timeout exceeded when calling DELETE /problem-crud/delete/{problemId}."
                );
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns default starter files for problem
     *
     * @param {SeedTrace.GetDefaultStarterFilesRequest} request
     * @param {Problem.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.problem.getDefaultStarterFiles({
     *         inputParams: [{
     *                 variableType: {
     *                     type: "integerType"
     *                 },
     *                 name: "name"
     *             }, {
     *                 variableType: {
     *                     type: "integerType"
     *                 },
     *                 name: "name"
     *             }],
     *         outputType: {
     *             type: "integerType"
     *         },
     *         methodName: "methodName"
     *     })
     */
    public async getDefaultStarterFiles(
        request: SeedTrace.GetDefaultStarterFilesRequest,
        requestOptions?: Problem.RequestOptions
    ): Promise<SeedTrace.GetDefaultStarterFilesResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                "/problem-crud/default-starter-files"
            ),
            method: "POST",
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
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as SeedTrace.GetDefaultStarterFilesResponse;
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
                throw new errors.SeedTraceTimeoutError(
                    "Timeout exceeded when calling POST /problem-crud/default-starter-files."
                );
            case "unknown":
                throw new errors.SeedTraceError({
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
