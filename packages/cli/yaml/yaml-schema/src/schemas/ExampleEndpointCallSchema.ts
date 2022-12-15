import { z } from "zod";
import { ExampleResponseSchema } from "./ExampleResponseSchema";
import { ExampleTypeReferenceSchema } from "./ExampleTypeReferenceSchema";

export const ExampleEndpointCallSchema = z.strictObject({
    "path-parameters": z.optional(z.record(z.string(), ExampleTypeReferenceSchema)),
    "query-parameters": z.optional(z.record(z.string(), ExampleTypeReferenceSchema)),
    headers: z.optional(z.record(z.string(), ExampleTypeReferenceSchema)),
    request: z.optional(ExampleTypeReferenceSchema),
    response: z.optional(ExampleResponseSchema),
});

export type ExampleEndpointCallSchema = z.infer<typeof ExampleEndpointCallSchema>;
