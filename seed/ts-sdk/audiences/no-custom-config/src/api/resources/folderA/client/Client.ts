/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments.js";
import * as core from "../../../../core/index.js";
import { Service } from "../resources/service/client/Client.js";

export declare namespace FolderA {
    export interface Options {
        environment: core.Supplier<environments.SeedAudiencesEnvironment | string>;
    }

    export interface RequestOptions {
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

export class FolderA {
    protected _service: Service | undefined;

    constructor(protected readonly _options: FolderA.Options) {}

    public get service(): Service {
        return (this._service ??= new Service(this._options));
    }
}
