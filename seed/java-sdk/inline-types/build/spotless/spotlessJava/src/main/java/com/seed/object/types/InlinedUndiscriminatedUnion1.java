/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.object.types;

import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.seed.object.core.ObjectMappers;
import java.io.IOException;
import java.util.Objects;

@JsonDeserialize(using = InlinedUndiscriminatedUnion1.Deserializer.class)
public final class InlinedUndiscriminatedUnion1 {
    private final Object value;

    private final int type;

    private InlinedUndiscriminatedUnion1(Object value, int type) {
        this.value = value;
        this.type = type;
    }

    @JsonValue
    public Object get() {
        return this.value;
    }

    public <T> T visit(Visitor<T> visitor) {
        if (this.type == 0) {
            return visitor.visit((InlineType1) this.value);
        } else if (this.type == 1) {
            return visitor.visit((InlineType2) this.value);
        }
        throw new IllegalStateException("Failed to visit value. This should never happen.");
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof InlinedUndiscriminatedUnion1 && equalTo((InlinedUndiscriminatedUnion1) other);
    }

    private boolean equalTo(InlinedUndiscriminatedUnion1 other) {
        return value.equals(other.value);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.value);
    }

    @java.lang.Override
    public String toString() {
        return this.value.toString();
    }

    public static InlinedUndiscriminatedUnion1 of(InlineType1 value) {
        return new InlinedUndiscriminatedUnion1(value, 0);
    }

    public static InlinedUndiscriminatedUnion1 of(InlineType2 value) {
        return new InlinedUndiscriminatedUnion1(value, 1);
    }

    public interface Visitor<T> {
        T visit(InlineType1 value);

        T visit(InlineType2 value);
    }

    static final class Deserializer extends StdDeserializer<InlinedUndiscriminatedUnion1> {
        Deserializer() {
            super(InlinedUndiscriminatedUnion1.class);
        }

        @java.lang.Override
        public InlinedUndiscriminatedUnion1 deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
            Object value = p.readValueAs(Object.class);
            try {
                return of(ObjectMappers.JSON_MAPPER.convertValue(value, InlineType1.class));
            } catch (IllegalArgumentException e) {
            }
            try {
                return of(ObjectMappers.JSON_MAPPER.convertValue(value, InlineType2.class));
            } catch (IllegalArgumentException e) {
            }
            throw new JsonParseException(p, "Failed to deserialize");
        }
    }
}
