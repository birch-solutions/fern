/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedExamples from "../../..";

/**
 * @example
 *     {
 *         id: "movie-c06a4ad7",
 *         prequel: "movie-cv9b914f",
 *         title: "The Boy and the Heron",
 *         from: "Hayao Miyazaki",
 *         rating: 8,
 *         type: "movie",
 *         tag: "tag-wf9as23d",
 *         metadata: {
 *             "actors": [
 *                 "Christian Bale",
 *                 "Florence Pugh",
 *                 "Willem Dafoe"
 *             ],
 *             "releaseDate": "2023-12-08",
 *             "ratings": {
 *                 "rottenTomatoes": 97,
 *                 "imdb": 7.6
 *             }
 *         }
 *     }
 */
export interface Movie {
    id: SeedExamples.MovieId;
    prequel?: SeedExamples.MovieId;
    title: string;
    from: string;
    /** The rating scale is one to five stars */
    rating: number;
    type: "movie";
    tag: SeedExamples.commons.Tag;
    book?: string;
    metadata: Record<string, unknown>;
}
