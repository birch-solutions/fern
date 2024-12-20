/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.object.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.object.core.ObjectMappers;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = DiscriminatedUnion1InlineType1InlineType1.Builder.class)
public final class DiscriminatedUnion1InlineType1InlineType1 {
    private final String foo;

    private final ReferenceType ref;

    private DiscriminatedUnion1InlineType1InlineType1(String foo, ReferenceType ref) {
        this.foo = foo;
        this.ref = ref;
    }

    /**
     * @return lorem ipsum
     */
    @JsonProperty("foo")
    public String getFoo() {
        return foo;
    }

    /**
     * @return lorem ipsum
     */
    @JsonProperty("ref")
    public ReferenceType getRef() {
        return ref;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof DiscriminatedUnion1InlineType1InlineType1
                && equalTo((DiscriminatedUnion1InlineType1InlineType1) other);
    }

    private boolean equalTo(DiscriminatedUnion1InlineType1InlineType1 other) {
        return foo.equals(other.foo) && ref.equals(other.ref);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.foo, this.ref);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static FooStage builder() {
        return new Builder();
    }

    public interface FooStage {
        RefStage foo(String foo);

        Builder from(DiscriminatedUnion1InlineType1InlineType1 other);
    }

    public interface RefStage {
        _FinalStage ref(ReferenceType ref);
    }

    public interface _FinalStage {
        DiscriminatedUnion1InlineType1InlineType1 build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements FooStage, RefStage, _FinalStage {
        private String foo;

        private ReferenceType ref;

        private Builder() {}

        @java.lang.Override
        public Builder from(DiscriminatedUnion1InlineType1InlineType1 other) {
            foo(other.getFoo());
            ref(other.getRef());
            return this;
        }

        /**
         * <p>lorem ipsum</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        @JsonSetter("foo")
        public RefStage foo(String foo) {
            this.foo = Objects.requireNonNull(foo, "foo must not be null");
            return this;
        }

        /**
         * <p>lorem ipsum</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        @JsonSetter("ref")
        public _FinalStage ref(ReferenceType ref) {
            this.ref = Objects.requireNonNull(ref, "ref must not be null");
            return this;
        }

        @java.lang.Override
        public DiscriminatedUnion1InlineType1InlineType1 build() {
            return new DiscriminatedUnion1InlineType1InlineType1(foo, ref);
        }
    }
}
