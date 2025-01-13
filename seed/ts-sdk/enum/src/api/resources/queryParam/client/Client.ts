/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedEnum from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace QueryParam {
    export interface Options {
        environment: core.Supplier<string>;
        baseUrl?: core.Supplier<string>;
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

export class QueryParam {
    constructor(protected readonly _options: QueryParam.Options) {}

    /**
     * @param {SeedEnum.SendEnumAsQueryParamRequest} request
     * @param {QueryParam.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.queryParam.send({
     *         operand: ">",
     *         operandOrColor: "red"
     *     })
     */
    public async send(
        request: SeedEnum.SendEnumAsQueryParamRequest,
        requestOptions?: QueryParam.RequestOptions,
    ): Promise<void> {
        const { operand, maybeOperand, operandOrColor, maybeOperandOrColor } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["operand"] = operand;
        if (maybeOperand != null) {
            _queryParams["maybeOperand"] = maybeOperand;
        }

        _queryParams["operandOrColor"] =
            typeof operandOrColor === "string" ? operandOrColor : JSON.stringify(operandOrColor);
        if (maybeOperandOrColor != null) {
            _queryParams["maybeOperandOrColor"] =
                typeof maybeOperandOrColor === "string" ? maybeOperandOrColor : JSON.stringify(maybeOperandOrColor);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ?? null,
                await core.Supplier.get(this._options.environment),
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/enum",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/enum/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedEnumError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedEnumError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedEnumTimeoutError("Timeout exceeded when calling POST /query.");
            case "unknown":
                throw new errors.SeedEnumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {SeedEnum.SendEnumListAsQueryParamRequest} request
     * @param {QueryParam.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.queryParam.sendList({
     *         operand: ">",
     *         maybeOperand: ">",
     *         operandOrColor: "red",
     *         maybeOperandOrColor: undefined
     *     })
     */
    public async sendList(
        request: SeedEnum.SendEnumListAsQueryParamRequest,
        requestOptions?: QueryParam.RequestOptions,
    ): Promise<void> {
        const { operand, maybeOperand, operandOrColor, maybeOperandOrColor } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (Array.isArray(operand)) {
            _queryParams["operand"] = operand.map((item) => item);
        } else {
            _queryParams["operand"] = operand;
        }

        if (maybeOperand != null) {
            if (Array.isArray(maybeOperand)) {
                _queryParams["maybeOperand"] = maybeOperand.map((item) => item);
            } else {
                _queryParams["maybeOperand"] = maybeOperand;
            }
        }

        if (Array.isArray(operandOrColor)) {
            _queryParams["operandOrColor"] = operandOrColor.map((item) =>
                typeof item === "string" ? item : JSON.stringify(item),
            );
        } else {
            _queryParams["operandOrColor"] =
                typeof operandOrColor === "string" ? operandOrColor : JSON.stringify(operandOrColor);
        }

        if (maybeOperandOrColor != null) {
            if (Array.isArray(maybeOperandOrColor)) {
                _queryParams["maybeOperandOrColor"] = maybeOperandOrColor.map((item) =>
                    typeof item === "string" ? item : JSON.stringify(item),
                );
            } else {
                _queryParams["maybeOperandOrColor"] =
                    typeof maybeOperandOrColor === "string" ? maybeOperandOrColor : JSON.stringify(maybeOperandOrColor);
            }
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ?? null,
                await core.Supplier.get(this._options.environment),
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/enum",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/enum/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedEnumError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedEnumError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedEnumTimeoutError("Timeout exceeded when calling POST /query-list.");
            case "unknown":
                throw new errors.SeedEnumError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
