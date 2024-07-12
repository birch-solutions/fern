using System.Text.Json;
using System.Text.Json.Serialization;
using Newtonsoft.Json.Linq;
using NUnit.Framework;
using SeedExamples;

#nullable enable

namespace SeedExamples.Test;

[TestFixture]
public class ExceptionInfoTest
{
    [Test]
    public void TestSerialization()
    {
        var inputJson =
            @"
        {
  ""exceptionType"": ""Unavailable"",
  ""exceptionMessage"": ""This component is unavailable!"",
  ""exceptionStacktrace"": ""<logs>""
}
";

        var expectedObject = new ExceptionInfo
        {
            ExceptionType = "Unavailable",
            ExceptionMessage = "This component is unavailable!",
            ExceptionStacktrace = "<logs>"
        };

        var serializerOptions = new JsonSerializerOptions
        {
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
        };

        var deserializedObject = JsonSerializer.Deserialize<ExceptionInfo>(
            inputJson,
            serializerOptions
        );
        Assert.That(expectedObject, Is.EqualTo(deserializedObject));

        var serializedJson = JsonSerializer.Serialize(deserializedObject, serializerOptions);
        Assert.That(JToken.DeepEquals(JToken.Parse(inputJson), JToken.Parse(serializedJson)));
    }
}
