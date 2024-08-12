namespace SeedMultiUrlEnvironmentNoDefault;

/// <summary>
/// This exception type will be thrown for any non-2XX API responses.
/// </summary>
public class SeedMultiUrlEnvironmentNoDefaultApiException(
    string message,
    int statusCode,
    object body
) : SeedMultiUrlEnvironmentNoDefaultException(message)
{
    /// <summary>
    /// The error code of the response that triggered the exception.
    /// </summary>
    public int StatusCode { get; } = statusCode;

    /// <summary>
    /// The body of the response that triggered the exception.
    /// </summary>
    public object Body { get; } = body;
}
