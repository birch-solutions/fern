/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { FolderA } from "./api/resources/folderA/client/Client";
import { FolderD } from "./api/resources/folderD/client/Client";
import { Foo } from "./api/resources/foo/client/Client";

export declare namespace SeedAudiencesClient {
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

export class SeedAudiencesClient {
    protected _folderA: FolderA | undefined;
    protected _folderD: FolderD | undefined;
    protected _foo: Foo | undefined;

    constructor(protected readonly _options: SeedAudiencesClient.Options) {}

    public get folderA(): FolderA {
        return (this._folderA ??= new FolderA(this._options));
    }

    public get folderD(): FolderD {
        return (this._folderD ??= new FolderD(this._options));
    }

    public get foo(): Foo {
        return (this._foo ??= new Foo(this._options));
    }
}
