/**
 * This file was auto-generated by Fern from our API Definition.
 */

export const SeedExamplesEnvironment = {
        Production: "https://production.com/api",
        Staging: "https://staging.com/api",
    } as const;

export type SeedExamplesEnvironment = typeof SeedExamplesEnvironment.Production | typeof SeedExamplesEnvironment.Staging;
