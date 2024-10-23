/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.anyAuth.core;

import java.io.IOException;
import java.io.InputStream;
import java.util.Objects;
import okhttp3.MediaType;
import okhttp3.RequestBody;
import okhttp3.internal.Util;
import okio.BufferedSink;
import okio.Okio;
import okio.Source;
import org.jetbrains.annotations.Nullable;

/**
 * A custom implementation of OkHttp's RequestBody that wraps an InputStream.
 * This class allows streaming of data from an InputStream directly to an HTTP request body,
 * which is useful for file uploads or sending large amounts of data without loading it all into memory.
 */
public class InputStreamRequestBody extends RequestBody {
    private final InputStream inputStream;
    private final MediaType contentType;

    /**
     * Constructs an InputStreamRequestBody with the specified content type and input stream.
     *
     * @param contentType the MediaType of the content, or null if not known
     * @param inputStream the InputStream containing the data to be sent
     * @throws NullPointerException if inputStream is null
     */
    public InputStreamRequestBody(@Nullable MediaType contentType, InputStream inputStream) {
        this.contentType = contentType;
        this.inputStream = Objects.requireNonNull(inputStream, "inputStream == null");
    }

    /**
     * Returns the content type of this request body.
     *
     * @return the MediaType of the content, or null if not specified
     */
    @Nullable
    @Override
    public MediaType contentType() {
        return contentType;
    }

    /**
     * Returns the content length of this request body, if known.
     * This method attempts to determine the length using the InputStream's available() method,
     * which may not always accurately reflect the total length of the stream.
     *
     * @return the content length, or -1 if the length is unknown
     * @throws IOException if an I/O error occurs
     */
    @Override
    public long contentLength() throws IOException {
        return inputStream.available() == 0 ? -1 : inputStream.available();
    }

    /**
     * Writes the content of the InputStream to the given BufferedSink.
     * This method is responsible for transferring the data from the InputStream to the network request.
     *
     * @param sink the BufferedSink to write the content to
     * @throws IOException if an I/O error occurs during writing
     */
    @Override
    public void writeTo(BufferedSink sink) throws IOException {
        Source source = null;
        try {
            source = Okio.source(inputStream);
            sink.writeAll(source);
        } finally {
            Util.closeQuietly(Objects.requireNonNull(source));
        }
    }
}
