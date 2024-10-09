import { z } from "zod";
import { DeclarationSchema } from "./DeclarationSchema";
import { ExampleEndpointCallSchema } from "./ExampleEndpointCallSchema";
import { HttpPathParameterSchema } from "./HttpPathParameterSchema";
import { HttpRequestSchema } from "./HttpRequestSchema";
import { HttpResponseSchema } from "./HttpResponseSchema";
import { HttpResponseStreamSchema } from "./HttpResponseStreamSchema";
import { PaginationSchema } from "./PaginationSchema";
import { ResponseErrorsSchema } from "./ResponseErrorsSchema";
import { WithDisplayNameSchema } from "./WithDisplayNameSchema";

export const HttpMethodSchema = z.enum(["GET", "POST", "PUT", "PATCH", "DELETE"]);

export type HttpMethodSchema = z.infer<typeof HttpMethodSchema>;

export const HttpEndpointSchema = DeclarationSchema.extend({
    method: z.optional(HttpMethodSchema),
    "base-path": z.optional(z.string()),
    path: z.string(),
    url: z.optional(z.string()),
    ["path-parameters"]: z.optional(z.record(HttpPathParameterSchema)),
    auth: z.optional(z.boolean()),
    idempotent: z.optional(z.boolean()),
    "stream-condition": z.optional(z.string()),
    request: z.optional(z.union([z.string(), HttpRequestSchema])),
    response: z.optional(HttpResponseSchema),
    "response-stream": z.optional(z.union([z.string(), HttpResponseStreamSchema])),
    errors: z.optional(ResponseErrorsSchema),
    examples: z.optional(z.array(ExampleEndpointCallSchema)),
    pagination: z.optional(z.union([PaginationSchema, z.boolean()]))
}).extend(WithDisplayNameSchema.shape);

export type HttpEndpointSchema = z.infer<typeof HttpEndpointSchema>;
