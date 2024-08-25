/**
 * This file was auto-generated by Fern from our API Definition.
 */

import express from "express";
import { DataserviceService } from "./api/resources/dataservice/service/DataserviceService";

export function register(
    expressApp: express.Express | express.Router,
    services: {
        dataservice: DataserviceService;
    }
): void {
    (expressApp as any).use("", services.dataservice.toRouter());
}
