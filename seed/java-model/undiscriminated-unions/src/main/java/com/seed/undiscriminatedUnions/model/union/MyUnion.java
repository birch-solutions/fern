/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.undiscriminatedUnions.model.union;

import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.seed.undiscriminatedUnions.core.ObjectMappers;
import java.io.IOException;
import java.util.List;
import java.util.Objects;

@JsonDeserialize(using = MyUnion.Deserializer.class)
public final class MyUnion {
    private final Object value;

    private final int type;

    private MyUnion(Object value, int type) {
        this.value = value;
        this.type = type;
    }

    @JsonValue
    public Object get() {
        return this.value;
    }

    public <T> T visit(Visitor<T> visitor) {
        if (this.type == 0) {
            return visitor.visit((String) this.value);
        } else if (this.type == 1) {
            return visitor.visitListOfStrings((List<String>) this.value);
        } else if (this.type == 2) {
            return visitor.visit((int) this.value);
        } else if (this.type == 3) {
            return visitor.visitListOfIntegers((List<Integer>) this.value);
        } else if (this.type == 4) {
            return visitor.visitListOfListsOfIntegers((List<List<Integer>>) this.value);
        }
        throw new IllegalStateException("Failed to visit value. This should never happen.");
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof MyUnion && equalTo((MyUnion) other);
    }

    private boolean equalTo(MyUnion other) {
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

    public static MyUnion of(String value) {
        return new MyUnion(value, 0);
    }

    public static MyUnion ofListOfStrings(List<String> value) {
        return new MyUnion(value, 1);
    }

    public static MyUnion of(int value) {
        return new MyUnion(value, 2);
    }

    public static MyUnion ofListOfIntegers(List<Integer> value) {
        return new MyUnion(value, 3);
    }

    public static MyUnion ofListOfListsOfIntegers(List<List<Integer>> value) {
        return new MyUnion(value, 4);
    }

    public interface Visitor<T> {
        T visit(String value);

        T visitListOfStrings(List<String> value);

        T visit(int value);

        T visitListOfIntegers(List<Integer> value);

        T visitListOfListsOfIntegers(List<List<Integer>> value);
    }

    static final class Deserializer extends StdDeserializer<MyUnion> {
        Deserializer() {
            super(MyUnion.class);
        }

        @java.lang.Override
        public MyUnion deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
            Object value = p.readValueAs(Object.class);
            try {
                return of(ObjectMappers.JSON_MAPPER.convertValue(value, String.class));
            } catch (IllegalArgumentException e) {
            }
            try {
                return ofListOfStrings(
                        ObjectMappers.JSON_MAPPER.convertValue(value, new TypeReference<List<String>>() {}));
            } catch (IllegalArgumentException e) {
            }
            if (value instanceof Integer) {
                return of((Integer) value);
            }
            try {
                return ofListOfIntegers(
                        ObjectMappers.JSON_MAPPER.convertValue(value, new TypeReference<List<Integer>>() {}));
            } catch (IllegalArgumentException e) {
            }
            try {
                return ofListOfListsOfIntegers(
                        ObjectMappers.JSON_MAPPER.convertValue(value, new TypeReference<List<List<Integer>>>() {}));
            } catch (IllegalArgumentException e) {
            }
            throw new JsonParseException(p, "Failed to deserialize");
        }
    }
}
