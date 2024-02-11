/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SeedExtends from "..";
/**
 * @example
 *     {
 *         docs: "Types extend this type to include a docs and json property.",
 *         raw: "{\"docs\": true, \"json\": true}"
 *     }
 */
export interface Json extends SeedExtends.Docs {
    raw: string;
}
