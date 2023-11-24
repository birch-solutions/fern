import { z } from "zod";
import { ObjectExtendsSchema } from "./ObjectExtendsSchema";
import { ObjectPropertySchema } from "./ObjectPropertySchema";

// for inline request schemas, you need either extends/properties (or both).
export const HttpInlineRequestBodySchema = z.union([
    z.strictObject({
        extends: ObjectExtendsSchema,
        properties: z.optional(z.record(ObjectPropertySchema))
    }),
    z.strictObject({
        extends: z.optional(ObjectExtendsSchema),
        properties: z.record(ObjectPropertySchema)
    })
]);

export type HttpInlineRequestBodySchema = z.infer<typeof HttpInlineRequestBodySchema>;
