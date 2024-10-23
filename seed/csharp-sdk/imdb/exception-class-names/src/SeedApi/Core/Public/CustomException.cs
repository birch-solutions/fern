using System;

#nullable enable

namespace SeedApi;

/// <summary>
/// Base exception class for all exceptions thrown by the SDK.
/// </summary>
public class CustomException(string message, Exception? innerException = null)
    : Exception(message, innerException) { }
