using System.Text.Json;
using System.Text.Json.Serialization;
using Newtonsoft.Json.Linq;
using NUnit.Framework;
using SeedExtends;

#nullable enable

namespace SeedExtends.Test;

[TestFixture]
public class ExampleTypeSerializationTests
{
    [Test]
    public void ExampleTypeSerializationTest()
    {
        var inputJson =
            @"
        {
  ""docs"": ""This is an example type."",
  ""name"": ""Example""
}
";

        var expectedObject = new ExampleType
        {
            Docs = "This is an example type.",
            Name = "Example"
        };

        var serializerOptions = new JsonSerializerOptions
        {
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
        };

        var deserializedObject = JsonSerializer.Deserialize<ExampleType>(
            inputJson,
            serializerOptions
        );
        Assert.That(expectedObject, Is.EqualTo(deserializedObject));

        var serializedJson = JsonSerializer.Serialize(deserializedObject, serializerOptions);
        Assert.That(JToken.DeepEquals(JToken.Parse(inputJson), JToken.Parse(serializedJson)));
    }
}
