using SeedAliasExtends.Core;

#nullable enable

namespace SeedAliasExtends.Core;

/// <summary>
/// This exception type will be thrown for any non-2XX API responses.
/// </summary>
public class SeedAliasExtendsApiException(string message, int statusCode, object body)
    : SeedAliasExtendsException(message)
{
    /// <summary>
    /// The error code of the response that triggered the exception.
    /// </summary>
    public int StatusCode => statusCode;

    /// <summary>
    /// The body of the response that triggered the exception.
    /// </summary>
    public object Body => body;

    public override string ToString()
    {
        return $"SeedAliasExtendsApiException {{ message: {Message}, statusCode: {StatusCode}, body: {Body} }}";
    }
}
