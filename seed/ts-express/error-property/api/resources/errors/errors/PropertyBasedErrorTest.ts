/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors/index";
import * as SeedErrorProperty from "../../../index";
import express from "express";
import * as serializers from "../../../../serialization/index";

export class PropertyBasedErrorTest extends errors.SeedErrorPropertyError {
    constructor(private readonly body: SeedErrorProperty.PropertyBasedErrorTestBody) {
        super("PropertyBasedErrorTest");
        Object.setPrototypeOf(this, PropertyBasedErrorTest.prototype);
    }

    public async send(res: express.Response): Promise<void> {
        res.status(400).json(
            await serializers.PropertyBasedErrorTestBody.jsonOrThrow(this.body, { unrecognizedObjectKeys: "strip" })
        );
    }
}
