"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
function register(expressApp, services) {
    expressApp.use("", services.headers.toRouter());
    expressApp.use("", services.inlined.toRouter());
    expressApp.use("/", services.literal.toRouter());
    expressApp.use("", services.path.toRouter());
    expressApp.use("", services.query.toRouter());
    expressApp.use("", services.reference.toRouter());
}
exports.register = register;
