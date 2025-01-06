/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedApi from "../../api/index";
import * as core from "../../core";
import { Metadata } from "./Metadata";
import { IndexedData } from "./IndexedData";

export const ScoredColumn: core.serialization.ObjectSchema<serializers.ScoredColumn.Raw, SeedApi.ScoredColumn> =
    core.serialization.object({
        id: core.serialization.string(),
        score: core.serialization.number().optional(),
        values: core.serialization.list(core.serialization.number()).optional(),
        metadata: Metadata.optional(),
        indexedData: IndexedData.optional(),
    });

export declare namespace ScoredColumn {
    export interface Raw {
        id: string;
        score?: number | null;
        values?: number[] | null;
        metadata?: Metadata.Raw | null;
        indexedData?: IndexedData.Raw | null;
    }
}
