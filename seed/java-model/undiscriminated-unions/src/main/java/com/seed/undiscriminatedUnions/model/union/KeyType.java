/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.undiscriminatedUnions.model.union;

import com.fasterxml.jackson.annotation.JsonValue;

public enum KeyType {
    NAME("name"),

    VALUE("value");

    private final String value;

    KeyType(String value) {
        this.value = value;
    }

    @JsonValue
    @java.lang.Override
    public String toString() {
        return this.value;
    }
}
