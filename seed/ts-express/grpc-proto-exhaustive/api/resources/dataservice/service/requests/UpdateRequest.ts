/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedApi from "../../../../index";

export interface UpdateRequest {
    id: string;
    values?: number[];
    setMetadata?: SeedApi.Metadata;
    namespace?: string;
    indexedData?: SeedApi.IndexedData;
}
