/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Payment } from "./api/resources/payment/client/Client";

export declare namespace SeedIdempotencyHeadersClient {
    export interface Options {
        environment: core.Supplier<string>;
        token: core.Supplier<core.BearerToken>;
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

export class SeedIdempotencyHeadersClient {
    protected _payment: Payment | undefined;

    constructor(protected readonly _options: SeedIdempotencyHeadersClient.Options) {}

    public get payment(): Payment {
        return (this._payment ??= new Payment(this._options));
    }
}
