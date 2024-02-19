/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as fs from "fs";
import * as SeedFileUpload from "../../..";
import { default as FormData } from "form-data";
import * as errors from "../../../../errors";
import urlJoin from "url-join";

export declare namespace Service {
    interface Options {
        environment: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Service {
    constructor(protected readonly _options: Service.Options) {}

    public async post(
        file: File | fs.ReadStream,
        fileList: File | fs.ReadStream,
        maybeFile: File | fs.ReadStream | undefined,
        maybeFileList: File | fs.ReadStream | undefined,
        request: SeedFileUpload.MyRequest,
        requestOptions?: Service.RequestOptions
    ): Promise<void> {
        const _request = new FormData();
        if (request.maybeString != null) {
            _request.append("maybeString", request.maybeString);
        }

        _request.append("integer", request.integer.toString());
        _request.append("file", file);
        _request.append("fileList", fileList);
        if (maybeFile != null) {
            _request.append("maybeFile", maybeFile);
        }

        if (maybeFileList != null) {
            _request.append("maybeFileList", maybeFileList);
        }

        if (request.maybeInteger != null) {
            _request.append("maybeInteger", request.maybeInteger.toString());
        }

        for (const _item of request.listOfStrings) {
            _request.append("listOfStrings", _item);
        }

        for (const _item of request.setOfStrings) {
            _request.append("setOfStrings", _item);
        }

        if (request.optionalListOfStrings != null) {
            for (const _item of request.optionalListOfStrings) {
                _request.append("optionalListOfStrings", _item);
            }
        }

        if (request.optionalSetOfStrings != null) {
            for (const _item of request.optionalSetOfStrings) {
                _request.append("optionalSetOfStrings", _item);
            }
        }

        if (Array.isArray(request.maybeList))
            for (const _item of request.maybeList) {
                _request.append("maybeList", typeof _item === "string" ? _item : JSON.stringify(_item));
            }

        if (request.optionalMaybeList != null) {
            if (Array.isArray(request.optionalMaybeList))
                for (const _item of request.optionalMaybeList) {
                    _request.append("optionalMaybeList", typeof _item === "string" ? _item : JSON.stringify(_item));
                }
        }

        if (Array.isArray(request.maybeListOrSet) || request.maybeListOrSet instanceof Set)
            for (const _item of request.maybeListOrSet) {
                _request.append("maybeListOrSet", typeof _item === "string" ? _item : JSON.stringify(_item));
            }

        if (request.optionalMaybeListOrSet != null) {
            if (Array.isArray(request.optionalMaybeListOrSet) || request.optionalMaybeListOrSet instanceof Set)
                for (const _item of request.optionalMaybeListOrSet) {
                    _request.append(
                        "optionalMaybeListOrSet",
                        typeof _item === "string" ? _item : JSON.stringify(_item)
                    );
                }
        }

        for (const _item of request.listOfObjects) {
            _request.append("listOfObjects", JSON.stringify(_item));
        }

        const _response = await core.fetcher({
            url: await core.Supplier.get(this._options.environment),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "multipart/form-data; boundary=" + _request.getBoundary(),
            body: _request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedFileUploadError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedFileUploadError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedFileUploadTimeoutError();
            case "unknown":
                throw new errors.SeedFileUploadError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async justFile(file: File | fs.ReadStream, requestOptions?: Service.RequestOptions): Promise<void> {
        const _request = new FormData();
        _request.append("file", file);
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/just-file"),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "multipart/form-data; boundary=" + _request.getBoundary(),
            body: _request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedFileUploadError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedFileUploadError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedFileUploadTimeoutError();
            case "unknown":
                throw new errors.SeedFileUploadError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async justFileWithQueryParams(
        file: File | fs.ReadStream,
        request: SeedFileUpload.JustFileWithQueryParamsRequet,
        requestOptions?: Service.RequestOptions
    ): Promise<void> {
        const _queryParams: Record<string, string | string[]> = {};
        if (request.maybeString != null) {
            _queryParams["maybeString"] = request.maybeString;
        }

        _queryParams["integer"] = request.integer.toString();
        if (request.maybeInteger != null) {
            _queryParams["maybeInteger"] = request.maybeInteger.toString();
        }

        if (Array.isArray(request.listOfStrings)) {
            _queryParams["listOfStrings"] = request.listOfStrings.map((item) => item);
        } else {
            _queryParams["listOfStrings"] = request.listOfStrings;
        }

        if (request.optionalListOfStrings != null) {
            if (Array.isArray(request.optionalListOfStrings)) {
                _queryParams["optionalListOfStrings"] = request.optionalListOfStrings.map((item) => item);
            } else {
                _queryParams["optionalListOfStrings"] = request.optionalListOfStrings;
            }
        }

        const _request = new FormData();
        _request.append("file", file);
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/just-file-with-query-params"),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "multipart/form-data; boundary=" + _request.getBoundary(),
            queryParameters: _queryParams,
            body: _request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedFileUploadError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedFileUploadError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedFileUploadTimeoutError();
            case "unknown":
                throw new errors.SeedFileUploadError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
