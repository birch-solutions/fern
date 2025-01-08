/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.object.types;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonUnwrapped;
import com.fasterxml.jackson.annotation.JsonValue;
import java.util.Objects;
import java.util.Optional;

public final class DiscriminatedUnion1 {
    private final Value value;

    @JsonCreator(mode = JsonCreator.Mode.DELEGATING)
    private DiscriminatedUnion1(Value value) {
        this.value = value;
    }

    public <T> T visit(Visitor<T> visitor) {
        return value.visit(visitor);
    }

    public static DiscriminatedUnion1 type1(DiscriminatedUnion1InlineType1 value) {
        return new DiscriminatedUnion1(new Type1Value(value));
    }

    public static DiscriminatedUnion1 type2(DiscriminatedUnion1InlineType2 value) {
        return new DiscriminatedUnion1(new Type2Value(value));
    }

    public static DiscriminatedUnion1 ref(ReferenceType value) {
        return new DiscriminatedUnion1(new RefValue(value));
    }

    public boolean isType1() {
        return value instanceof Type1Value;
    }

    public boolean isType2() {
        return value instanceof Type2Value;
    }

    public boolean isRef() {
        return value instanceof RefValue;
    }

    public boolean _isUnknown() {
        return value instanceof _UnknownValue;
    }

    public Optional<DiscriminatedUnion1InlineType1> getType1() {
        if (isType1()) {
            return Optional.of(((Type1Value) value).value);
        }
        return Optional.empty();
    }

    public Optional<DiscriminatedUnion1InlineType2> getType2() {
        if (isType2()) {
            return Optional.of(((Type2Value) value).value);
        }
        return Optional.empty();
    }

    public Optional<ReferenceType> getRef() {
        if (isRef()) {
            return Optional.of(((RefValue) value).value);
        }
        return Optional.empty();
    }

    public Optional<Object> _getUnknown() {
        if (_isUnknown()) {
            return Optional.of(((_UnknownValue) value).value);
        }
        return Optional.empty();
    }

    @JsonValue
    private Value getValue() {
        return this.value;
    }

    public interface Visitor<T> {
        T visitType1(DiscriminatedUnion1InlineType1 type1);

        T visitType2(DiscriminatedUnion1InlineType2 type2);

        T visitRef(ReferenceType ref);

        T _visitUnknown(Object unknownType);
    }

    @JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "type", visible = true, defaultImpl = _UnknownValue.class)
    @JsonSubTypes({
        @JsonSubTypes.Type(Type1Value.class),
        @JsonSubTypes.Type(Type2Value.class),
        @JsonSubTypes.Type(RefValue.class)
    })
    @JsonIgnoreProperties(ignoreUnknown = true)
    private interface Value {
        <T> T visit(Visitor<T> visitor);
    }

    @JsonTypeName("type1")
    private static final class Type1Value implements Value {
        @JsonUnwrapped
        private DiscriminatedUnion1InlineType1 value;

        @JsonCreator(mode = JsonCreator.Mode.PROPERTIES)
        private Type1Value() {}

        private Type1Value(DiscriminatedUnion1InlineType1 value) {
            this.value = value;
        }

        @java.lang.Override
        public <T> T visit(Visitor<T> visitor) {
            return visitor.visitType1(value);
        }

        @java.lang.Override
        public boolean equals(Object other) {
            if (this == other) return true;
            return other instanceof Type1Value && equalTo((Type1Value) other);
        }

        private boolean equalTo(Type1Value other) {
            return value.equals(other.value);
        }

        @java.lang.Override
        public int hashCode() {
            return Objects.hash(this.value);
        }

        @java.lang.Override
        public String toString() {
            return "DiscriminatedUnion1{" + "value: " + value + "}";
        }
    }

    @JsonTypeName("type2")
    private static final class Type2Value implements Value {
        @JsonUnwrapped
        private DiscriminatedUnion1InlineType2 value;

        @JsonCreator(mode = JsonCreator.Mode.PROPERTIES)
        private Type2Value() {}

        private Type2Value(DiscriminatedUnion1InlineType2 value) {
            this.value = value;
        }

        @java.lang.Override
        public <T> T visit(Visitor<T> visitor) {
            return visitor.visitType2(value);
        }

        @java.lang.Override
        public boolean equals(Object other) {
            if (this == other) return true;
            return other instanceof Type2Value && equalTo((Type2Value) other);
        }

        private boolean equalTo(Type2Value other) {
            return value.equals(other.value);
        }

        @java.lang.Override
        public int hashCode() {
            return Objects.hash(this.value);
        }

        @java.lang.Override
        public String toString() {
            return "DiscriminatedUnion1{" + "value: " + value + "}";
        }
    }

    @JsonTypeName("ref")
    private static final class RefValue implements Value {
        @JsonUnwrapped
        private ReferenceType value;

        @JsonCreator(mode = JsonCreator.Mode.PROPERTIES)
        private RefValue() {}

        private RefValue(ReferenceType value) {
            this.value = value;
        }

        @java.lang.Override
        public <T> T visit(Visitor<T> visitor) {
            return visitor.visitRef(value);
        }

        @java.lang.Override
        public boolean equals(Object other) {
            if (this == other) return true;
            return other instanceof RefValue && equalTo((RefValue) other);
        }

        private boolean equalTo(RefValue other) {
            return value.equals(other.value);
        }

        @java.lang.Override
        public int hashCode() {
            return Objects.hash(this.value);
        }

        @java.lang.Override
        public String toString() {
            return "DiscriminatedUnion1{" + "value: " + value + "}";
        }
    }

    private static final class _UnknownValue implements Value {
        private String type;

        @JsonValue
        private Object value;

        @JsonCreator(mode = JsonCreator.Mode.PROPERTIES)
        private _UnknownValue(@JsonProperty("value") Object value) {}

        @java.lang.Override
        public <T> T visit(Visitor<T> visitor) {
            return visitor._visitUnknown(value);
        }

        @java.lang.Override
        public boolean equals(Object other) {
            if (this == other) return true;
            return other instanceof _UnknownValue && equalTo((_UnknownValue) other);
        }

        private boolean equalTo(_UnknownValue other) {
            return type.equals(other.type) && value.equals(other.value);
        }

        @java.lang.Override
        public int hashCode() {
            return Objects.hash(this.type, this.value);
        }

        @java.lang.Override
        public String toString() {
            return "DiscriminatedUnion1{" + "type: " + type + ", value: " + value + "}";
        }
    }
}
