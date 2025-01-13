/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Package } from "./api/resources/package/client/Client";

export declare namespace SeedNurseryApiClient {
    export interface Options {
        environment: core.Supplier<string>;
        /** Specify a custom URL to connect the client to. */
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

export class SeedNurseryApiClient {
    protected _package: Package | undefined;

    constructor(protected readonly _options: SeedNurseryApiClient.Options) {}

    public get package(): Package {
        return (this._package ??= new Package(this._options));
    }
}
