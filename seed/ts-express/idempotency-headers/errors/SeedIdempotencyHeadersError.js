"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedIdempotencyHeadersError = void 0;
class SeedIdempotencyHeadersError extends Error {
    constructor(errorName) {
        super();
        this.errorName = errorName;
        Object.setPrototypeOf(this, SeedIdempotencyHeadersError.prototype);
    }
}
exports.SeedIdempotencyHeadersError = SeedIdempotencyHeadersError;
