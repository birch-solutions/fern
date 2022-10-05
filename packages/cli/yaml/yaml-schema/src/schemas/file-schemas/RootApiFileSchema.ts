import { z } from "zod";
import { ApiAuthSchema } from "../ApiAuthSchema";
import { AuthSchemeDeclarationSchema } from "../AuthSchemeDeclarationSchema";
import { ErrorDeclarationSchema } from "../ErrorDeclarationSchema";
import { TypeDeclarationSchema } from "../TypeDeclarationSchema";

export const RootApiFileSchema = z.strictObject({
    name: z.string(),
    auth: z.optional(ApiAuthSchema),
    "auth-schemes": z.optional(z.record(AuthSchemeDeclarationSchema)),
    imports: z.optional(z.record(z.string())),
    types: z.optional(z.record(TypeDeclarationSchema)),
    errors: z.optional(z.record(ErrorDeclarationSchema)),
});

export type RootApiFileSchema = z.infer<typeof RootApiFileSchema>;
