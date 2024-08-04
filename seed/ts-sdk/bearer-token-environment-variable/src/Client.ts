/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Service } from "./api/resources/service/client/Client";

export declare namespace SeedBearerTokenEnvironmentVariableClient {
    interface Options {
        environment: core.Supplier<string>;
        apiKey?: core.Supplier<core.BearerToken | undefined>;
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

export class SeedBearerTokenEnvironmentVariableClient {
    constructor(protected readonly _options: SeedBearerTokenEnvironmentVariableClient.Options) {}

    protected _service: Service | undefined;

    public get service(): Service {
        return (this._service ??= new Service(this._options));
    }
}
