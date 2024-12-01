/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { User } from "./api/resources/user/client/Client";

export declare namespace SeedVersionClient {
    interface Options {
        environment: core.Supplier<string>;
        /** Override the X-API-Version header */
        xApiVersion: "1.0.0" | "2.0.0" | "latest";
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
        /** Override the X-API-Version header */
        xApiVersion?: "1.0.0" | "2.0.0" | "latest";
    }
}

export class SeedVersionClient {
    constructor(protected readonly _options: SeedVersionClient.Options) {}

    protected _user: User | undefined;

    public get user(): User {
        return (this._user ??= new User(this._options));
    }
}
