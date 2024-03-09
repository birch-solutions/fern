/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.unions.resources.types.types;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import java.util.Objects;
import java.util.Optional;

public final class UnionWithDiscriminant {
    private final Value value;

    @JsonCreator(mode = JsonCreator.Mode.DELEGATING)
    private UnionWithDiscriminant(Value value) {
        this.value = value;
    }

    public <T> T visit(Visitor<T> visitor) {
        return value.visit(visitor);
    }

    public static UnionWithDiscriminant foo(Foo foo) {
        return new UnionWithDiscriminant(new FooValue(foo));
    }

    public static UnionWithDiscriminant bar(Bar bar) {
        return new UnionWithDiscriminant(new BarValue(bar));
    }

    public boolean isFoo() {
        return value instanceof FooValue;
    }

    public boolean isBar() {
        return value instanceof BarValue;
    }

    public boolean _isUnknown() {
        return value instanceof _UnknownValue;
    }

    public Optional<Foo> getFoo() {
        if (isFoo()) {
            return Optional.of(((FooValue) value).foo);
        }
        return Optional.empty();
    }

    public Optional<Bar> getBar() {
        if (isBar()) {
            return Optional.of(((BarValue) value).bar);
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
        T visitFoo(Foo foo);

        T visitBar(Bar bar);

        T _visitUnknown(Object unknownType);
    }

    @JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "_type", visible = true, defaultImpl = _UnknownValue.class)
    @JsonSubTypes({@JsonSubTypes.Type(FooValue.class), @JsonSubTypes.Type(BarValue.class)})
    @JsonIgnoreProperties(ignoreUnknown = true)
    private interface Value {
        <T> T visit(Visitor<T> visitor);
    }

    @JsonTypeName("foo")
    private static final class FooValue implements Value {
        @JsonProperty("foo")
        private Foo foo;

        @JsonCreator(mode = JsonCreator.Mode.PROPERTIES)
        private FooValue(@JsonProperty("foo") Foo foo) {
            this.foo = foo;
        }

        @java.lang.Override
        public <T> T visit(Visitor<T> visitor) {
            return visitor.visitFoo(foo);
        }

        @java.lang.Override
        public boolean equals(Object other) {
            if (this == other) return true;
            return other instanceof FooValue && equalTo((FooValue) other);
        }

        private boolean equalTo(FooValue other) {
            return foo.equals(other.foo);
        }

        @java.lang.Override
        public int hashCode() {
            return Objects.hash(this.foo);
        }

        @java.lang.Override
        public String toString() {
            return "UnionWithDiscriminant{" + "foo: " + foo + "}";
        }
    }

    @JsonTypeName("bar")
    private static final class BarValue implements Value {
        @JsonProperty("bar")
        private Bar bar;

        @JsonCreator(mode = JsonCreator.Mode.PROPERTIES)
        private BarValue(@JsonProperty("bar") Bar bar) {
            this.bar = bar;
        }

        @java.lang.Override
        public <T> T visit(Visitor<T> visitor) {
            return visitor.visitBar(bar);
        }

        @java.lang.Override
        public boolean equals(Object other) {
            if (this == other) return true;
            return other instanceof BarValue && equalTo((BarValue) other);
        }

        private boolean equalTo(BarValue other) {
            return bar.equals(other.bar);
        }

        @java.lang.Override
        public int hashCode() {
            return Objects.hash(this.bar);
        }

        @java.lang.Override
        public String toString() {
            return "UnionWithDiscriminant{" + "bar: " + bar + "}";
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
            return "UnionWithDiscriminant{" + "type: " + type + ", value: " + value + "}";
        }
    }
}
