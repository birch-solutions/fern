/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedExamples from "../../../../api/index";
import * as core from "../../../../core";

export const Movie: core.serialization.ObjectSchema<serializers.Movie.Raw, SeedExamples.Movie> =
    core.serialization.object({
        id: core.serialization.lazy(() => serializers.MovieId),
        prequel: core.serialization.lazy(() => serializers.MovieId).optional(),
        title: core.serialization.string(),
        from: core.serialization.string(),
        rating: core.serialization.number(),
        type: core.serialization.stringLiteral("movie"),
        tag: core.serialization.lazy(() => serializers.commons.Tag),
        book: core.serialization.string().optional(),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
        revenue: core.serialization.number(),
    });

export declare namespace Movie {
    interface Raw {
        id: serializers.MovieId.Raw;
        prequel?: serializers.MovieId.Raw | null;
        title: string;
        from: string;
        rating: number;
        type: "movie";
        tag: serializers.commons.Tag.Raw;
        book?: string | null;
        metadata: Record<string, unknown>;
        revenue: number;
    }
}
