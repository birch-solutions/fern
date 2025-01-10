/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedApi from "../../../../api/index";
import * as core from "../../../../core";

export const MovieId: core.serialization.Schema<serializers.MovieId.Raw, SeedApi.MovieId> = core.serialization
    .string()
    .transform({
        transform: SeedApi.MovieId,
        untransform: (value) => value,
    });

export declare namespace MovieId {
    export type Raw = string;
}
