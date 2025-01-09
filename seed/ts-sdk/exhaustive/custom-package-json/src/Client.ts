/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Endpoints } from "./api/resources/endpoints/client/Client";
import { InlinedRequests } from "./api/resources/inlinedRequests/client/Client";
import { NoAuth } from "./api/resources/noAuth/client/Client";
import { NoReqBody } from "./api/resources/noReqBody/client/Client";
import { ReqWithHeaders } from "./api/resources/reqWithHeaders/client/Client";

export declare namespace FiddleClient {
    export interface Options {
        environment: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
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

export class FiddleClient {
    protected _endpoints: Endpoints | undefined;
    protected _inlinedRequests: InlinedRequests | undefined;
    protected _noAuth: NoAuth | undefined;
    protected _noReqBody: NoReqBody | undefined;
    protected _reqWithHeaders: ReqWithHeaders | undefined;

    constructor(protected readonly _options: FiddleClient.Options) {}

    public get endpoints(): Endpoints {
        return (this._endpoints ??= new Endpoints(this._options));
    }

    public get inlinedRequests(): InlinedRequests {
        return (this._inlinedRequests ??= new InlinedRequests(this._options));
    }

    public get noAuth(): NoAuth {
        return (this._noAuth ??= new NoAuth(this._options));
    }

    public get noReqBody(): NoReqBody {
        return (this._noReqBody ??= new NoReqBody(this._options));
    }

    public get reqWithHeaders(): ReqWithHeaders {
        return (this._reqWithHeaders ??= new ReqWithHeaders(this._options));
    }
}
