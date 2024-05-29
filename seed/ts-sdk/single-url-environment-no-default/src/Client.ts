/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Dummy } from "./api/resources/dummy/client/Client";

export declare namespace SeedSingleUrlEnvironmentNoDefaultClient {
    interface Options {
        environment: core.Supplier<environments.SeedSingleUrlEnvironmentNoDefaultEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
        abortSignal?: AbortSignal;
    }
}

export class SeedSingleUrlEnvironmentNoDefaultClient {
    constructor(protected readonly _options: SeedSingleUrlEnvironmentNoDefaultClient.Options) {}

    protected _dummy: Dummy | undefined;

    public get dummy(): Dummy {
        return (this._dummy ??= new Dummy(this._options));
    }
}
