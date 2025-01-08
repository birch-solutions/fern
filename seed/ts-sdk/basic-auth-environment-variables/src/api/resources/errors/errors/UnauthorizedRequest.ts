/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors/index.js";
import * as SeedBasicAuthEnvironmentVariables from "../../../index.js";

export class UnauthorizedRequest extends errors.SeedBasicAuthEnvironmentVariablesError {
    constructor(body: SeedBasicAuthEnvironmentVariables.UnauthorizedRequestErrorBody) {
        super({
            message: "UnauthorizedRequest",
            statusCode: 401,
            body: body,
        });
        Object.setPrototypeOf(this, UnauthorizedRequest.prototype);
    }
}
