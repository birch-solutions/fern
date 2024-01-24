import { z } from "zod";

// Common per-generator configuration flags
export type BaseGeneratorConfigSchema = z.infer<typeof BaseGeneratorConfigSchema>;

export const BaseGeneratorConfigSchema = z.strictObject({
    defaultTimeoutInSeconds: z.optional(z.union([z.literal("infinity"), z.number()])),
    extraDependencies: z.optional(z.record(z.string())),
    clientClassName: z.optional(z.string())
});
