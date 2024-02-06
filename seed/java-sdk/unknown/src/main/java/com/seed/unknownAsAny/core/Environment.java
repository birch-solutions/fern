/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.unknownAsAny.core;

public final class Environment {
    private final String url;

    private Environment(String url) {
        this.url = url;
    }

    public String getUrl() {
        return this.url;
    }

    public static Environment custom(String url) {
        return new Environment(url);
    }
}
