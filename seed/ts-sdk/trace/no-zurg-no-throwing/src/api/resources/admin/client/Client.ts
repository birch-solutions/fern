/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SeedTrace from "../../../index";
import urlJoin from "url-join";

export declare namespace Admin {
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
    }
}

export class Admin {
    constructor(protected readonly _options: Admin.Options = {}) {}

    /**
     * @param {SeedTrace.SubmissionId} submissionId
     * @param {SeedTrace.TestSubmissionStatus} request
     * @param {Admin.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.admin.updateTestSubmissionStatus("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         type: "stopped"
     *     })
     */
    public async updateTestSubmissionStatus(
        submissionId: SeedTrace.SubmissionId,
        request: SeedTrace.TestSubmissionStatus,
        requestOptions?: Admin.RequestOptions
    ): Promise<core.APIResponse<void, SeedTrace.admin.updateTestSubmissionStatus.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/admin/store-test-submission-status/${encodeURIComponent(submissionId)}`
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
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
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
            error: SeedTrace.admin.updateTestSubmissionStatus.Error._unknown(_response.error),
        };
    }

    /**
     * @param {SeedTrace.SubmissionId} submissionId
     * @param {SeedTrace.TestSubmissionUpdate} request
     * @param {Admin.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.admin.sendTestSubmissionUpdate("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         updateTime: "2024-01-15T09:30:00Z",
     *         updateInfo: {
     *             type: "running",
     *             value: SeedTrace.RunningSubmissionState.QueueingSubmission
     *         }
     *     })
     */
    public async sendTestSubmissionUpdate(
        submissionId: SeedTrace.SubmissionId,
        request: SeedTrace.TestSubmissionUpdate,
        requestOptions?: Admin.RequestOptions
    ): Promise<core.APIResponse<void, SeedTrace.admin.sendTestSubmissionUpdate.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/admin/store-test-submission-status-v2/${encodeURIComponent(submissionId)}`
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
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
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
            error: SeedTrace.admin.sendTestSubmissionUpdate.Error._unknown(_response.error),
        };
    }

    /**
     * @param {SeedTrace.SubmissionId} submissionId
     * @param {SeedTrace.WorkspaceSubmissionStatus} request
     * @param {Admin.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.admin.updateWorkspaceSubmissionStatus("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         type: "stopped"
     *     })
     */
    public async updateWorkspaceSubmissionStatus(
        submissionId: SeedTrace.SubmissionId,
        request: SeedTrace.WorkspaceSubmissionStatus,
        requestOptions?: Admin.RequestOptions
    ): Promise<core.APIResponse<void, SeedTrace.admin.updateWorkspaceSubmissionStatus.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/admin/store-workspace-submission-status/${encodeURIComponent(submissionId)}`
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
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
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
            error: SeedTrace.admin.updateWorkspaceSubmissionStatus.Error._unknown(_response.error),
        };
    }

    /**
     * @param {SeedTrace.SubmissionId} submissionId
     * @param {SeedTrace.WorkspaceSubmissionUpdate} request
     * @param {Admin.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.admin.sendWorkspaceSubmissionUpdate("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         updateTime: "2024-01-15T09:30:00Z",
     *         updateInfo: {
     *             type: "running",
     *             value: SeedTrace.RunningSubmissionState.QueueingSubmission
     *         }
     *     })
     */
    public async sendWorkspaceSubmissionUpdate(
        submissionId: SeedTrace.SubmissionId,
        request: SeedTrace.WorkspaceSubmissionUpdate,
        requestOptions?: Admin.RequestOptions
    ): Promise<core.APIResponse<void, SeedTrace.admin.sendWorkspaceSubmissionUpdate.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/admin/store-workspace-submission-status-v2/${encodeURIComponent(submissionId)}`
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
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
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
            error: SeedTrace.admin.sendWorkspaceSubmissionUpdate.Error._unknown(_response.error),
        };
    }

    /**
     * @param {SeedTrace.SubmissionId} submissionId
     * @param {string} testCaseId
     * @param {SeedTrace.StoreTracedTestCaseRequest} request
     * @param {Admin.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.admin.storeTracedTestCase("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", "string", {
     *         result: {
     *             result: {
     *                 expectedResult: {
     *                     type: "integerValue",
     *                     value: 1
     *                 },
     *                 actualResult: {
     *                     type: "value",
     *                     value: {
     *                         type: "integerValue",
     *                         value: {
     *                             "key": "value"
     *                         }
     *                     }
     *                 },
     *                 passed: true
     *             },
     *             stdout: "string"
     *         },
     *         traceResponses: [{
     *                 submissionId: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
     *                 lineNumber: 1,
     *                 returnValue: {
     *                     type: "integerValue",
     *                     value: 1
     *                 },
     *                 expressionLocation: {
     *                     start: 1,
     *                     offset: 1
     *                 },
     *                 stack: {
     *                     numStackFrames: 1,
     *                     topStackFrame: {
     *                         methodName: "string",
     *                         lineNumber: 1,
     *                         scopes: [{
     *                                 variables: {
     *                                     "string": {
     *                                         "key": "value"
     *                                     }
     *                                 }
     *                             }]
     *                     }
     *                 },
     *                 stdout: "string"
     *             }]
     *     })
     */
    public async storeTracedTestCase(
        submissionId: SeedTrace.SubmissionId,
        testCaseId: string,
        request: SeedTrace.StoreTracedTestCaseRequest,
        requestOptions?: Admin.RequestOptions
    ): Promise<core.APIResponse<void, SeedTrace.admin.storeTracedTestCase.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/admin/store-test-trace/submission/${encodeURIComponent(submissionId)}/testCase/${encodeURIComponent(
                    testCaseId
                )}`
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
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
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
            error: SeedTrace.admin.storeTracedTestCase.Error._unknown(_response.error),
        };
    }

    /**
     * @param {SeedTrace.SubmissionId} submissionId
     * @param {SeedTrace.v2.TestCaseId} testCaseId
     * @param {SeedTrace.TraceResponseV2[]} request
     * @param {Admin.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.admin.storeTracedTestCaseV2("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", "string", [{
     *             submissionId: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
     *             lineNumber: 1,
     *             file: {
     *                 filename: "string",
     *                 directory: "string"
     *             },
     *             returnValue: {
     *                 type: "integerValue",
     *                 value: 1
     *             },
     *             expressionLocation: {
     *                 start: 1,
     *                 offset: 1
     *             },
     *             stack: {
     *                 numStackFrames: 1,
     *                 topStackFrame: {
     *                     methodName: "string",
     *                     lineNumber: 1,
     *                     scopes: [{
     *                             variables: {
     *                                 "string": {
     *                                     "key": "value"
     *                                 }
     *                             }
     *                         }]
     *                 }
     *             },
     *             stdout: "string"
     *         }])
     */
    public async storeTracedTestCaseV2(
        submissionId: SeedTrace.SubmissionId,
        testCaseId: SeedTrace.v2.TestCaseId,
        request: SeedTrace.TraceResponseV2[],
        requestOptions?: Admin.RequestOptions
    ): Promise<core.APIResponse<void, SeedTrace.admin.storeTracedTestCaseV2.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/admin/store-test-trace-v2/submission/${encodeURIComponent(
                    submissionId
                )}/testCase/${encodeURIComponent(testCaseId)}`
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
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
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
            error: SeedTrace.admin.storeTracedTestCaseV2.Error._unknown(_response.error),
        };
    }

    /**
     * @param {SeedTrace.SubmissionId} submissionId
     * @param {SeedTrace.StoreTracedWorkspaceRequest} request
     * @param {Admin.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.admin.storeTracedWorkspace("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         workspaceRunDetails: {
     *             exceptionV2: {
     *                 type: "generic",
     *                 exceptionType: "string",
     *                 exceptionMessage: "string",
     *                 exceptionStacktrace: "string"
     *             },
     *             exception: {
     *                 exceptionType: "string",
     *                 exceptionMessage: "string",
     *                 exceptionStacktrace: "string"
     *             },
     *             stdout: "string"
     *         },
     *         traceResponses: [{
     *                 submissionId: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
     *                 lineNumber: 1,
     *                 returnValue: {
     *                     type: "integerValue",
     *                     value: 1
     *                 },
     *                 expressionLocation: {
     *                     start: 1,
     *                     offset: 1
     *                 },
     *                 stack: {
     *                     numStackFrames: 1,
     *                     topStackFrame: {
     *                         methodName: "string",
     *                         lineNumber: 1,
     *                         scopes: [{
     *                                 variables: {
     *                                     "string": {
     *                                         "key": "value"
     *                                     }
     *                                 }
     *                             }]
     *                     }
     *                 },
     *                 stdout: "string"
     *             }]
     *     })
     */
    public async storeTracedWorkspace(
        submissionId: SeedTrace.SubmissionId,
        request: SeedTrace.StoreTracedWorkspaceRequest,
        requestOptions?: Admin.RequestOptions
    ): Promise<core.APIResponse<void, SeedTrace.admin.storeTracedWorkspace.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/admin/store-workspace-trace/submission/${encodeURIComponent(submissionId)}`
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
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
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
            error: SeedTrace.admin.storeTracedWorkspace.Error._unknown(_response.error),
        };
    }

    /**
     * @param {SeedTrace.SubmissionId} submissionId
     * @param {SeedTrace.TraceResponseV2[]} request
     * @param {Admin.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.admin.storeTracedWorkspaceV2("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", [{
     *             submissionId: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
     *             lineNumber: 1,
     *             file: {
     *                 filename: "string",
     *                 directory: "string"
     *             },
     *             returnValue: {
     *                 type: "integerValue",
     *                 value: 1
     *             },
     *             expressionLocation: {
     *                 start: 1,
     *                 offset: 1
     *             },
     *             stack: {
     *                 numStackFrames: 1,
     *                 topStackFrame: {
     *                     methodName: "string",
     *                     lineNumber: 1,
     *                     scopes: [{
     *                             variables: {
     *                                 "string": {
     *                                     "key": "value"
     *                                 }
     *                             }
     *                         }]
     *                 }
     *             },
     *             stdout: "string"
     *         }])
     */
    public async storeTracedWorkspaceV2(
        submissionId: SeedTrace.SubmissionId,
        request: SeedTrace.TraceResponseV2[],
        requestOptions?: Admin.RequestOptions
    ): Promise<core.APIResponse<void, SeedTrace.admin.storeTracedWorkspaceV2.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/admin/store-workspace-trace-v2/submission/${encodeURIComponent(submissionId)}`
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
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
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
            error: SeedTrace.admin.storeTracedWorkspaceV2.Error._unknown(_response.error),
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
