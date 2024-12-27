/**
 * This file was auto-generated by Fern from our API Definition.
 */

import express from "express";
import { UnionService } from "./api/resources/union/service/UnionService";

export function register(
    expressApp: express.Express | express.Router,
    services: {
        union: UnionService;
    },
): void {
    (expressApp as any).use("/", services.union.toRouter());
}
