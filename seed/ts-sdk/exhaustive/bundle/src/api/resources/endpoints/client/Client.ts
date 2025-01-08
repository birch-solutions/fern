/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core/index.js";
import { Container } from "../resources/container/client/Client.js";
import { ContentType } from "../resources/contentType/client/Client.js";
import { Enum } from "../resources/enum/client/Client.js";
import { HttpMethods } from "../resources/httpMethods/client/Client.js";
import { Object_ } from "../resources/object/client/Client.js";
import { Params } from "../resources/params/client/Client.js";
import { Primitive } from "../resources/primitive/client/Client.js";
import { Union } from "../resources/union/client/Client.js";

export declare namespace Endpoints {
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

export class Endpoints {
    protected _container: Container | undefined;
    protected _contentType: ContentType | undefined;
    protected _enum: Enum | undefined;
    protected _httpMethods: HttpMethods | undefined;
    protected _object: Object_ | undefined;
    protected _params: Params | undefined;
    protected _primitive: Primitive | undefined;
    protected _union: Union | undefined;

    constructor(protected readonly _options: Endpoints.Options) {}

    public get container(): Container {
        return (this._container ??= new Container(this._options));
    }

    public get contentType(): ContentType {
        return (this._contentType ??= new ContentType(this._options));
    }

    public get enum(): Enum {
        return (this._enum ??= new Enum(this._options));
    }

    public get httpMethods(): HttpMethods {
        return (this._httpMethods ??= new HttpMethods(this._options));
    }

    public get object(): Object_ {
        return (this._object ??= new Object_(this._options));
    }

    public get params(): Params {
        return (this._params ??= new Params(this._options));
    }

    public get primitive(): Primitive {
        return (this._primitive ??= new Primitive(this._options));
    }

    public get union(): Union {
        return (this._union ??= new Union(this._options));
    }
}
