using System.Threading.Tasks;
using FluentAssertions.Json;
using Newtonsoft.Json.Linq;
using NUnit.Framework;
using SeedExamples.Core;
using SeedExamples.Test.Wire;

#nullable enable

namespace SeedExamples.Test;

[TestFixture]
public class GetMovieTest : BaseWireTest
{
    [Test]
    public async Task WireTest_1()
    {
        const string mockResponse = """
            {
              "id": "movie-c06a4ad7",
              "prequel": "movie-cv9b914f",
              "title": "The Boy and the Heron",
              "from": "Hayao Miyazaki",
              "rating": 8,
              "type": "movie",
              "tag": "tag-wf9as23d",
              "metadata": {
                "actors": [
                  "Christian Bale",
                  "Florence Pugh",
                  "Willem Dafoe"
                ],
                "releaseDate": "2023-12-08",
                "ratings": {
                  "rottenTomatoes": 97,
                  "imdb": 7.6
                }
              }
            }
            """;

        Server
            .Given(
                WireMock
                    .RequestBuilders.Request.Create()
                    .WithPath("/movie/movie-c06a4ad7")
                    .UsingGet()
            )
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = await Client.Service.GetMovieAsync("movie-c06a4ad7", RequestOptions);
        JToken
            .Parse(mockResponse)
            .Should()
            .BeEquivalentTo(JToken.Parse(JsonUtils.Serialize(response)));
    }

    [Test]
    public async Task WireTest_2()
    {
        const string mockResponse = """
            {
              "id": "movie-c06a4ad7",
              "prequel": "movie-cv9b914f",
              "title": "The Boy and the Heron",
              "from": "Hayao Miyazaki",
              "rating": 8,
              "type": "movie",
              "tag": "tag-wf9as23d",
              "metadata": {
                "actors": [
                  "Christian Bale",
                  "Florence Pugh",
                  "Willem Dafoe"
                ],
                "releaseDate": "2023-12-08",
                "ratings": {
                  "rottenTomatoes": 97,
                  "imdb": 7.6
                }
              }
            }
            """;

        Server
            .Given(
                WireMock
                    .RequestBuilders.Request.Create()
                    .WithPath("/movie/movie-c06a4ad7")
                    .UsingGet()
            )
            .RespondWith(
                WireMock
                    .ResponseBuilders.Response.Create()
                    .WithStatusCode(200)
                    .WithBody(mockResponse)
            );

        var response = await Client.Service.GetMovieAsync("movie-c06a4ad7", RequestOptions);
        JToken
            .Parse(mockResponse)
            .Should()
            .BeEquivalentTo(JToken.Parse(JsonUtils.Serialize(response)));
    }
}
