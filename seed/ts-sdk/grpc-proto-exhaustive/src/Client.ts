/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Dataservice } from "./api/resources/dataservice/client/Client";

export declare namespace SeedApiClient {
    interface Options {
        environment?: core.Supplier<environments.SeedApiEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
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

export class SeedApiClient {
    constructor(protected readonly _options: SeedApiClient.Options = {}) {}

    protected _dataservice: Dataservice | undefined;

    public get dataservice(): Dataservice {
        return (this._dataservice ??= new Dataservice(this._options));
    }
}
