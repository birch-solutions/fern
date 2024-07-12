using System.Text.Json;
using System.Text.Json.Serialization;
using Newtonsoft.Json.Linq;
using NUnit.Framework;
using SeedObjectsWithImports;

#nullable enable

namespace SeedObjectsWithImports.Test;

[TestFixture]
public class FileSerializationTests
{
    [Test]
    public void FileSerializationTest_1()
    {
        var inputJson =
            @"
        {
  ""name"": ""file.txt"",
  ""contents"": ""..."",
  ""info"": ""REGULAR""
}
";

        var expectedObject = new File
        {
            Name = "file.txt",
            Contents = "...",
            Info = FileInfo.Regular
        };

        var serializerOptions = new JsonSerializerOptions
        {
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
        };

        var deserializedObject = JsonSerializer.Deserialize<File>(inputJson, serializerOptions);
        Assert.That(expectedObject, Is.EqualTo(deserializedObject));

        var serializedJson = JsonSerializer.Serialize(deserializedObject, serializerOptions);
        Assert.That(JToken.DeepEquals(JToken.Parse(inputJson), JToken.Parse(serializedJson)));
    }

    [Test]
    public void FileSerializationTest_2()
    {
        var inputJson =
            @"
        {
  ""name"": ""another_file.txt"",
  ""contents"": ""..."",
  ""info"": ""REGULAR""
}
";

        var expectedObject = new File
        {
            Name = "another_file.txt",
            Contents = "...",
            Info = FileInfo.Regular
        };

        var serializerOptions = new JsonSerializerOptions
        {
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
        };

        var deserializedObject = JsonSerializer.Deserialize<File>(inputJson, serializerOptions);
        Assert.That(expectedObject, Is.EqualTo(deserializedObject));

        var serializedJson = JsonSerializer.Serialize(deserializedObject, serializerOptions);
        Assert.That(JToken.DeepEquals(JToken.Parse(inputJson), JToken.Parse(serializedJson)));
    }
}
