/**
 * This file was auto-generated by Fern from our API Definition.
 */

import express from "express";
import { UsersService } from "./api/resources/users/service/UsersService";

export function register(
    expressApp: express.Express | express.Router,
    services: {
        users: UsersService;
    }
): void {
    (expressApp as any).use("/users", services.users.toRouter());
}
