/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../../../errors/index.js";
import * as SeedExhaustive from "../../../../../index.js";
import express from "express";
import * as serializers from "../../../../../../serialization/index.js";

export class ObjectWithRequiredFieldError extends errors.SeedExhaustiveError {
    constructor(private readonly body: SeedExhaustive.types.ObjectWithRequiredField) {
        super("ObjectWithRequiredFieldError");
        Object.setPrototypeOf(this, ObjectWithRequiredFieldError.prototype);
    }

    public async send(res: express.Response): Promise<void> {
        res.status(400).json(
            serializers.types.ObjectWithRequiredField.jsonOrThrow(this.body, { unrecognizedObjectKeys: "strip" })
        );
    }
}
