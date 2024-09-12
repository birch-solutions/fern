import { ROOT_API_FILENAME } from "@fern-api/configuration";
import { RelativeFilePath } from "@fern-api/fs-utils";
import { PrimitiveSchemaValue, Schema } from "@fern-api/openapi-ir-sdk";
import { buildHeader } from "./buildHeader";
import { OpenApiIrConverterContext } from "./OpenApiIrConverterContext";
import { wrapTypeReferenceAsOptional } from "./utils/wrapTypeReferenceAsOptional";

export function buildIdempotencyHeaders(context: OpenApiIrConverterContext): void {
    for (const header of context.ir.idempotencyHeaders ?? []) {
        const convertedHeader = buildHeader({
            header: {
                ...header,
                schema:
                    header.schema ??
                    Schema.primitive({
                        description: undefined,
                        availability: undefined,
                        generatedName: "",
                        title: undefined,
                        groupName: undefined,
                        nameOverride: undefined,
                        schema: PrimitiveSchemaValue.string({
                            default: undefined,
                            pattern: undefined,
                            format: undefined,
                            minLength: undefined,
                            maxLength: undefined
                        })
                    }),
                name: header.name ?? header.header,
                parameterNameOverride: undefined,
                description: undefined,
                availability: undefined,
                source: undefined
            },
            fileContainingReference: RelativeFilePath.of(ROOT_API_FILENAME),
            context
        });
        context.builder.addIdempotencyHeader({
            name: header.header,
            schema: wrapTypeReferenceAsOptional(convertedHeader)
        });
    }
}
