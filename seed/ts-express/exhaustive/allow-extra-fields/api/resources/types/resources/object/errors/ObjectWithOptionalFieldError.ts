/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../../../errors/index";
import * as SeedExhaustive from "../../../../../index";
import express from "express";
import * as serializers from "../../../../../../serialization/index";

export class ObjectWithOptionalFieldError extends errors.SeedExhaustiveError {
    constructor(private readonly body: SeedExhaustive.types.ObjectWithOptionalField) {
        super("ObjectWithOptionalFieldError");
        Object.setPrototypeOf(this, ObjectWithOptionalFieldError.prototype);
    }

    public async send(res: express.Response): Promise<void> {
        res.status(400).json(
            serializers.types.ObjectWithOptionalField.jsonOrThrow(this.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            })
        );
    }
}
