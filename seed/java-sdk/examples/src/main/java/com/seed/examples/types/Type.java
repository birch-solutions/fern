/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.examples.types;

import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.seed.examples.core.ObjectMappers;
import java.io.IOException;
import java.util.Objects;

@JsonDeserialize(using = Type.Deserializer.class)
public final class Type {
    private final Object value;

    private final int type;

    private Type(Object value, int type) {
        this.value = value;
        this.type = type;
    }

    @JsonValue
    public Object get() {
        return this.value;
    }

    public <T> T visit(Visitor<T> visitor) {
        if (this.type == 0) {
            return visitor.visit((BasicType) this.value);
        } else if (this.type == 1) {
            return visitor.visit((ComplexType) this.value);
        }
        throw new IllegalStateException("Failed to visit value. This should never happen.");
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof Type && equalTo((Type) other);
    }

    private boolean equalTo(Type other) {
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

    public static Type of(BasicType value) {
        return new Type(value, 0);
    }

    public static Type of(ComplexType value) {
        return new Type(value, 1);
    }

    public interface Visitor<T> {
        T visit(BasicType value);

        T visit(ComplexType value);
    }

    static final class Deserializer extends StdDeserializer<Type> {
        Deserializer() {
            super(Type.class);
        }

        @java.lang.Override
        public Type deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
            Object value = p.readValueAs(Object.class);
            try {
                return of(ObjectMappers.JSON_MAPPER.convertValue(value, BasicType.class));
            } catch (IllegalArgumentException e) {
            }
            try {
                return of(ObjectMappers.JSON_MAPPER.convertValue(value, ComplexType.class));
            } catch (IllegalArgumentException e) {
            }
            throw new JsonParseException(p, "Failed to deserialize");
        }
    }
}
