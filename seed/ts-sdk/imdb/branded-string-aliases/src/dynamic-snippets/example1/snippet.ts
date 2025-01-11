import { SeedApiClient, SeedApi } from "../..";

async function main() {
    const client = new SeedApiClient({
        environment: "https://api.fern.com",
        token: "<token>",
    });
    await client.imdb.getMovie(SeedApi.imdb.MovieId("movieId"));
}
main();
