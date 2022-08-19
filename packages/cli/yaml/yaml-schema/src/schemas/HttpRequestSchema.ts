import { z } from "zod";
import { WithDocsSchema } from "./WithDocsSchema";

export const HttpRequestSchema = z.union([
    z.string(),
    WithDocsSchema.extend({
        encoding: z.optional(z.string()),
        type: z.string(),
    }),
]);

export type HttpRequestSchema = z.infer<typeof HttpRequestSchema>;
