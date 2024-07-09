/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedIdempotencyHeaders from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Payment {
    interface Options {
        environment: core.Supplier<string>;
        token: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }

    interface IdempotentRequestOptions extends RequestOptions {
        idempotencyKey: string;
        idempotencyExpiration: number;
    }
}

export class Payment {
    constructor(protected readonly _options: Payment.Options) {}

    /**
     * @param {SeedIdempotencyHeaders.CreatePaymentRequest} request
     * @param {Payment.IdempotentRequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.payment.create({
     *         amount: 1,
     *         currency: SeedIdempotencyHeaders.Currency.Usd
     *     })
     */
    public async create(
        request: SeedIdempotencyHeaders.CreatePaymentRequest,
        requestOptions?: Payment.IdempotentRequestOptions
    ): Promise<string> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/payment"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/idempotency-headers",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                "Idempotency-Key": requestOptions?.idempotencyKey,
                "Idempotency-Expiration": requestOptions?.idempotencyExpiration.toString(),
            },
            contentType: "application/json",
            body: serializers.CreatePaymentRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.payment.create.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedIdempotencyHeadersError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedIdempotencyHeadersError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedIdempotencyHeadersTimeoutError();
            case "unknown":
                throw new errors.SeedIdempotencyHeadersError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} paymentId
     * @param {Payment.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.payment.delete("string")
     */
    public async delete(paymentId: string, requestOptions?: Payment.RequestOptions): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `/payment/${encodeURIComponent(paymentId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/idempotency-headers",
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
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedIdempotencyHeadersError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedIdempotencyHeadersError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedIdempotencyHeadersTimeoutError();
            case "unknown":
                throw new errors.SeedIdempotencyHeadersError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
