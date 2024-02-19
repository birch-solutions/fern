/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Headers } from "./api/resources/headers/client/Client";
import { Inlined } from "./api/resources/inlined/client/Client";
import { Literal } from "./api/resources/literal/client/Client";
import { Path } from "./api/resources/path/client/Client";
import { Query } from "./api/resources/query/client/Client";
import { Reference } from "./api/resources/reference/client/Client";

export declare namespace SeedLiteralClient {
    interface Options {
        environment: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class SeedLiteralClient {
    constructor(protected readonly _options: SeedLiteralClient.Options) {}

    protected _headers: Headers | undefined;

    public get headers(): Headers {
        return (this._headers ??= new Headers(this._options));
    }

    protected _inlined: Inlined | undefined;

    public get inlined(): Inlined {
        return (this._inlined ??= new Inlined(this._options));
    }

    protected _literal: Literal | undefined;

    public get literal(): Literal {
        return (this._literal ??= new Literal(this._options));
    }

    protected _path: Path | undefined;

    public get path(): Path {
        return (this._path ??= new Path(this._options));
    }

    protected _query: Query | undefined;

    public get query(): Query {
        return (this._query ??= new Query(this._options));
    }

    protected _reference: Reference | undefined;

    public get reference(): Reference {
        return (this._reference ??= new Reference(this._options));
    }
}
