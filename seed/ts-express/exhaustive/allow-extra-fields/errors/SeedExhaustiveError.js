"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedExhaustiveError = void 0;
class SeedExhaustiveError extends Error {
    constructor(errorName) {
        super();
        this.errorName = errorName;
        Object.setPrototypeOf(this, SeedExhaustiveError.prototype);
    }
}
exports.SeedExhaustiveError = SeedExhaustiveError;
