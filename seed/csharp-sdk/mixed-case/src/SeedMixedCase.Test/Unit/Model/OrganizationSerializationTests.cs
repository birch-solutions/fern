using System.Text.Json;
using System.Text.Json.Serialization;
using Newtonsoft.Json.Linq;
using NUnit.Framework;
using SeedMixedCase;

#nullable enable

namespace SeedMixedCase.Test;

[TestFixture]
public class OrganizationSerializationTests
{
    [Test]
    public void OrganizationSerializationTest()
    {
        var inputJson =
            @"
        {
  ""name"": ""orgName""
}
";

        var expectedObject = new Organization { Name = "orgName" };

        var serializerOptions = new JsonSerializerOptions
        {
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
        };

        var deserializedObject = JsonSerializer.Deserialize<Organization>(
            inputJson,
            serializerOptions
        );
        Assert.That(expectedObject, Is.EqualTo(deserializedObject));

        var serializedJson = JsonSerializer.Serialize(deserializedObject, serializerOptions);
        Assert.That(JToken.DeepEquals(JToken.Parse(inputJson), JToken.Parse(serializedJson)));
    }
}
