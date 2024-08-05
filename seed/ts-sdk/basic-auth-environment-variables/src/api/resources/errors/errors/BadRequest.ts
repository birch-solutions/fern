/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors/index";

export class BadRequest extends errors.SeedBasicAuthEnvironmentVariablesError {
    constructor() {
        super({
            message: "BadRequest",
            statusCode: 400
        });
        Object.setPrototypeOf(this, BadRequest.prototype);
    }
}
