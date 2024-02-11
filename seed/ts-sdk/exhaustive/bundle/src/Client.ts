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
    interface Options {
        environment: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class FiddleClient {
    constructor(protected readonly _options: FiddleClient.Options) {}

    protected _endpoints: Endpoints | undefined;

    public get endpoints(): Endpoints {
        return (this._endpoints ??= new Endpoints(this._options));
    }

    protected _inlinedRequests: InlinedRequests | undefined;

    public get inlinedRequests(): InlinedRequests {
        return (this._inlinedRequests ??= new InlinedRequests(this._options));
    }

    protected _noAuth: NoAuth | undefined;

    public get noAuth(): NoAuth {
        return (this._noAuth ??= new NoAuth(this._options));
    }

    protected _noReqBody: NoReqBody | undefined;

    public get noReqBody(): NoReqBody {
        return (this._noReqBody ??= new NoReqBody(this._options));
    }

    protected _reqWithHeaders: ReqWithHeaders | undefined;

    public get reqWithHeaders(): ReqWithHeaders {
        return (this._reqWithHeaders ??= new ReqWithHeaders(this._options));
    }
}
