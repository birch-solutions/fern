/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Payment } from "./api/resources/payment/client/Client";

export declare namespace SeedIdempotencyHeadersClient {
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
}

export class SeedIdempotencyHeadersClient {
    constructor(protected readonly _options: SeedIdempotencyHeadersClient.Options) {}

    protected _payment: Payment | undefined;

    public get payment(): Payment {
        return (this._payment ??= new Payment(this._options));
    }
}
