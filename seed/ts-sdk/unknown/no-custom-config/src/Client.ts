/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Unknown } from "./api/resources/unknown/client/Client";

export declare namespace SeedUnknownAsAnyClient {
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
    }
}

export class SeedUnknownAsAnyClient {
    constructor(protected readonly _options: SeedUnknownAsAnyClient.Options) {
    }

    protected _unknown: Unknown | undefined;

    public get unknown(): Unknown {
        return (this._unknown ??= new Unknown(this._options));
    }
}
