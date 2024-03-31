using System.Text.Json.Serialization;
using Client.V2;
using OneOf;
using Client;

namespace Client.V2;

public class TestCaseV2
{
    [JsonPropertyName("metadata")]
    public TestCaseMetadata Metadata { get; init; }

    [JsonPropertyName("implementation")]
    public OneOf<TestCaseImplementationReference._TemplateId, TestCaseImplementationReference._Implementation> Implementation { get; init; }

    [JsonPropertyName("arguments")]
    public Dictionary<string, OneOf<VariableValue._IntegerValue, VariableValue._BooleanValue, VariableValue._DoubleValue, VariableValue._StringValue, VariableValue._CharValue, VariableValue._MapValue, VariableValue._ListValue, VariableValue._BinaryTreeValue, VariableValue._SinglyLinkedListValue, VariableValue._DoublyLinkedListValue, VariableValue._NullValue>> Arguments { get; init; }

    [JsonPropertyName("expects")]
    public TestCaseExpects? Expects { get; init; }
}
