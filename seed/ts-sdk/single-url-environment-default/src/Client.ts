/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Dummy } from "./api/resources/dummy/client/Client";

export declare namespace SeedSingleUrlEnvironmentDefaultClient {
    interface Options {
        environment?: core.Supplier<environments.SeedSingleUrlEnvironmentDefaultEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
        abortSignal?: AbortSignal;
    }
}

export class SeedSingleUrlEnvironmentDefaultClient {
    constructor(protected readonly _options: SeedSingleUrlEnvironmentDefaultClient.Options) {}

    protected _dummy: Dummy | undefined;

    public get dummy(): Dummy {
        return (this._dummy ??= new Dummy(this._options));
    }
}
