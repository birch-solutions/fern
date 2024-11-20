/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedQueryParameters from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace User {
    interface Options {
        environment: core.Supplier<string>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class User {
    constructor(protected readonly _options: User.Options) {}

    /**
     * @param {SeedQueryParameters.GetUsersRequest} request
     * @param {User.RequestOptions} requestOptions - Request-specific configuration.
     */
    public getUsername(
        request: SeedQueryParameters.GetUsersRequest,
        requestOptions?: User.RequestOptions
    ): core.APIPromise<SeedQueryParameters.User> {
        return core.APIPromise.from(
            (async () => {
                const {
                    limit,
                    id,
                    date,
                    deadline,
                    bytes,
                    user,
                    userList,
                    optionalDeadline,
                    keyValue,
                    optionalString,
                    nestedUser,
                    optionalUser,
                    excludeUser,
                    filter,
                } = request;
                const _queryParams: Record<string, string | string[] | object | object[]> = {};
                _queryParams["limit"] = limit.toString();
                _queryParams["id"] = id;
                _queryParams["date"] = date;
                _queryParams["deadline"] = deadline;
                _queryParams["bytes"] = bytes;
                _queryParams["user"] = user;
                _queryParams["userList"] = JSON.stringify(userList);
                if (optionalDeadline != null) {
                    _queryParams["optionalDeadline"] = optionalDeadline;
                }
                _queryParams["keyValue"] = JSON.stringify(keyValue);
                if (optionalString != null) {
                    _queryParams["optionalString"] = optionalString;
                }
                _queryParams["nestedUser"] = nestedUser;
                if (optionalUser != null) {
                    _queryParams["optionalUser"] = optionalUser;
                }
                if (Array.isArray(excludeUser)) {
                    _queryParams["excludeUser"] = excludeUser.map((item) => item);
                } else {
                    _queryParams["excludeUser"] = excludeUser;
                }
                if (Array.isArray(filter)) {
                    _queryParams["filter"] = filter.map((item) => item);
                } else {
                    _queryParams["filter"] = filter;
                }
                const _response = await core.fetcher({
                    url: urlJoin(await core.Supplier.get(this._options.environment), "/user"),
                    method: "GET",
                    headers: {
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "@fern/query-parameters",
                        "X-Fern-SDK-Version": "0.0.1",
                        "User-Agent": "@fern/query-parameters/0.0.1",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                    },
                    contentType: "application/json",
                    queryParameters: _queryParams,
                    requestType: "json",
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: _response.body as SeedQueryParameters.User,
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.SeedQueryParametersError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.SeedQueryParametersError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.SeedQueryParametersTimeoutError();
                    case "unknown":
                        throw new errors.SeedQueryParametersError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }
}
