using System.Text.Json.Serialization;
using Client;
using OneOf;

namespace Client;

public class TraceResponseV2
{
    [JsonPropertyName("submissionId")]
    public Guid SubmissionId { get; init; }

    [JsonPropertyName("lineNumber")]
    public int LineNumber { get; init; }

    [JsonPropertyName("file")]
    public TracedFile File { get; init; }

    [JsonPropertyName("returnValue")]
    public OneOf<DebugVariableValue._IntegerValue, DebugVariableValue._BooleanValue, DebugVariableValue._DoubleValue, DebugVariableValue._StringValue, DebugVariableValue._CharValue, DebugVariableValue._MapValue, DebugVariableValue._ListValue, DebugVariableValue._BinaryTreeNodeValue, DebugVariableValue._SinglyLinkedListNodeValue, DebugVariableValue._DoublyLinkedListNodeValue, DebugVariableValue._UndefinedValue, DebugVariableValue._NullValue, DebugVariableValue._GenericValue>? ReturnValue { get; init; }

    [JsonPropertyName("expressionLocation")]
    public ExpressionLocation? ExpressionLocation { get; init; }

    [JsonPropertyName("stack")]
    public StackInformation Stack { get; init; }

    [JsonPropertyName("stdout")]
    public string? Stdout { get; init; }
}
