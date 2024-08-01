/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { User } from "./api/resources/user/client/Client";

export declare namespace SeedQueryParametersClient {
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

export class SeedQueryParametersClient {
    constructor(protected readonly _options: SeedQueryParametersClient.Options) {
    }

    protected _user: User | undefined;

    public get user(): User {
        return (this._user ??= new User(this._options));
    }
}
