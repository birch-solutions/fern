/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { BasicAuth } from "./api/resources/basicAuth/client/Client";

export declare namespace SeedBasicAuthClient {
    interface Options {
        environment: core.Supplier<string>;
        username: core.Supplier<string>;
        password: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class SeedBasicAuthClient {
    constructor(protected readonly _options: SeedBasicAuthClient.Options) {}

    protected _basicAuth: BasicAuth | undefined;

    public get basicAuth(): BasicAuth {
        return (this._basicAuth ??= new BasicAuth(this._options));
    }
}
