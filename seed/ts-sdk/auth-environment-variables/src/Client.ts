/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core/index.js";
import { Service } from "./api/resources/service/client/Client.js";

export declare namespace SeedAuthEnvironmentVariablesClient {
    export interface Options {
        environment: core.Supplier<string>;
        apiKey?: core.Supplier<string | undefined>;
        /** Override the X-Another-Header header */
        xAnotherHeader: core.Supplier<string>;
        /** Override the X-API-Version header */
        xApiVersion?: "01-01-2000";
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-Another-Header header */
        xAnotherHeader?: string;
        /** Override the X-API-Version header */
        xApiVersion?: "01-01-2000";
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class SeedAuthEnvironmentVariablesClient {
    protected _service: Service | undefined;

    constructor(protected readonly _options: SeedAuthEnvironmentVariablesClient.Options) {}

    public get service(): Service {
        return (this._service ??= new Service(this._options));
    }
}
