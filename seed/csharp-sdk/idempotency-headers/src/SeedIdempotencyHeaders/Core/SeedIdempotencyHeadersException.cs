using System;

#nullable enable

namespace SeedIdempotencyHeaders.Core;

/// <summary>
/// Base exception class for all exceptions thrown by the SDK.
/// </summary>
public class SeedIdempotencyHeadersException(string message, Exception? innerException = null)
    : Exception(message, innerException) { }
