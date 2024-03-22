import { z } from "zod";
import { AbstractOpenAPIV3ParserContext } from "./openapi/v3/AbstractOpenAPIV3ParserContext";
import { OpenAPIExtension } from "./openapi/v3/extensions/extensions";
import { FernOpenAPIExtension } from "./openapi/v3/extensions/fernExtensions";
import { TypedExtensionId } from "./openapi/v3/extensions/id";
import { ReadmeOpenAPIExtension } from "./openapi/v3/extensions/readmeExtensions";

type Extension<T> =
    | FernOpenAPIExtension
    | FernOpenAPIExtension[]
    | OpenAPIExtension
    | OpenAPIExtension[]
    | ReadmeOpenAPIExtension
    | TypedExtensionId<T>;

/**
 * Get an extension from an object. If the extension is an array, the first
 * extension that is found will be returned.
 *
 * @param object The object to get the extension from.
 * @param extension The extension to get.
 */
export function getExtension<T>(object: object, extension: Extension<T>): T | undefined {
    const extensions = Array.isArray(extension) ? extension : [extension];
    for (const extension of extensions) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const extensionValue = (object as any)[extension];
        if (extensionValue != null) {
            return extensionValue as T;
        }
    }
    return undefined;
}

export function getExtensionAndValidate<T>(
    object: object,
    extension: Extension<T>,
    schema: z.ZodSchema,
    context: AbstractOpenAPIV3ParserContext
): T | undefined {
    try {
        const extensionValue = getExtension<T>(object, extension);
        if (extensionValue != null) {
            return schema.parse(extensionValue);
        }
    } catch (e) {
        context.logger.error(`Failed to parse ${extension}`);
    }
    return undefined;
}
