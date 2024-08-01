using System;

#nullable enable

namespace SeedStreaming.Core;

/// <summary>
/// Base exception class for all exceptions thrown by the SDK.
/// </summary>
public class SeedStreamingException(string message, Exception? innerException = null)
    : Exception(message, innerException) { }
