/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { User } from "./api/resources/user/client/Client";

export declare namespace SeedExtraPropertiesClient {
    interface Options {
        environment: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class SeedExtraPropertiesClient {
    constructor(protected readonly _options: SeedExtraPropertiesClient.Options) {}

    protected _user: User | undefined;

    public get user(): User {
        return (this._user ??= new User(this._options));
    }
}
