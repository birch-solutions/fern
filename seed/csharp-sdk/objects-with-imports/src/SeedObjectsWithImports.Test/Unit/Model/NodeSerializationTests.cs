using System.Text.Json;
using System.Text.Json.Serialization;
using Newtonsoft.Json.Linq;
using NUnit.Framework;
using SeedObjectsWithImports;

#nullable enable

namespace SeedObjectsWithImports.Test;

[TestFixture]
public class NodeSerializationTests
{
    [Test]
    public void NodeSerializationTest_1()
    {
        var inputJson =
            @"
        {
  ""id"": ""node-8dvgfja2"",
  ""label"": ""left"",
  ""metadata"": {
    ""id"": ""metadata-kjasf923"",
    ""data"": {
      ""foo"": ""bar"",
      ""baz"": ""qux""
    }
  }
}
";

        var expectedObject = new Node
        {
            Id = "node-8dvgfja2",
            Label = "left",
            Metadata = new Metadata
            {
                Id = "metadata-kjasf923",
                Data = new Dictionary<string, string>() { { "foo", "bar" }, { "baz", "qux" }, }
            }
        };

        var serializerOptions = new JsonSerializerOptions
        {
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
        };

        var deserializedObject = JsonSerializer.Deserialize<Node>(inputJson, serializerOptions);
        Assert.That(expectedObject, Is.EqualTo(deserializedObject));

        var serializedJson = JsonSerializer.Serialize(deserializedObject, serializerOptions);
        Assert.That(JToken.DeepEquals(JToken.Parse(inputJson), JToken.Parse(serializedJson)));
    }

    [Test]
    public void NodeSerializationTest_2()
    {
        var inputJson =
            @"
        {
  ""id"": ""node-cwda9fi2x"",
  ""label"": ""right"",
  ""metadata"": {
    ""id"": ""metadata-lkasdfv9j"",
    ""data"": {
      ""one"": ""two"",
      ""three"": ""four""
    }
  }
}
";

        var expectedObject = new Node
        {
            Id = "node-cwda9fi2x",
            Label = "right",
            Metadata = new Metadata
            {
                Id = "metadata-lkasdfv9j",
                Data = new Dictionary<string, string>() { { "one", "two" }, { "three", "four" }, }
            }
        };

        var serializerOptions = new JsonSerializerOptions
        {
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
        };

        var deserializedObject = JsonSerializer.Deserialize<Node>(inputJson, serializerOptions);
        Assert.That(expectedObject, Is.EqualTo(deserializedObject));

        var serializedJson = JsonSerializer.Serialize(deserializedObject, serializerOptions);
        Assert.That(JToken.DeepEquals(JToken.Parse(inputJson), JToken.Parse(serializedJson)));
    }
}
