/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedEnum from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace PathParam {
    interface Options {
        environment: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class PathParam {
    constructor(protected readonly _options: PathParam.Options) {}

    /**
     * @param {SeedEnum.Operand} operand
     * @param {SeedEnum.Operand | undefined} maybeOperand
     * @param {SeedEnum.ColorOrOperand} operandOrColor
     * @param {SeedEnum.ColorOrOperand | undefined} maybeOperandOrColor
     * @param {PathParam.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await seedEnum.pathParam.send(SeedEnum.Operand.GreaterThan, SeedEnum.Operand.LessThan, SeedEnum.Color.Red, SeedEnum.Color.Red)
     */
    public async send(
        operand: SeedEnum.Operand,
        maybeOperand: SeedEnum.Operand | undefined,
        operandOrColor: SeedEnum.ColorOrOperand,
        maybeOperandOrColor: SeedEnum.ColorOrOperand | undefined,
        requestOptions?: PathParam.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `path/${encodeURIComponent(await serializers.Operand.jsonOrThrow(operand))}/${encodeURIComponent(
                    maybeOperand
                )}/${encodeURIComponent(
                    await serializers.ColorOrOperand.jsonOrThrow(operandOrColor)
                )}/${encodeURIComponent(maybeOperandOrColor)}`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/enum",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedEnumError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedEnumError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedEnumTimeoutError();
            case "unknown":
                throw new errors.SeedEnumError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
