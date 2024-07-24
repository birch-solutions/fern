/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.serverSentEvents.core;

import java.io.FilterReader;
import java.io.IOException;
import java.io.Reader;
import okhttp3.Response;

/**
 * A custom Reader that wraps the original Reader and ensures that the
 * OkHttp Response object is properly closed when the reader is closed.
 *
 * This class extends FilterReader and takes an OkHttp Response object as an additional
 * parameter. It overrides the close method to close both the Reader and the Response
 * object, ensuring proper resource management and preventing premature closure of the underlying
 * HTTP connection.
 */
public class ResponseBodyReader extends FilterReader {
    private final Response response;

    /**
     * Constructs a ResponseBodyReader that wraps the given Reader and associates it
     * with the provided OkHttp Response object.
     *
     * @param in the original Reader to be wrapped
     * @param response the OkHttp Response object associated with the Reader
     */
    public ResponseBodyReader(Reader in, Response response) {
        super(in);
        this.response = response;
    }

    /**
     * Closes the Reader and the associated OkHttp Response object. This ensures that the
     * underlying HTTP connection is properly closed after the reader is no longer needed.
     *
     * @throws IOException if an I/O error occurs
     */
    @Override
    public void close() throws IOException {
        super.close();
        response.close(); // Ensure the response is closed when the reader is closed
    }
}
