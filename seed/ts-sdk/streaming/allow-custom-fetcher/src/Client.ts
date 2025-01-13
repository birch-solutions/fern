/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Dummy } from "./api/resources/dummy/client/Client";

export declare namespace SeedStreamingClient {
    export interface Options {
        environment: core.Supplier<string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        fetcher?: core.FetchFunction;
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

export class SeedStreamingClient {
    protected _dummy: Dummy | undefined;

    constructor(protected readonly _options: SeedStreamingClient.Options) {}

    public get dummy(): Dummy {
        return (this._dummy ??= new Dummy(this._options));
    }
}
