/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Optional } from "./api/resources/optional/client/Client";

export declare namespace SeedObjectsWithImportsClient {
    interface Options {
        environment: core.Supplier<string>;
    }

    interface RequestOptions {
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

export class SeedObjectsWithImportsClient {
    protected _optional: Optional | undefined;

    constructor(protected readonly _options: SeedObjectsWithImportsClient.Options) {}

    public get optional(): Optional {
        return (this._optional ??= new Optional(this._options));
    }
}
