/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SeedTrace from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace Playlist {
    export interface Options {
        environment?: core.Supplier<environments.SeedTraceEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the X-Random-Header header */
        xRandomHeader?: core.Supplier<string | undefined>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-Random-Header header */
        xRandomHeader?: string | undefined;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Playlist {
    constructor(protected readonly _options: Playlist.Options = {}) {}

    /**
     * Create a new playlist
     *
     * @param {number} serviceParam
     * @param {SeedTrace.CreatePlaylistRequest} request
     * @param {Playlist.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.playlist.createPlaylist(1, {
     *         datetime: "2024-01-15T09:30:00Z",
     *         optionalDatetime: "2024-01-15T09:30:00Z",
     *         body: {
     *             name: "name",
     *             problems: [SeedTrace.ProblemId("problems"), SeedTrace.ProblemId("problems")]
     *         }
     *     })
     */
    public async createPlaylist(
        serviceParam: number,
        request: SeedTrace.CreatePlaylistRequest,
        requestOptions?: Playlist.RequestOptions,
    ): Promise<core.APIResponse<SeedTrace.Playlist, SeedTrace.playlist.createPlaylist.Error>> {
        const { datetime, optionalDatetime, body: _body } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["datetime"] = datetime.toISOString();
        if (optionalDatetime != null) {
            _queryParams["optionalDatetime"] = optionalDatetime.toISOString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SeedTraceEnvironment.Prod,
                `/v2/playlist/${encodeURIComponent(serviceParam)}/create`,
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/trace/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: serializers.PlaylistCreateRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            withCredentials: true,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.Playlist.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: SeedTrace.playlist.createPlaylist.Error._unknown(_response.error),
        };
    }

    /**
     * Returns the user's playlists
     *
     * @param {number} serviceParam
     * @param {SeedTrace.GetPlaylistsRequest} request
     * @param {Playlist.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.playlist.getPlaylists(1, {
     *         limit: 1,
     *         otherField: "otherField",
     *         multiLineDocs: "multiLineDocs",
     *         optionalMultipleField: "optionalMultipleField",
     *         multipleField: "multipleField"
     *     })
     */
    public async getPlaylists(
        serviceParam: number,
        request: SeedTrace.GetPlaylistsRequest,
        requestOptions?: Playlist.RequestOptions,
    ): Promise<core.APIResponse<SeedTrace.Playlist[], SeedTrace.playlist.getPlaylists.Error>> {
        const { limit, otherField, multiLineDocs, optionalMultipleField, multipleField } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        _queryParams["otherField"] = otherField;
        _queryParams["multiLineDocs"] = multiLineDocs;
        if (optionalMultipleField != null) {
            if (Array.isArray(optionalMultipleField)) {
                _queryParams["optionalMultipleField"] = optionalMultipleField.map((item) => item);
            } else {
                _queryParams["optionalMultipleField"] = optionalMultipleField;
            }
        }

        if (Array.isArray(multipleField)) {
            _queryParams["multipleField"] = multipleField.map((item) => item);
        } else {
            _queryParams["multipleField"] = multipleField;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SeedTraceEnvironment.Prod,
                `/v2/playlist/${encodeURIComponent(serviceParam)}/all`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/trace/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            withCredentials: true,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.playlist.getPlaylists.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: SeedTrace.playlist.getPlaylists.Error._unknown(_response.error),
        };
    }

    /**
     * Returns a playlist
     *
     * @param {number} serviceParam
     * @param {SeedTrace.PlaylistId} playlistId
     * @param {Playlist.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.playlist.getPlaylist(1, SeedTrace.PlaylistId("playlistId"))
     */
    public async getPlaylist(
        serviceParam: number,
        playlistId: SeedTrace.PlaylistId,
        requestOptions?: Playlist.RequestOptions,
    ): Promise<core.APIResponse<SeedTrace.Playlist, SeedTrace.playlist.getPlaylist.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SeedTraceEnvironment.Prod,
                `/v2/playlist/${encodeURIComponent(serviceParam)}/${encodeURIComponent(serializers.PlaylistId.jsonOrThrow(playlistId))}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/trace/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            withCredentials: true,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.Playlist.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.playlist.getPlaylist.Error.Raw)?.errorName) {
                case "PlaylistIdNotFoundError":
                case "UnauthorizedError":
                    return {
                        ok: false,
                        error: serializers.playlist.getPlaylist.Error.parseOrThrow(
                            _response.error.body as serializers.playlist.getPlaylist.Error.Raw,
                            {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            },
                        ),
                    };
            }
        }

        return {
            ok: false,
            error: SeedTrace.playlist.getPlaylist.Error._unknown(_response.error),
        };
    }

    /**
     * Updates a playlist
     *
     * @param {number} serviceParam
     * @param {SeedTrace.PlaylistId} playlistId
     * @param {SeedTrace.UpdatePlaylistRequest} request
     * @param {Playlist.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.playlist.updatePlaylist(1, SeedTrace.PlaylistId("playlistId"), {
     *         name: "name",
     *         problems: [SeedTrace.ProblemId("problems"), SeedTrace.ProblemId("problems")]
     *     })
     */
    public async updatePlaylist(
        serviceParam: number,
        playlistId: SeedTrace.PlaylistId,
        request?: SeedTrace.UpdatePlaylistRequest,
        requestOptions?: Playlist.RequestOptions,
    ): Promise<core.APIResponse<SeedTrace.Playlist | undefined, SeedTrace.playlist.updatePlaylist.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SeedTraceEnvironment.Prod,
                `/v2/playlist/${encodeURIComponent(serviceParam)}/${encodeURIComponent(serializers.PlaylistId.jsonOrThrow(playlistId))}`,
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/trace/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body:
                request != null
                    ? serializers.playlist.updatePlaylist.Request.jsonOrThrow(request, {
                          unrecognizedObjectKeys: "strip",
                      })
                    : undefined,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            withCredentials: true,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.playlist.updatePlaylist.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.playlist.updatePlaylist.Error.Raw)?.errorName) {
                case "PlaylistIdNotFoundError":
                    return {
                        ok: false,
                        error: serializers.playlist.updatePlaylist.Error.parseOrThrow(
                            _response.error.body as serializers.playlist.updatePlaylist.Error.Raw,
                            {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            },
                        ),
                    };
            }
        }

        return {
            ok: false,
            error: SeedTrace.playlist.updatePlaylist.Error._unknown(_response.error),
        };
    }

    /**
     * Deletes a playlist
     *
     * @param {number} serviceParam
     * @param {SeedTrace.PlaylistId} playlistId
     * @param {Playlist.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.playlist.deletePlaylist(1, SeedTrace.PlaylistId("playlist_id"))
     */
    public async deletePlaylist(
        serviceParam: number,
        playlistId: SeedTrace.PlaylistId,
        requestOptions?: Playlist.RequestOptions,
    ): Promise<core.APIResponse<void, SeedTrace.playlist.deletePlaylist.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SeedTraceEnvironment.Prod,
                `/v2/playlist/${encodeURIComponent(serviceParam)}/${encodeURIComponent(serializers.PlaylistId.jsonOrThrow(playlistId))}`,
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/trace/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            withCredentials: true,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: undefined,
            };
        }

        return {
            ok: false,
            error: SeedTrace.playlist.deletePlaylist.Error._unknown(_response.error),
        };
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
