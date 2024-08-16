/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.api.model;

import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.seed.api.core.ObjectMappers;
import java.io.IOException;
import java.util.Map;
import java.util.Objects;

@JsonDeserialize(using = Metadata.Deserializer.class)
public final class Metadata {
    private final Object value;

    private final int type;

    private Metadata(Object value, int type) {
        this.value = value;
        this.type = type;
    }

    @JsonValue
    public Object get() {
        return this.value;
    }

    public <T> T visit(Visitor<T> visitor) {
        if (this.type == 0) {
            return visitor.visitMapOfStringToMetadataValue((Map<String, MetadataValue>) this.value);
        } else if (this.type == 1) {
            return visitor.visitMapOfStringToUnknown((Map<String, Object>) this.value);
        }
        throw new IllegalStateException("Failed to visit value. This should never happen.");
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof Metadata && equalTo((Metadata) other);
    }

    private boolean equalTo(Metadata other) {
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

    public static Metadata ofMapOfStringToMetadataValue(Map<String, MetadataValue> value) {
        return new Metadata(value, 0);
    }

    public static Metadata ofMapOfStringToUnknown(Map<String, Object> value) {
        return new Metadata(value, 1);
    }

    public interface Visitor<T> {
        T visitMapOfStringToMetadataValue(Map<String, MetadataValue> value);

        T visitMapOfStringToUnknown(Map<String, Object> value);
    }

    static final class Deserializer extends StdDeserializer<Metadata> {
        Deserializer() {
            super(Metadata.class);
        }

        @java.lang.Override
        public Metadata deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
            Object value = p.readValueAs(Object.class);
            try {
                return ofMapOfStringToMetadataValue(ObjectMappers.JSON_MAPPER.convertValue(
                        value, new TypeReference<Map<String, MetadataValue>>() {}));
            } catch (IllegalArgumentException e) {
            }
            try {
                return ofMapOfStringToUnknown(
                        ObjectMappers.JSON_MAPPER.convertValue(value, new TypeReference<Map<String, Object>>() {}));
            } catch (IllegalArgumentException e) {
            }
            throw new JsonParseException(p, "Failed to deserialize");
        }
    }
}
