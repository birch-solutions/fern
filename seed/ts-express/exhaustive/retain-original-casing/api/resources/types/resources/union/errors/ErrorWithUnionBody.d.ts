/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as errors from "../../../../../../errors";
import * as SeedExhaustive from "../../../../..";
import express from "express";
export declare class ErrorWithUnionBody extends errors.SeedExhaustiveError {
    private readonly body;
    constructor(body: SeedExhaustive.types.Animal);
    send(res: express.Response): Promise<void>;
}
