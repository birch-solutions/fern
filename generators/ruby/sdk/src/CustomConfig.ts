import { BaseGeneratorConfigSchema } from "@fern-api/generator-commons";
import { z } from "zod";

export type RubySdkCustomConfig = z.infer<typeof RubySdkCustomConfigSchema>;
export const RubySdkCustomConfigSchema = BaseGeneratorConfigSchema.extend({
    defaultTimeoutInSeconds: z.optional(z.union([z.literal("infinity"), z.number()])),
    gemName: z.optional(z.string())
});

// TODO: this will likely be shared between models and SDK
export function parseCustomConfig(customConfig: unknown): RubySdkCustomConfig {
    const parsed = customConfig != null ? RubySdkCustomConfigSchema.parse(customConfig) : undefined;
    return {
        defaultTimeoutInSeconds: parsed?.defaultTimeoutInSeconds ?? parsed?.defaultTimeoutInSeconds,
        extraDependencies: parsed?.extraDependencies ?? {},
        clientClassName: parsed?.clientClassName,
        gemName: parsed?.gemName
    };
}
