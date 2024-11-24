/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { CustomAuth } from "./api/resources/customAuth/client/Client";

export declare namespace SeedCustomAuthClient {
    interface Options {
        environment: core.Supplier<string>;
        customAuthScheme: core.Supplier<string>;
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

export class SeedCustomAuthClient {
    constructor(protected readonly _options: SeedCustomAuthClient.Options) {}

    protected _customAuth: CustomAuth | undefined;

    public get customAuth(): CustomAuth {
        return (this._customAuth ??= new CustomAuth(this._options));
    }
}
