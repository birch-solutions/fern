/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SeedTrace from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace Problem {
    interface Options {
        environment?: core.Supplier<environments.SeedTraceEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        xRandomHeader?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
        abortSignal?: AbortSignal;
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
     *         problemName: "string",
     *         problemDescription: {
     *             boards: [SeedTrace.ProblemDescriptionBoard.html("string")]
     *         },
     *         files: {
     *             [SeedTrace.Language.Java]: {
     *                 solutionFile: {
     *                     filename: "string",
     *                     contents: "string"
     *                 },
     *                 readOnlyFiles: [{
     *                         filename: "string",
     *                         contents: "string"
     *                     }]
     *             }
     *         },
     *         inputParams: [{
     *                 variableType: SeedTrace.VariableType.integerType(),
     *                 name: "string"
     *             }],
     *         outputType: SeedTrace.VariableType.integerType(),
     *         testcases: [{
     *                 testCase: {
     *                     id: "string",
     *                     params: [SeedTrace.VariableValue.integerValue(1)]
     *                 },
     *                 expectedResult: SeedTrace.VariableValue.integerValue(1)
     *             }],
     *         methodName: "string"
     *     })
     */
    public async createProblem(
        request: SeedTrace.CreateProblemRequest,
        requestOptions?: Problem.RequestOptions
    ): Promise<core.APIResponse<SeedTrace.CreateProblemResponse, SeedTrace.problem.createProblem.Error>> {
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
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.CreateProblemRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            withCredentials: true,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.CreateProblemResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: SeedTrace.problem.createProblem.Error._unknown(_response.error),
        };
    }

    /**
     * Updates a problem
     *
     * @param {SeedTrace.ProblemId} problemId
     * @param {SeedTrace.CreateProblemRequest} request
     * @param {Problem.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.problem.updateProblem(SeedTrace.ProblemId("string"), {
     *         problemName: "string",
     *         problemDescription: {
     *             boards: [SeedTrace.ProblemDescriptionBoard.html("string")]
     *         },
     *         files: {
     *             [SeedTrace.Language.Java]: {
     *                 solutionFile: {
     *                     filename: "string",
     *                     contents: "string"
     *                 },
     *                 readOnlyFiles: [{
     *                         filename: "string",
     *                         contents: "string"
     *                     }]
     *             }
     *         },
     *         inputParams: [{
     *                 variableType: SeedTrace.VariableType.integerType(),
     *                 name: "string"
     *             }],
     *         outputType: SeedTrace.VariableType.integerType(),
     *         testcases: [{
     *                 testCase: {
     *                     id: "string",
     *                     params: [SeedTrace.VariableValue.integerValue(1)]
     *                 },
     *                 expectedResult: SeedTrace.VariableValue.integerValue(1)
     *             }],
     *         methodName: "string"
     *     })
     */
    public async updateProblem(
        problemId: SeedTrace.ProblemId,
        request: SeedTrace.CreateProblemRequest,
        requestOptions?: Problem.RequestOptions
    ): Promise<core.APIResponse<SeedTrace.UpdateProblemResponse, SeedTrace.problem.updateProblem.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/problem-crud/update/${encodeURIComponent(await serializers.ProblemId.jsonOrThrow(problemId))}`
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
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.CreateProblemRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            withCredentials: true,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.UpdateProblemResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: SeedTrace.problem.updateProblem.Error._unknown(_response.error),
        };
    }

    /**
     * Soft deletes a problem
     *
     * @param {SeedTrace.ProblemId} problemId
     * @param {Problem.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.problem.deleteProblem(SeedTrace.ProblemId("string"))
     */
    public async deleteProblem(
        problemId: SeedTrace.ProblemId,
        requestOptions?: Problem.RequestOptions
    ): Promise<core.APIResponse<void, SeedTrace.problem.deleteProblem.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/problem-crud/delete/${encodeURIComponent(await serializers.ProblemId.jsonOrThrow(problemId))}`
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
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            withCredentials: true,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: undefined,
            };
        }

        return {
            ok: false,
            error: SeedTrace.problem.deleteProblem.Error._unknown(_response.error),
        };
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
     *                 variableType: SeedTrace.VariableType.integerType(),
     *                 name: "string"
     *             }],
     *         outputType: SeedTrace.VariableType.integerType(),
     *         methodName: "string"
     *     })
     */
    public async getDefaultStarterFiles(
        request: SeedTrace.GetDefaultStarterFilesRequest,
        requestOptions?: Problem.RequestOptions
    ): Promise<
        core.APIResponse<SeedTrace.GetDefaultStarterFilesResponse, SeedTrace.problem.getDefaultStarterFiles.Error>
    > {
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
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.GetDefaultStarterFilesRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            withCredentials: true,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.GetDefaultStarterFilesResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: SeedTrace.problem.getDefaultStarterFiles.Error._unknown(_response.error),
        };
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
