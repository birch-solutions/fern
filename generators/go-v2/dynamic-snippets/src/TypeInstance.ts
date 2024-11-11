import { NameAndWireValue } from "@fern-fern/ir-sdk/api";
import { dynamic as DynamicSnippets } from "@fern-fern/ir-sdk/api";

/**
 * A type instance that can be converted into a language-specific AST node.
 *
 * The 'type' and 'value' are used to convert the AST node itself, and the name
 * is (optionally) used within the dynamic snippet, e.g. for named fields.
 */
export interface TypeInstance {
    name: NameAndWireValue;
    typeReference: DynamicSnippets.TypeReference;
    value: unknown;
}
