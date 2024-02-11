/**
 * This file was auto-generated by Fern from our API Definition.
 */

import express from "express";
import { ServiceService } from "./api/resources/service/service/ServiceService";

export function register(
    expressApp: express.Express | express.Router,
    services: {
        service: ServiceService;
    }
): void {
    (expressApp as any).use("/:serviceParam", services.service.toRouter());
}
