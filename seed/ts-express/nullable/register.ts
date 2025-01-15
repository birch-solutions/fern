/**
 * This file was auto-generated by Fern from our API Definition.
 */

import express from "express";
import { NullableService } from "./api/resources/nullable/service/NullableService";

export function register(
    expressApp: express.Express | express.Router,
    services: {
        nullable: NullableService;
    },
): void {
    (expressApp as any).use("/users", services.nullable.toRouter());
}
