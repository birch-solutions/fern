/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.fileUpload.model.service;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.fileUpload.core.ObjectMappers;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = MyObject.Builder.class)
public final class MyObject {
    private final String foo;

    private MyObject(String foo) {
        this.foo = foo;
    }

    @JsonProperty("foo")
    public String getFoo() {
        return foo;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof MyObject && equalTo((MyObject) other);
    }

    private boolean equalTo(MyObject other) {
        return foo.equals(other.foo);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.foo);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static FooStage builder() {
        return new Builder();
    }

    public interface FooStage {
        _FinalStage foo(@NotNull String foo);

        Builder from(MyObject other);
    }

    public interface _FinalStage {
        MyObject build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements FooStage, _FinalStage {
        private String foo;

        private Builder() {}

        @java.lang.Override
        public Builder from(MyObject other) {
            foo(other.getFoo());
            return this;
        }

        @java.lang.Override
        @JsonSetter("foo")
        public _FinalStage foo(@NotNull String foo) {
            this.foo = Objects.requireNonNull(foo, "foo must not be null");
            return this;
        }

        @java.lang.Override
        public MyObject build() {
            return new MyObject(foo);
        }
    }
}
