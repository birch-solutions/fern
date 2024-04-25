/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SeedExamples from "../../../index";
/**
 * @example
 *     {
 *         id: "movie-sda231x",
 *         title: "Pulp Fiction",
 *         from: "Quentin Tarantino",
 *         rating: 8.5,
 *         type: "movie",
 *         tag: "tag-12efs9dv",
 *         cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman", "Bruce Willis"],
 *         metadata: {
 *             "academyAward": true,
 *             "releaseDate": "2023-12-08",
 *             "ratings": {
 *                 "rottenTomatoes": 97,
 *                 "imdb": 7.6
 *             }
 *         }
 *     }
 */
export interface ExtendedMovie extends SeedExamples.Movie {
    cast: string[];
}
