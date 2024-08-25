import { z } from "zod";

export const SdkCustomConfigSchema = z.strictObject({
    namespace: z.string().optional(),
    "simplify-object-dictionaries": z.boolean().optional(),
    "base-api-exception-class-name": z.string().optional(),
    "base-exception-class-name": z.string().optional(),
    "client-class-name": z.string().optional(),
    "explicit-namespaces": z.boolean().optional(),
    "root-namespace-for-core-classes": z.boolean().optional(),
    "pascal-case-environments": z.boolean().optional(),
    "generate-error-types": z.boolean().optional(),
    "extra-dependencies": z.record(z.string()).optional(),
    "read-only-memory-types": z.optional(z.array(z.string()))
});

export type SdkCustomConfigSchema = z.infer<typeof SdkCustomConfigSchema>;
