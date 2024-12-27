/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.api.core;

import java.io.InputStream;
import java.util.Objects;
import okhttp3.MediaType;
import okhttp3.RequestBody;
import org.jetbrains.annotations.Nullable;

/**
 * Represents a file stream with associated metadata for file uploads.
 */
public class FileStream {
    private final InputStream inputStream;
    private final String fileName;
    private final MediaType contentType;

    /**
     * Constructs a FileStream with the given input stream and optional metadata.
     *
     * @param inputStream The input stream of the file content. Must not be null.
     * @param fileName The name of the file, or null if unknown.
     * @param contentType The MIME type of the file content, or null if unknown.
     * @throws NullPointerException if inputStream is null
     */
    public FileStream(InputStream inputStream, @Nullable String fileName, @Nullable MediaType contentType) {
        this.inputStream = Objects.requireNonNull(inputStream, "Input stream cannot be null");
        this.fileName = fileName;
        this.contentType = contentType;
    }

    public FileStream(InputStream inputStream) {
        this(inputStream, null, null);
    }

    public InputStream getInputStream() {
        return inputStream;
    }

    @Nullable
    public String getFileName() {
        return fileName;
    }

    @Nullable
    public MediaType getContentType() {
        return contentType;
    }

    /**
     * Creates a RequestBody suitable for use with OkHttp client.
     *
     * @return A RequestBody instance representing this file stream.
     */
    public RequestBody toRequestBody() {
        return new InputStreamRequestBody(contentType, inputStream);
    }
}
