using System;

#nullable enable

namespace SeedMultiLineDocs.Core;

public class SeedMultiLineDocsException(string message, Exception? innerException = null)
    : Exception(message, innerException) { }
