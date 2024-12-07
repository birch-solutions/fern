/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Users } from "./api/resources/users/client/Client";

export declare namespace SeedPaginationClient {
    interface Options {
        environment: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
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

export class SeedPaginationClient {
    protected _users: Users | undefined;

    constructor(protected readonly _options: SeedPaginationClient.Options) {}

    public get users(): Users {
        return (this._users ??= new Users(this._options));
    }
}
