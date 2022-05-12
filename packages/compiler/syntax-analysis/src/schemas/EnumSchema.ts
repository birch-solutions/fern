import { z } from "zod";
import { WithDocsSchema } from "./WithDocsSchema";

export const EnumSchema = z
    .strictObject({
        enum: z.array(
            z.union([
                z.string(),
                z
                    .strictObject({
                        name: z.optional(z.string()),
                        value: z.string(),
                    })
                    .merge(WithDocsSchema),
            ])
        ),
    })
    .merge(WithDocsSchema);

export type EnumSchema = z.infer<typeof EnumSchema>;
