/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Union } from "./api/resources/union/client/Client";

export declare namespace SeedUnionsClient {
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

export class SeedUnionsClient {
    protected _union: Union | undefined;

    constructor(protected readonly _options: SeedUnionsClient.Options) {}

    public get union(): Union {
        return (this._union ??= new Union(this._options));
    }
}
