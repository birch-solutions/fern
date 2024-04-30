/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors/index";
import * as SeedBasicAuthEnvironmentVariables from "../../../index";
import express from "express";
import * as serializers from "../../../../serialization/index";

export class UnauthorizedRequest extends errors.SeedBasicAuthEnvironmentVariablesError {
    constructor(private readonly body: SeedBasicAuthEnvironmentVariables.UnauthorizedRequestErrorBody) {
        super("UnauthorizedRequest");
        Object.setPrototypeOf(this, UnauthorizedRequest.prototype);
    }

    public async send(res: express.Response): Promise<void> {
        res.status(401).json(
            await serializers.UnauthorizedRequestErrorBody.jsonOrThrow(this.body, { unrecognizedObjectKeys: "strip" })
        );
    }
}
