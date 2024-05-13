/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors/index";
import * as SeedApi from "../../../index";
import express from "express";
import * as serializers from "../../../../serialization/index";

export class MovieDoesNotExistError extends errors.SeedApiError {
    constructor(private readonly body: SeedApi.MovieId) {
        super("MovieDoesNotExistError");
        Object.setPrototypeOf(this, MovieDoesNotExistError.prototype);
    }

    public async send(res: express.Response): Promise<void> {
        res.status(404).json(await serializers.MovieId.jsonOrThrow(this.body, { unrecognizedObjectKeys: "strip" }));
    }
}
