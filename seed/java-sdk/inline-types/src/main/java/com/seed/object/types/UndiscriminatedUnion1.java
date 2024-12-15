/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.object.types;

import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.seed.object.core.ObjectMappers;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

@JsonDeserialize(using = UndiscriminatedUnion1.Deserializer.class)
public final class UndiscriminatedUnion1 {
    private final Object value;

    private final int type;

    private UndiscriminatedUnion1(Object value, int type) {
        this.value = value;
        this.type = type;
    }

    @JsonValue
    public Object get() {
        return this.value;
    }

    public <T> T visit(Visitor<T> visitor) {
        if (this.type == 0) {
            return visitor.visit((UndiscriminatedUnion1InlineType1) this.value);
        } else if (this.type == 1) {
            return visitor.visit((UndiscriminatedUnion1InlineType2) this.value);
        } else if (this.type == 2) {
            return visitor.visit((UndiscriminatedUnion1DiscriminatedUnion1) this.value);
        } else if (this.type == 3) {
            return visitor.visit((UndiscriminatedUnion1DiscriminatedUnion1) this.value);
        } else if (this.type == 4) {
            return visitor.visit((UndiscriminatedUnion1InlineEnum1) this.value);
        } else if (this.type == 5) {
            return visitor.visit((String) this.value);
        } else if (this.type == 6) {
            return visitor.visit((List<UndiscriminatedUnion1InlineListItem1>) this.value);
        } else if (this.type == 7) {
            return visitor.visit((Set<UndiscriminatedUnion1InlineSetItem1>) this.value);
        } else if (this.type == 8) {
            return visitor.visit((Map<String, UndiscriminatedUnion1InlineMapItem1>) this.value);
        } else if (this.type == 9) {
            return visitor.visit((ReferenceType) this.value);
        }
        throw new IllegalStateException("Failed to visit value. This should never happen.");
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof UndiscriminatedUnion1 && equalTo((UndiscriminatedUnion1) other);
    }

    private boolean equalTo(UndiscriminatedUnion1 other) {
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

    public static UndiscriminatedUnion1 of(UndiscriminatedUnion1InlineType1 value) {
        return new UndiscriminatedUnion1(value, 0);
    }

    public static UndiscriminatedUnion1 of(UndiscriminatedUnion1InlineType2 value) {
        return new UndiscriminatedUnion1(value, 1);
    }

    public static UndiscriminatedUnion1 of(UndiscriminatedUnion1DiscriminatedUnion1 value) {
        return new UndiscriminatedUnion1(value, 2);
    }

    public static UndiscriminatedUnion1 of(UndiscriminatedUnion1DiscriminatedUnion1 value) {
        return new UndiscriminatedUnion1(value, 3);
    }

    public static UndiscriminatedUnion1 of(UndiscriminatedUnion1InlineEnum1 value) {
        return new UndiscriminatedUnion1(value, 4);
    }

    public static UndiscriminatedUnion1 of(String value) {
        return new UndiscriminatedUnion1(value, 5);
    }

    public static UndiscriminatedUnion1 of(List<UndiscriminatedUnion1InlineListItem1> value) {
        return new UndiscriminatedUnion1(value, 6);
    }

    public static UndiscriminatedUnion1 of(Set<UndiscriminatedUnion1InlineSetItem1> value) {
        return new UndiscriminatedUnion1(value, 7);
    }

    public static UndiscriminatedUnion1 of(Map<String, UndiscriminatedUnion1InlineMapItem1> value) {
        return new UndiscriminatedUnion1(value, 8);
    }

    public static UndiscriminatedUnion1 of(ReferenceType value) {
        return new UndiscriminatedUnion1(value, 9);
    }

    public interface Visitor<T> {
        T visit(UndiscriminatedUnion1InlineType1 value);

        T visit(UndiscriminatedUnion1InlineType2 value);

        T visit(UndiscriminatedUnion1DiscriminatedUnion1 value);

        T visit(UndiscriminatedUnion1DiscriminatedUnion1 value);

        T visit(UndiscriminatedUnion1InlineEnum1 value);

        T visit(String value);

        T visit(List<UndiscriminatedUnion1InlineListItem1> value);

        T visit(Set<UndiscriminatedUnion1InlineSetItem1> value);

        T visit(Map<String, UndiscriminatedUnion1InlineMapItem1> value);

        T visit(ReferenceType value);
    }

    static final class Deserializer extends StdDeserializer<UndiscriminatedUnion1> {
        Deserializer() {
            super(UndiscriminatedUnion1.class);
        }

        @java.lang.Override
        public UndiscriminatedUnion1 deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
            Object value = p.readValueAs(Object.class);
            try {
                return of(ObjectMappers.JSON_MAPPER.convertValue(value, UndiscriminatedUnion1InlineType1.class));
            } catch (IllegalArgumentException e) {
            }
            try {
                return of(ObjectMappers.JSON_MAPPER.convertValue(value, UndiscriminatedUnion1InlineType2.class));
            } catch (IllegalArgumentException e) {
            }
            try {
                return of(
                        ObjectMappers.JSON_MAPPER.convertValue(value, UndiscriminatedUnion1DiscriminatedUnion1.class));
            } catch (IllegalArgumentException e) {
            }
            try {
                return of(
                        ObjectMappers.JSON_MAPPER.convertValue(value, UndiscriminatedUnion1DiscriminatedUnion1.class));
            } catch (IllegalArgumentException e) {
            }
            try {
                return of(ObjectMappers.JSON_MAPPER.convertValue(value, UndiscriminatedUnion1InlineEnum1.class));
            } catch (IllegalArgumentException e) {
            }
            try {
                return of(ObjectMappers.JSON_MAPPER.convertValue(value, String.class));
            } catch (IllegalArgumentException e) {
            }
            try {
                return of(ObjectMappers.JSON_MAPPER.convertValue(
                        value, new TypeReference<List<UndiscriminatedUnion1InlineListItem1>>() {}));
            } catch (IllegalArgumentException e) {
            }
            try {
                return of(ObjectMappers.JSON_MAPPER.convertValue(
                        value, new TypeReference<Set<UndiscriminatedUnion1InlineSetItem1>>() {}));
            } catch (IllegalArgumentException e) {
            }
            try {
                return of(ObjectMappers.JSON_MAPPER.convertValue(
                        value, new TypeReference<Map<String, UndiscriminatedUnion1InlineMapItem1>>() {}));
            } catch (IllegalArgumentException e) {
            }
            try {
                return of(ObjectMappers.JSON_MAPPER.convertValue(value, ReferenceType.class));
            } catch (IllegalArgumentException e) {
            }
            throw new JsonParseException(p, "Failed to deserialize");
        }
    }
}
